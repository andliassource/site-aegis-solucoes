const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const { name, email, message } = data;

  // Aqui você pode adicionar a lógica para enviar o email.
  // Por exemplo, usando um serviço de email como o Nodemailer.
  // Por enquanto, vamos apenas registrar os dados no console.
  console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);

  return { success: true };
});
