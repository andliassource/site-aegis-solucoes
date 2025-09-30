const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure o transporte de email usando as variáveis de ambiente do Firebase
// Para configurar, use o comando:
// firebase functions:config:set gmail.email="seu-email@gmail.com" gmail.password="sua-senha-de-app"
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = "Aegis Soluções";

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const { name, email, message, empresa } = data;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: gmailEmail, // O e-mail de destino será o que você configurar na variável de ambiente
    subject: `Novo contato de ${name} pelo site`,
    html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
    `,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    console.log("E-mail de contato enviado para:", gmailEmail);
    return { success: true, message: "Mensagem enviada com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    // Lança um erro HTTPS para que o cliente possa tratar
    throw new functions.https.HttpsError(
      "internal",
      "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
    );
  }
});
