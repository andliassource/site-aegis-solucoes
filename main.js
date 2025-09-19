// JavaScript para o site institucional
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
	// NOTA: A rolagem suave (smooth scroll) já é tratada pela classe "scroll-smooth" do Tailwind no HTML.
	// O código JS para isso foi removido para evitar redundância.

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
	// Lógica para o menu mobile
	const mobileMenuButton = document.getElementById('mobile-menu-btn');
	const mobileMenu = document.getElementById('mobile-menu');

    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
	if (mobileMenuButton && mobileMenu) {
		mobileMenuButton.addEventListener('click', () => {
			mobileMenu.classList.toggle('hidden');
		});
	}

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
	// Header scroll effect
	window.addEventListener('scroll', function() {
		const header = document.querySelector('header');
		if (header) {
			if (window.scrollY > 50) {
				header.style.background = 'rgba(255, 255, 255, 0.95)';
				header.style.backdropFilter = 'blur(10px)';
			} else {
				header.style.background = '#fff';
				header.style.backdropFilter = 'none';
			}
		}
	});

    // Aplicar animação aos cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
	// Animação de entrada dos cards
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px' // Inicia a animação um pouco antes de o elemento estar totalmente visível
	};

	const cardObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
				observer.unobserve(entry.target); // Para a observação após a animação
			}
		});
	}, observerOptions);

	// Aplicar animação aos cards de funcionalidades (selecionando pela estrutura de classes)
	document.querySelectorAll('#funcionalidades .grid > div').forEach(card => {
		card.style.opacity = '0';
		card.style.transform = 'translateY(30px)';
		card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		cardObserver.observe(card);
	});
});

// A função do simulador precisa estar no escopo global para ser chamada pelo `onclick` no HTML.
function simularConformidade() {
	const setor = document.getElementById('setor').value;
	const faturamento = document.getElementById('faturamento').value;
	const sistemaFiscal = document.getElementById('sistema_fiscal').value;
	const revisaoConformidade = document.getElementById('revisao_conformidade').value;
	const reformaTributaria = document.getElementById('reforma_tributaria').value;
	const resultsDiv = document.getElementById('simulatorResults');
	const riskScoreSpan = document.getElementById('riskScore');
	const riskDescriptionP = document.getElementById('riskDescription');

	if (!setor || !faturamento || !sistemaFiscal || !revisaoConformidade || !reformaTributaria) {
		alert('Por favor, preencha todas as perguntas do simulador.');
		return;
	}

	let score = 0;

	// Lógica de pontuação
	const setorScores = { 'industria': 5, 'varejo': 4, 'logistica': 3, 'financeiro': 4, 'saude': 3, 'servicos': 2, 'outro': 2 };
	const faturamentoScores = { 'muito_grande': 6, 'grande': 4, 'medio': 2, 'pequeno': 1 };
	const sistemaScores = { 'nao': 5, 'parcial': 3, 'sim': 1 };
	const revisaoScores = { 'nunca': 6, 'anual': 4, 'semestral': 2, 'trimestral': 1, 'mensal': 1 };
	const reformaScores = { 'desinformado': 7, 'avaliando': 4, 'planejado': 1 };

	score += setorScores[setor] || 0;
	score += faturamentoScores[faturamento] || 0;
	score += sistemaScores[sistemaFiscal] || 0;
	score += revisaoScores[revisaoConformidade] || 0;
	score += reformaScores[reformaTributaria] || 0;

	let description = '';
	let riskClass = '';

	if (score >= 20) {
		description = "Seu risco é <strong>CRÍTICO</strong>. Sua empresa está vulnerável a multas e ineficiências. É urgente implementar soluções como a Aegis para garantir sua segurança.";
		riskClass = 'risk-score-high';
	} else if (score >= 12) {
		description = "Seu risco é <strong>ELEVADO</strong>. Existem lacunas em sua gestão que podem gerar problemas. A Aegis pode fornecer as ferramentas para mitigar esses riscos.";
		riskClass = 'risk-score-medium';
	} else {
		description = "Seu risco é <strong>MODERADO</strong>. Embora tenha uma base, há espaço para aprimoramento. Com a Aegis, sua empresa pode alcançar um novo patamar de excelência.";
		riskClass = 'risk-score-low';
	}

	riskScoreSpan.textContent = `${score} Pontos de Risco`;
	riskScoreSpan.className = 'block text-5xl font-extrabold mb-4 ' + riskClass;
	riskDescriptionP.innerHTML = description;
	resultsDiv.style.display = 'block';

	resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}