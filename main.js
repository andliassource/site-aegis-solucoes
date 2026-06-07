document.addEventListener('DOMContentLoaded', () => {
  const topbar = document.getElementById('topbar');
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const langButtons = document.querySelectorAll('[data-set-lang]');

  const translations = {
    pt: {
      meta: {
        title: 'Aegis Solucoes | ERP/CRM 360 com 40+ modulos empresariais',
        description:
          'Aegis Solucoes: ERP/CRM 360 com 40+ modulos para Financeiro, Fiscal, RH, CRM, Projetos, GRC, BI e Operacoes, com IA aplicada ao contexto empresarial.',
        ogTitle: 'Aegis Solucoes | ERP/CRM 360 com 40+ modulos empresariais',
        ogDescription: 'Gestao empresarial integrada com stack completo de modulos, governanca e IA aplicada a decisao.',
        twitterTitle: 'Aegis Solucoes | ERP/CRM 360 com 40+ modulos empresariais',
        twitterDescription: 'Uma plataforma para operar, governar e escalar com visao 360 de negocio.',
      },
      text: {
        'brand.name': 'Aegis Solucoes',
        'nav.modules': 'Modulos',
        'nav.architecture': 'Arquitetura',
        'nav.advantages': 'Vantagens',
        'nav.enterApp': 'Entrar no App',
        'nav.talkSpecialist': 'Falar com Especialista',
        'hero.eyebrow': 'Plataforma operacional Aegis',
        'hero.title': 'ERP/CRM <span>360 empresarial</span> para conectar operacao, governanca e crescimento no mesmo ecossistema.',
        'hero.lead':
          'Sao 40+ modulos ativos entre Financeiro, Fiscal, RH, CRM, Projetos, GRC, BI, Integracoes, Riscos, Qualidade e Operacoes. Tudo com visao 360, rastreabilidade e IA de apoio.',
        'hero.ctaPrimary': 'Ver ambiente',
        'hero.ctaSecondary': 'Explorar modulos',
        'hero.proof1': 'ERP Modular para adocao por fases',
        'hero.proof2': 'Governanca integrada e trilha de auditoria',
        'hero.proof3': 'Dashboards taticos e executivos por persona',
        'stats.modules': 'modulos ERP/CRM em operacao',
        'stats.traceability': 'arquitetura focada em rastreabilidade',
        'stats.availability': 'dados operacionais disponiveis',
        'stats.vision': 'com visao 360 de negocio',
        'modules.eyebrow': 'Modulos reais da operacao',
        'modules.title': 'Aderente ao stack real do Aegis App (ERP/CRM/GRC/BI)',
        'modules.subtitle':
          'Este website agora comunica o que a plataforma realmente entrega em producao, sem reduzir a proposta para um recorte pequeno de modulos.',
        'modules.scopeTitle': '40+ modulos distribuidos em frentes reais do negocio',
        'modules.scopeDesc': 'A comunicacao agora explicita a cobertura funcional para operacao, controladoria, governanca e execucao.',
        'module.finance.title': 'Financeiro e Contabil',
        'module.finance.desc': 'Fluxo de caixa, contas, conciliacoes, resultado e indicadores para previsibilidade de margem.',
        'module.fiscal.title': 'Fiscal e Tributario',
        'module.fiscal.desc': 'Calendario fiscal, obrigacoes, validacoes e reducao de risco de multa em ambiente auditavel.',
        'module.hr.title': 'RH e Departamento Pessoal',
        'module.hr.desc': 'Rotinas de pessoas, conformidade trabalhista e visao de produtividade por time.',
        'module.crm.title': 'CRM e Comercial',
        'module.crm.desc': 'Pipeline, funil, previsao de receita e acompanhamento de oportunidades em tempo real.',
        'module.projects.title': 'Projetos e Entregas',
        'module.projects.desc': 'Planejamento, prazos, risco de execucao e governanca de iniciativas estrategicas.',
        'module.compliance.title': 'Compliance e Auditoria',
        'module.compliance.desc': 'Controles, trilhas de aprovacao, evidencias e maturidade de governanca corporativa.',
        'module.bi.title': 'BI e Analytics',
        'module.bi.desc': 'Paineis executivos com leitura por persona e camada tatica para operacao orientada a dados.',
        'module.ai.title': 'IA Assistiva',
        'module.ai.desc': 'Insights acionaveis, alertas e priorizacao de anomalias com foco em decisao e resposta rapida.',
        'arch.eyebrow': 'Arquitetura de valor',
        'arch.title': 'Do dado operacional ao comando executivo',
        'arch.desc':
          'A experiencia foi redesenhada para comunicar nao apenas visual, mas maturidade de produto. O visitante entende rapidamente como a plataforma conecta processos criticos sem fragmentacao.',
        'arch.li1': 'Camada operacional: captura e execucao',
        'arch.li2': 'Camada de controle: risco, conformidade e auditoria',
        'arch.li3': 'Camada executiva: indicadores, tendencias e decisao',
        'arch.node1': 'Operacao',
        'arch.node2': 'Controles',
        'arch.node3': 'Insights IA',
        'arch.node4': 'Gestao Executiva',
        'adv.eyebrow': 'Por que evoluiu',
        'adv.title': 'Mais aderente aos padroes atuais de site B2B SaaS',
        'adv.card1.title': 'Narrativa orientada a produto real',
        'adv.card1.desc': 'O site agora conversa com os modulos existentes, sem prometer o que a plataforma nao entrega.',
        'adv.card2.title': 'Visual premium e responsivo',
        'adv.card2.desc': 'Tipografia contemporanea, atmosfera visual proprietaria e hierarquia clara em desktop e mobile.',
        'adv.card3.title': 'Conversao com contexto',
        'adv.card3.desc': 'CTAs em pontos estrategicos com foco em demo, conversa comercial e qualificacao de demanda.',
        'faq.title': 'Perguntas que ajudam no fechamento',
        'faq.q1': 'O site usa os mesmos modulos da aplicacao?',
        'faq.a1': 'Sim. A estrutura comercial foi alinhada aos blocos funcionais existentes no Aegis App para manter consistencia entre promessa e entrega.',
        'faq.q2': 'Posso evoluir por fases sem parar a operacao?',
        'faq.a2': 'Sim. O modelo modular permite adocao progressiva, priorizando primeiro as frentes de maior impacto no negocio.',
        'faq.q3': 'A plataforma atende exigencias de governanca e auditoria?',
        'faq.a3': 'Sim. Ha trilha de evidencias, controles e visao de risco orientada a compliance corporativo.',
        'cta.eyebrow': 'Proximo passo',
        'cta.title': 'Quer o website totalmente alinhado com sua esteira comercial?',
        'cta.desc': 'Podemos evoluir com versao institucional + versao por segmento + paginas por modulo.',
        'cta.openApp': 'Abrir aplicacao',
        'footer.copy': 'Aegis Solucoes © 2026. ERP/CRM 360 com 40+ modulos para operacao, governanca e escala.',
        'footer.home': 'Inicio',
        'footer.modules': 'Modulos',
        'footer.architecture': 'Arquitetura',
        'footer.contact': 'Contato',
      },
    },
    en: {
      meta: {
        title: 'Aegis Solutions | 360 ERP/CRM with 40+ business modules',
        description:
          'Aegis Solutions: 360 ERP/CRM with 40+ modules for Finance, Tax, HR, CRM, Projects, GRC, BI and Operations, with AI applied to business context.',
        ogTitle: 'Aegis Solutions | 360 ERP/CRM with 40+ business modules',
        ogDescription: 'Integrated business management with a complete module stack, governance, and decision-oriented AI.',
        twitterTitle: 'Aegis Solutions | 360 ERP/CRM with 40+ business modules',
        twitterDescription: 'One platform to operate, govern, and scale with a 360 business view.',
      },
      text: {
        'brand.name': 'Aegis Solutions',
        'nav.modules': 'Modules',
        'nav.architecture': 'Architecture',
        'nav.advantages': 'Advantages',
        'nav.enterApp': 'Open App',
        'nav.talkSpecialist': 'Talk to Specialist',
        'hero.eyebrow': 'Aegis operational platform',
        'hero.title': 'A <span>360 enterprise ERP/CRM</span> to connect operations, governance, and growth in one ecosystem.',
        'hero.lead':
          '40+ active modules across Finance, Tax, HR, CRM, Projects, GRC, BI, Integrations, Risk, Quality, and Operations. Full 360 visibility with traceability and AI support.',
        'hero.ctaPrimary': 'See platform',
        'hero.ctaSecondary': 'Explore modules',
        'hero.proof1': 'Modular ERP for phased adoption',
        'hero.proof2': 'Integrated governance and audit trail',
        'hero.proof3': 'Tactical and executive dashboards by persona',
        'stats.modules': 'active ERP/CRM modules',
        'stats.traceability': 'traceability-first architecture',
        'stats.availability': 'operational data availability',
        'stats.vision': 'with 360 business visibility',
        'modules.eyebrow': 'Real operational modules',
        'modules.title': 'Aligned with the real Aegis App stack (ERP/CRM/GRC/BI)',
        'modules.subtitle':
          'This website now communicates what the platform really delivers in production, without reducing it to a small module subset.',
        'modules.scopeTitle': '40+ modules distributed across real business fronts',
        'modules.scopeDesc': 'The messaging now makes the functional coverage explicit for operations, control, governance, and execution.',
        'module.finance.title': 'Finance and Accounting',
        'module.finance.desc': 'Cash flow, payable/receivable, reconciliation, results and indicators for margin predictability.',
        'module.fiscal.title': 'Tax and Fiscal',
        'module.fiscal.desc': 'Tax calendar, obligations, validations, and reduced fine exposure in an auditable environment.',
        'module.hr.title': 'HR and Payroll',
        'module.hr.desc': 'People operations, labor compliance, and productivity visibility by team.',
        'module.crm.title': 'CRM and Sales',
        'module.crm.desc': 'Pipeline, funnel, revenue forecast, and opportunity tracking in real time.',
        'module.projects.title': 'Projects and Delivery',
        'module.projects.desc': 'Planning, deadlines, execution risk, and governance for strategic initiatives.',
        'module.compliance.title': 'Compliance and Audit',
        'module.compliance.desc': 'Controls, approval trails, evidence, and corporate governance maturity.',
        'module.bi.title': 'BI and Analytics',
        'module.bi.desc': 'Executive dashboards by persona and tactical analysis for data-driven operations.',
        'module.ai.title': 'Assistive AI',
        'module.ai.desc': 'Actionable insights, alerts, and anomaly prioritization for faster decisions.',
        'arch.eyebrow': 'Value architecture',
        'arch.title': 'From operational data to executive command',
        'arch.desc':
          'The experience was redesigned to communicate not only aesthetics but product maturity. Visitors quickly understand how the platform connects critical processes without fragmentation.',
        'arch.li1': 'Operational layer: capture and execution',
        'arch.li2': 'Control layer: risk, compliance and audit',
        'arch.li3': 'Executive layer: indicators, trends and decisions',
        'arch.node1': 'Operations',
        'arch.node2': 'Controls',
        'arch.node3': 'AI Insights',
        'arch.node4': 'Executive Management',
        'adv.eyebrow': 'Why it evolved',
        'adv.title': 'Better aligned with modern B2B SaaS standards',
        'adv.card1.title': 'Product-driven narrative',
        'adv.card1.desc': 'The site now reflects existing modules without promising what the platform does not deliver.',
        'adv.card2.title': 'Premium and responsive visual',
        'adv.card2.desc': 'Contemporary typography, unique visual atmosphere, and clear hierarchy on desktop and mobile.',
        'adv.card3.title': 'Conversion with context',
        'adv.card3.desc': 'Strategic CTAs focused on demo, commercial conversation, and lead qualification.',
        'faq.title': 'Questions that support conversion',
        'faq.q1': 'Does the site reflect the same modules as the application?',
        'faq.a1': 'Yes. The commercial structure is aligned with functional blocks already available in the Aegis App.',
        'faq.q2': 'Can we adopt it in phases without stopping operations?',
        'faq.a2': 'Yes. The modular model supports phased adoption by prioritizing high-impact fronts first.',
        'faq.q3': 'Does the platform support governance and audit requirements?',
        'faq.a3': 'Yes. It includes evidence trails, controls, and risk visibility designed for corporate compliance.',
        'cta.eyebrow': 'Next step',
        'cta.title': 'Want the website fully aligned with your commercial pipeline?',
        'cta.desc': 'We can evolve with institutional version + segment pages + module-specific pages.',
        'cta.openApp': 'Open application',
        'footer.copy': 'Aegis Solutions © 2026. 360 ERP/CRM with 40+ modules for operations, governance, and scale.',
        'footer.home': 'Home',
        'footer.modules': 'Modules',
        'footer.architecture': 'Architecture',
        'footer.contact': 'Contact',
      },
    },
    es: {
      meta: {
        title: 'Aegis Soluciones | ERP/CRM 360 con 40+ modulos empresariales',
        description:
          'Aegis Soluciones: ERP/CRM 360 con 40+ modulos para Finanzas, Fiscal, RRHH, CRM, Proyectos, GRC, BI y Operaciones, con IA aplicada al contexto empresarial.',
        ogTitle: 'Aegis Soluciones | ERP/CRM 360 con 40+ modulos empresariales',
        ogDescription: 'Gestion empresarial integrada con stack completo de modulos, gobernanza e IA orientada a decisiones.',
        twitterTitle: 'Aegis Soluciones | ERP/CRM 360 con 40+ modulos empresariales',
        twitterDescription: 'Una plataforma para operar, gobernar y escalar con vision 360 del negocio.',
      },
      text: {
        'brand.name': 'Aegis Soluciones',
        'nav.modules': 'Modulos',
        'nav.architecture': 'Arquitectura',
        'nav.advantages': 'Ventajas',
        'nav.enterApp': 'Entrar al App',
        'nav.talkSpecialist': 'Hablar con Especialista',
        'hero.eyebrow': 'Plataforma operacional Aegis',
        'hero.title': 'Un <span>ERP/CRM 360 empresarial</span> para conectar operacion, gobernanza y crecimiento en un solo ecosistema.',
        'hero.lead':
          'Mas de 40 modulos activos en Finanzas, Fiscal, RRHH, CRM, Proyectos, GRC, BI, Integraciones, Riesgos, Calidad y Operaciones. Vision 360 con trazabilidad y soporte IA.',
        'hero.ctaPrimary': 'Ver plataforma',
        'hero.ctaSecondary': 'Explorar modulos',
        'hero.proof1': 'ERP modular para adopcion por fases',
        'hero.proof2': 'Gobernanza integrada y traza de auditoria',
        'hero.proof3': 'Dashboards tacticos y ejecutivos por perfil',
        'stats.modules': 'modulos ERP/CRM activos',
        'stats.traceability': 'arquitectura enfocada en trazabilidad',
        'stats.availability': 'datos operativos disponibles',
        'stats.vision': 'con vision 360 del negocio',
        'modules.eyebrow': 'Modulos reales de la operacion',
        'modules.title': 'Alineado al stack real del Aegis App (ERP/CRM/GRC/BI)',
        'modules.subtitle':
          'Este sitio ahora comunica lo que la plataforma realmente entrega en produccion, sin reducir la propuesta a un recorte pequeno.',
        'modules.scopeTitle': '40+ modulos distribuidos en frentes reales del negocio',
        'modules.scopeDesc': 'La comunicacion ahora explicita la cobertura funcional para operacion, control, gobernanza y ejecucion.',
        'module.finance.title': 'Finanzas y Contabilidad',
        'module.finance.desc': 'Flujo de caja, cuentas, conciliaciones, resultados e indicadores para previsibilidad de margen.',
        'module.fiscal.title': 'Fiscal y Tributario',
        'module.fiscal.desc': 'Calendario fiscal, obligaciones, validaciones y menor riesgo de multas en un entorno auditable.',
        'module.hr.title': 'RRHH y Nomina',
        'module.hr.desc': 'Rutinas de personas, cumplimiento laboral y visibilidad de productividad por equipo.',
        'module.crm.title': 'CRM y Comercial',
        'module.crm.desc': 'Pipeline, embudo, pronostico de ingresos y seguimiento de oportunidades en tiempo real.',
        'module.projects.title': 'Proyectos y Entregas',
        'module.projects.desc': 'Planificacion, plazos, riesgo de ejecucion y gobernanza de iniciativas estrategicas.',
        'module.compliance.title': 'Compliance y Auditoria',
        'module.compliance.desc': 'Controles, trazas de aprobacion, evidencias y madurez de gobernanza corporativa.',
        'module.bi.title': 'BI y Analitica',
        'module.bi.desc': 'Dashboards ejecutivos por perfil y capa tactica para operacion orientada por datos.',
        'module.ai.title': 'IA Asistiva',
        'module.ai.desc': 'Insights accionables, alertas y priorizacion de anomalias para decisiones rapidas.',
        'arch.eyebrow': 'Arquitectura de valor',
        'arch.title': 'Del dato operativo al comando ejecutivo',
        'arch.desc':
          'La experiencia fue redisenada para comunicar no solo lo visual, sino madurez de producto. El visitante entiende rapido como la plataforma conecta procesos criticos sin fragmentacion.',
        'arch.li1': 'Capa operativa: captura y ejecucion',
        'arch.li2': 'Capa de control: riesgo, compliance y auditoria',
        'arch.li3': 'Capa ejecutiva: indicadores, tendencias y decisiones',
        'arch.node1': 'Operacion',
        'arch.node2': 'Controles',
        'arch.node3': 'Insights IA',
        'arch.node4': 'Gestion Ejecutiva',
        'adv.eyebrow': 'Por que evoluciono',
        'adv.title': 'Mas alineado con estandares actuales de sitios B2B SaaS',
        'adv.card1.title': 'Narrativa orientada a producto real',
        'adv.card1.desc': 'El sitio ahora refleja modulos existentes, sin prometer lo que la plataforma no entrega.',
        'adv.card2.title': 'Visual premium y responsivo',
        'adv.card2.desc': 'Tipografia contemporanea, atmosfera visual propia y jerarquia clara en desktop y mobile.',
        'adv.card3.title': 'Conversion con contexto',
        'adv.card3.desc': 'CTAs estrategicos enfocados en demo, conversacion comercial y calificacion de leads.',
        'faq.title': 'Preguntas que apoyan el cierre',
        'faq.q1': 'El sitio usa los mismos modulos que la aplicacion?',
        'faq.a1': 'Si. La estructura comercial fue alineada con los bloques funcionales ya existentes en Aegis App.',
        'faq.q2': 'Puedo adoptar por fases sin detener la operacion?',
        'faq.a2': 'Si. El modelo modular permite adopcion progresiva, priorizando primero los frentes de mayor impacto.',
        'faq.q3': 'La plataforma atiende requisitos de gobernanza y auditoria?',
        'faq.a3': 'Si. Incluye trazabilidad de evidencias, controles y vision de riesgo orientada a compliance corporativo.',
        'cta.eyebrow': 'Proximo paso',
        'cta.title': 'Quieres el sitio totalmente alineado con tu embudo comercial?',
        'cta.desc': 'Podemos evolucionar con version institucional + version por segmento + paginas por modulo.',
        'cta.openApp': 'Abrir aplicacion',
        'footer.copy': 'Aegis Soluciones © 2026. ERP/CRM 360 con 40+ modulos para operacion, gobernanza y escala.',
        'footer.home': 'Inicio',
        'footer.modules': 'Modulos',
        'footer.architecture': 'Arquitectura',
        'footer.contact': 'Contacto',
      },
    },
  };

  const resolveInitialLang = () => {
    const saved = localStorage.getItem('aegis-lang');
    if (saved && translations[saved]) return saved;
    const browser = (navigator.language || 'pt').toLowerCase();
    if (browser.startsWith('en')) return 'en';
    if (browser.startsWith('es')) return 'es';
    return 'pt';
  };

  const applyLanguage = (lang) => {
    const bundle = translations[lang] || translations.pt;

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    localStorage.setItem('aegis-lang', lang);

    if (bundle.meta) {
      document.title = bundle.meta.title;
      const metaTitle = document.getElementById('meta-title');
      const metaDescription = document.getElementById('meta-description');
      const metaOgTitle = document.getElementById('meta-og-title');
      const metaOgDescription = document.getElementById('meta-og-description');
      const metaTwitterTitle = document.getElementById('meta-twitter-title');
      const metaTwitterDescription = document.getElementById('meta-twitter-description');

      if (metaTitle) metaTitle.textContent = bundle.meta.title;
      if (metaDescription) metaDescription.setAttribute('content', bundle.meta.description);
      if (metaOgTitle) metaOgTitle.setAttribute('content', bundle.meta.ogTitle);
      if (metaOgDescription) metaOgDescription.setAttribute('content', bundle.meta.ogDescription);
      if (metaTwitterTitle) metaTwitterTitle.setAttribute('content', bundle.meta.twitterTitle);
      if (metaTwitterDescription) metaTwitterDescription.setAttribute('content', bundle.meta.twitterDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = bundle.text[key];
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = bundle.text[key];
      if (typeof value === 'string') {
        el.innerHTML = value;
      }
    });

    langButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.setLang === lang);
    });
  };

  const initialLang = resolveInitialLang();
  applyLanguage(initialLang);

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.setLang;
      if (translations[lang]) {
        applyLanguage(lang);
      }
    });
  });

  const onScroll = () => {
    if (!topbar) return;
    if (window.scrollY > 12) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});
