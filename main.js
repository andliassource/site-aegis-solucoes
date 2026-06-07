document.addEventListener('DOMContentLoaded', () => {
  const topbar = document.getElementById('topbar');
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const langButtons = document.querySelectorAll('[data-set-lang]');

  const translations = {
    pt: {
      meta: {
        title: 'Aegis Solucoes | ERP/CRM 360 para gestao empresarial integrada',
        description:
          'Aegis ERP/CRM centraliza financas, operacoes, RH, compliance e BI em uma unica plataforma. 40+ modulos, dashboard executivo em tempo real e rastreabilidade completa.',
        ogTitle: 'Aegis Solucoes | ERP/CRM 360 para gestao empresarial integrada',
        ogDescription: 'Opere, governe e cresca com visibilidade total. ERP/CRM com 40+ modulos e dashboard executivo em tempo real.',
        twitterTitle: 'Aegis Solucoes | ERP/CRM 360 para gestao empresarial integrada',
        twitterDescription: 'Financas, operacoes, RH, CRM e compliance em uma unica plataforma. Visibilidade total do negocio.',
      },
      text: {
        'brand.name': 'Aegis Solucoes',
        'nav.modules': 'Modulos',
        'nav.architecture': 'Como funciona',
        'nav.advantages': 'Por que Aegis',
        'nav.enterApp': 'Acessar o App',
        'nav.talkSpecialist': 'Falar com Especialista',
        'hero.eyebrow': 'Gestao empresarial integrada',
        'hero.title': 'Opere, governe e <span>cresca com visibilidade total</span> do seu negocio.',
        'hero.lead':
          'Aegis ERP/CRM reune 40+ modulos — Financeiro, Fiscal, CRM, RH, GRC, Projetos e BI — em uma unica plataforma com dashboard executivo em tempo real.',
        'hero.ctaPrimary': 'Acessar o App',
        'hero.ctaSecondary': 'Ver modulos',
        'hero.proof1': 'Dashboard com KPIs financeiros e operacionais',
        'hero.proof2': '40+ modulos prontos para uso',
        'hero.proof3': 'Governanca, compliance e rastreabilidade integrados',
        'stats.modules': 'modulos ERP/CRM/GRC em producao',
        'stats.traceability': 'rastreabilidade de ponta a ponta',
        'stats.availability': 'disponibilidade de dados operacionais',
        'stats.vision': 'visao unificada do negocio',
        'modules.eyebrow': 'Cobertura funcional',
        'modules.title': 'Uma plataforma. Toda a operacao.',
        'modules.subtitle':
          'Do financeiro ao RH, do CRM ao compliance — todos os processos criticos do negocio conectados e visiveis em um unico ambiente.',
        'modules.scopeTitle': '40+ modulos principais, cada um com sub-rotinas e fluxos dedicados',
        'modules.scopeDesc': 'Core, CRM, Financeiro, Operacoes, RH, GRC, TI e Sistema — com dashboards, relatorios e inteligencia de negocio em cada frente.',
        'module.core.title': 'Core e Dashboard',
        'module.core.desc': 'Painel executivo com KPIs em tempo real, atividade recente e acesso centralizado a todos os modulos da plataforma.',
        'module.finance.title': 'Financeiro e Contabil',
        'module.finance.desc': 'Fluxo de caixa, contas a pagar e receber, conciliacao bancaria e resultado financeiro com precisao e controle.',
        'module.fiscal.title': 'Fiscal e Tributario',
        'module.fiscal.desc': 'Calendario fiscal, obrigacoes acessorias, validacoes e controle de risco tributario em ambiente auditavel.',
        'module.operations.title': 'Operacoes e Supply',
        'module.operations.desc': 'Controle de estoque, pedidos, fornecedores, projetos e continuidade operacional em um unico painel.',
        'module.hr.title': 'RH e Gestao de Pessoas',
        'module.hr.desc': 'Folha, admissoes, treinamentos, avaliacoes e controle de acesso com rastreabilidade de ponta a ponta.',
        'module.crm.title': 'CRM e Comercial',
        'module.crm.desc': 'Gestao de clientes, funil de vendas, oportunidades, campanhas e jornada comercial integrada.',
        'module.grc.title': 'GRC, Risco e Compliance',
        'module.grc.desc': 'Gestao de riscos corporativos, auditorias, ESG, continuidade de negocios e conformidade regulatoria.',
        'module.it.title': 'TI, Suporte e Documentos',
        'module.it.desc': 'Central de servicos, SLA, base de conhecimento e gestao documental para a operacao interna.',
        'module.system.title': 'BI, Relatorios e Sistema',
        'module.system.desc': 'Inteligencia de negocio, relatorios gerenciais, notificacoes e configuracoes avancadas de plataforma.',
        'arch.eyebrow': 'Como funciona',
        'arch.title': 'Do dado bruto a decisao executiva',
        'arch.desc':
          'Aegis organiza a operacao em tres camadas que se conectam — do registro diario ate os indicadores estrategicos que guiam as decisoes da lideranca.',
        'arch.li1': 'Camada operacional: registros, pedidos, transacoes e processos do dia a dia',
        'arch.li2': 'Camada de controle: risco, conformidade, auditoria e governanca',
        'arch.li3': 'Camada executiva: KPIs, tendencias e inteligencia de negocio',
        'arch.node1': 'Operacao',
        'arch.node2': 'Controles',
        'arch.node3': 'Insights & IA',
        'arch.node4': 'Gestao Executiva',
        'adv.eyebrow': 'Por que Aegis',
        'adv.title': 'Projetado para quem nao pode perder visibilidade',
        'adv.card1.title': 'Tudo em um lugar',
        'adv.card1.desc': 'Elimine planilhas paralelas e sistemas fragmentados. Aegis centraliza financas, operacoes, RH e compliance em uma unica fonte de verdade.',
        'adv.card2.title': 'Visibilidade em tempo real',
        'adv.card2.desc': 'Dashboard executivo com KPIs financeiros, operacionais e de RH atualizados para decisoes rapidas com dados confiaveis.',
        'adv.card3.title': 'Governanca e rastreabilidade',
        'adv.card3.desc': 'Trilha de auditoria, controles de acesso granulares e rastreabilidade completa em todos os processos criticos do negocio.',
        'faq.title': 'Perguntas frequentes',
        'faq.q1': 'A plataforma atende empresas de qual porte?',
        'faq.a1': 'Aegis foi projetado para medias e grandes empresas que precisam de controle operacional robusto, governanca e visibilidade executiva em uma unica plataforma.',
        'faq.q2': 'Quanto tempo leva para implantacao?',
        'faq.a2': 'A plataforma esta pronta para uso com cadastros e configuracoes iniciais. A adocao pode ser faseada por modulo, priorizando as frentes de maior impacto imediato.',
        'faq.q3': 'Como funciona o suporte e a evolucao da plataforma?',
        'faq.a3': 'A equipe Aegis mantem ciclos continuos de desenvolvimento. Clientes tem acesso ao ambiente de producao atualizado e podem reportar necessidades diretamente.',
        'cta.eyebrow': 'Proximo passo',
        'cta.title': 'Pronto para unificar a gestao do seu negocio?',
        'cta.desc': 'Acesse o ambiente da plataforma ou entre em contato para uma conversa sobre como Aegis pode se encaixar na sua operacao.',
        'cta.openApp': 'Acessar o App',
        'footer.copy': 'Aegis Solucoes © 2026. Plataforma ERP/CRM 360 com 40+ modulos para gestao empresarial integrada.',
        'footer.home': 'Inicio',
        'footer.modules': 'Modulos',
        'footer.architecture': 'Como funciona',
        'footer.contact': 'Contato',
      },
    },
    en: {
      meta: {
        title: 'Aegis Solutions | 360 ERP/CRM for integrated business management',
        description:
          'Aegis ERP/CRM centralizes finance, operations, HR, compliance and BI in one platform. 40+ modules, real-time executive dashboard and full traceability.',
        ogTitle: 'Aegis Solutions | 360 ERP/CRM for integrated business management',
        ogDescription: 'Operate, govern and grow with full visibility. ERP/CRM with 40+ modules and real-time executive dashboard.',
        twitterTitle: 'Aegis Solutions | 360 ERP/CRM for integrated business management',
        twitterDescription: 'Finance, operations, HR, CRM and compliance in one platform. Total business visibility.',
      },
      text: {
        'brand.name': 'Aegis Solutions',
        'nav.modules': 'Modules',
        'nav.architecture': 'How it works',
        'nav.advantages': 'Why Aegis',
        'nav.enterApp': 'Access App',
        'nav.talkSpecialist': 'Talk to a Specialist',
        'hero.eyebrow': 'Integrated business management',
        'hero.title': 'Operate, govern and <span>grow with total visibility</span> of your business.',
        'hero.lead':
          'Aegis ERP/CRM brings together 40+ modules — Finance, Tax, CRM, HR, GRC, Projects and BI — in a single platform with a real-time executive dashboard.',
        'hero.ctaPrimary': 'Access the App',
        'hero.ctaSecondary': 'See modules',
        'hero.proof1': 'Dashboard with financial and operational KPIs',
        'hero.proof2': '40+ modules ready to use',
        'hero.proof3': 'Governance, compliance and traceability built in',
        'stats.modules': 'ERP/CRM/GRC modules in production',
        'stats.traceability': 'end-to-end traceability',
        'stats.availability': 'operational data availability',
        'stats.vision': 'unified business view',
        'modules.eyebrow': 'Functional coverage',
        'modules.title': 'One platform. Every operation.',
        'modules.subtitle':
          'From finance to HR, from CRM to compliance — all critical business processes connected and visible in a single environment.',
        'modules.scopeTitle': '40+ core modules, each with dedicated sub-routines and workflows',
        'modules.scopeDesc': 'Core, CRM, Finance, Operations, HR, GRC, IT and System — with dashboards, reports and business intelligence on every front.',
        'module.core.title': 'Core and Dashboard',
        'module.core.desc': 'Executive dashboard with real-time KPIs, recent activity and centralized access to all platform modules.',
        'module.finance.title': 'Finance and Accounting',
        'module.finance.desc': 'Cash flow, accounts payable and receivable, bank reconciliation and financial results with precision and control.',
        'module.fiscal.title': 'Tax and Fiscal',
        'module.fiscal.desc': 'Tax calendar, ancillary obligations, validations and tax risk control in an auditable environment.',
        'module.operations.title': 'Operations and Supply',
        'module.operations.desc': 'Inventory control, orders, suppliers, projects and operational continuity in one panel.',
        'module.hr.title': 'HR and People Management',
        'module.hr.desc': 'Payroll, onboarding, training, performance reviews and access control with end-to-end traceability.',
        'module.crm.title': 'CRM and Sales',
        'module.crm.desc': 'Customer management, sales pipeline, opportunities, campaigns and integrated commercial journey.',
        'module.grc.title': 'GRC, Risk and Compliance',
        'module.grc.desc': 'Corporate risk management, audits, ESG, business continuity and regulatory compliance.',
        'module.it.title': 'IT, Support and Documents',
        'module.it.desc': 'Service desk, SLA, knowledge base and document management for internal operations.',
        'module.system.title': 'BI, Reports and System',
        'module.system.desc': 'Business intelligence, management reports, notifications and advanced platform settings.',
        'arch.eyebrow': 'How it works',
        'arch.title': 'From raw data to executive decision',
        'arch.desc':
          'Aegis organizes your operation in three connected layers — from daily records to strategic indicators that drive leadership decisions.',
        'arch.li1': 'Operational layer: records, orders, transactions and daily processes',
        'arch.li2': 'Control layer: risk, compliance, audit and governance',
        'arch.li3': 'Executive layer: KPIs, trends and business intelligence',
        'arch.node1': 'Operations',
        'arch.node2': 'Controls',
        'arch.node3': 'Insights & AI',
        'arch.node4': 'Executive Management',
        'adv.eyebrow': 'Why Aegis',
        'adv.title': 'Built for those who cannot afford to lose visibility',
        'adv.card1.title': 'Everything in one place',
        'adv.card1.desc': 'Eliminate parallel spreadsheets and fragmented systems. Aegis centralizes finance, operations, HR and compliance in a single source of truth.',
        'adv.card2.title': 'Real-time visibility',
        'adv.card2.desc': 'Executive dashboard with up-to-date financial, operational and HR KPIs for fast decisions backed by reliable data.',
        'adv.card3.title': 'Governance and traceability',
        'adv.card3.desc': 'Audit trail, granular access controls and complete traceability across all critical business processes.',
        'faq.title': 'Frequently asked questions',
        'faq.q1': 'What company sizes does the platform serve?',
        'faq.a1': 'Aegis is designed for mid-size and large companies that need robust operational control, governance and executive visibility in one platform.',
        'faq.q2': 'How long does implementation take?',
        'faq.a2': 'The platform is ready to use with initial setup and configuration. Adoption can be phased by module, prioritizing the highest-impact areas first.',
        'faq.q3': 'How does support and platform evolution work?',
        'faq.a3': 'The Aegis team runs continuous development cycles. Clients have access to the updated production environment and can report needs directly.',
        'cta.eyebrow': 'Next step',
        'cta.title': 'Ready to unify your business management?',
        'cta.desc': 'Access the platform environment or get in touch to talk about how Aegis fits your operation.',
        'cta.openApp': 'Access the App',
        'footer.copy': 'Aegis Solutions © 2026. 360 ERP/CRM platform with 40+ modules for integrated business management.',
        'footer.home': 'Home',
        'footer.modules': 'Modules',
        'footer.architecture': 'How it works',
        'footer.contact': 'Contact',
      },
    },
    es: {
      meta: {
        title: 'Aegis Soluciones | ERP/CRM 360 para gestion empresarial integrada',
        description:
          'Aegis ERP/CRM centraliza finanzas, operaciones, RRHH, compliance y BI en una sola plataforma. 40+ modulos, dashboard ejecutivo en tiempo real y trazabilidad completa.',
        ogTitle: 'Aegis Soluciones | ERP/CRM 360 para gestion empresarial integrada',
        ogDescription: 'Opera, gobierna y crece con visibilidad total. ERP/CRM con 40+ modulos y dashboard ejecutivo en tiempo real.',
        twitterTitle: 'Aegis Soluciones | ERP/CRM 360 para gestion empresarial integrada',
        twitterDescription: 'Finanzas, operaciones, RRHH, CRM y compliance en una sola plataforma. Vision total del negocio.',
      },
      text: {
        'brand.name': 'Aegis Soluciones',
        'nav.modules': 'Modulos',
        'nav.architecture': 'Como funciona',
        'nav.advantages': 'Por que Aegis',
        'nav.enterApp': 'Acceder al App',
        'nav.talkSpecialist': 'Hablar con Especialista',
        'hero.eyebrow': 'Gestion empresarial integrada',
        'hero.title': 'Opera, gobierna y <span>crece con visibilidad total</span> de tu negocio.',
        'hero.lead':
          'Aegis ERP/CRM reune 40+ modulos — Finanzas, Fiscal, CRM, RRHH, GRC, Proyectos y BI — en una unica plataforma con dashboard ejecutivo en tiempo real.',
        'hero.ctaPrimary': 'Acceder al App',
        'hero.ctaSecondary': 'Ver modulos',
        'hero.proof1': 'Dashboard con KPIs financieros y operativos',
        'hero.proof2': '40+ modulos listos para usar',
        'hero.proof3': 'Gobernanza, compliance y trazabilidad integrados',
        'stats.modules': 'modulos ERP/CRM/GRC en produccion',
        'stats.traceability': 'trazabilidad de extremo a extremo',
        'stats.availability': 'disponibilidad de datos operativos',
        'stats.vision': 'vision unificada del negocio',
        'modules.eyebrow': 'Cobertura funcional',
        'modules.title': 'Una plataforma. Toda la operacion.',
        'modules.subtitle':
          'Desde finanzas hasta RRHH, desde CRM hasta compliance — todos los procesos criticos del negocio conectados y visibles en un unico entorno.',
        'modules.scopeTitle': '40+ modulos principales, cada uno con sub-rutinas y flujos dedicados',
        'modules.scopeDesc': 'Core, CRM, Finanzas, Operaciones, RRHH, GRC, TI y Sistema — con dashboards, reportes e inteligencia de negocio en cada frente.',
        'module.core.title': 'Core y Dashboard',
        'module.core.desc': 'Panel ejecutivo con KPIs en tiempo real, actividad reciente y acceso centralizado a todos los modulos de la plataforma.',
        'module.finance.title': 'Finanzas y Contabilidad',
        'module.finance.desc': 'Flujo de caja, cuentas por pagar y cobrar, conciliacion bancaria y resultado financiero con precision y control.',
        'module.fiscal.title': 'Fiscal y Tributario',
        'module.fiscal.desc': 'Calendario fiscal, obligaciones, validaciones y control de riesgo tributario en un entorno auditable.',
        'module.operations.title': 'Operaciones y Supply',
        'module.operations.desc': 'Control de inventario, pedidos, proveedores, proyectos y continuidad operacional en un solo panel.',
        'module.hr.title': 'RRHH y Gestion de Personas',
        'module.hr.desc': 'Nomina, altas, capacitaciones, evaluaciones y control de acceso con trazabilidad de extremo a extremo.',
        'module.crm.title': 'CRM y Comercial',
        'module.crm.desc': 'Gestion de clientes, embudo de ventas, oportunidades, campanas y recorrido comercial integrado.',
        'module.grc.title': 'GRC, Riesgo y Compliance',
        'module.grc.desc': 'Gestion de riesgos corporativos, auditorias, ESG, continuidad del negocio y cumplimiento regulatorio.',
        'module.it.title': 'TI, Soporte y Documentos',
        'module.it.desc': 'Mesa de servicio, SLA, base de conocimiento y gestion documental para la operacion interna.',
        'module.system.title': 'BI, Reportes y Sistema',
        'module.system.desc': 'Inteligencia de negocio, reportes gerenciales, notificaciones y configuraciones avanzadas de plataforma.',
        'arch.eyebrow': 'Como funciona',
        'arch.title': 'Del dato bruto a la decision ejecutiva',
        'arch.desc':
          'Aegis organiza la operacion en tres capas conectadas — desde el registro diario hasta los indicadores estrategicos que guian las decisiones de liderazgo.',
        'arch.li1': 'Capa operativa: registros, pedidos, transacciones y procesos del dia a dia',
        'arch.li2': 'Capa de control: riesgo, compliance, auditoria y gobernanza',
        'arch.li3': 'Capa ejecutiva: KPIs, tendencias e inteligencia de negocio',
        'arch.node1': 'Operacion',
        'arch.node2': 'Controles',
        'arch.node3': 'Insights & IA',
        'arch.node4': 'Gestion Ejecutiva',
        'adv.eyebrow': 'Por que Aegis',
        'adv.title': 'Disenado para quienes no pueden perder visibilidad',
        'adv.card1.title': 'Todo en un solo lugar',
        'adv.card1.desc': 'Elimina planillas paralelas y sistemas fragmentados. Aegis centraliza finanzas, operaciones, RRHH y compliance en una unica fuente de verdad.',
        'adv.card2.title': 'Visibilidad en tiempo real',
        'adv.card2.desc': 'Dashboard ejecutivo con KPIs financieros, operativos y de RRHH actualizados para decisiones rapidas con datos confiables.',
        'adv.card3.title': 'Gobernanza y trazabilidad',
        'adv.card3.desc': 'Registro de auditoria, controles de acceso granulares y trazabilidad completa en todos los procesos criticos del negocio.',
        'faq.title': 'Preguntas frecuentes',
        'faq.q1': 'A que tamano de empresa se dirige la plataforma?',
        'faq.a1': 'Aegis esta disenado para medianas y grandes empresas que necesitan control operacional robusto, gobernanza y visibilidad ejecutiva en una sola plataforma.',
        'faq.q2': 'Cuanto tiempo toma la implementacion?',
        'faq.a2': 'La plataforma esta lista para usar con configuracion inicial. La adopcion puede hacerse por fases segun modulo, priorizando las areas de mayor impacto.',
        'faq.q3': 'Como funciona el soporte y la evolucion de la plataforma?',
        'faq.a3': 'El equipo Aegis mantiene ciclos continuos de desarrollo. Los clientes tienen acceso al entorno de produccion actualizado y pueden reportar necesidades directamente.',
        'cta.eyebrow': 'Proximo paso',
        'cta.title': 'Listo para unificar la gestion de tu negocio?',
        'cta.desc': 'Accede al entorno de la plataforma o contactanos para conversar sobre como Aegis encaja en tu operacion.',
        'cta.openApp': 'Acceder al App',
        'footer.copy': 'Aegis Soluciones © 2026. Plataforma ERP/CRM 360 con 40+ modulos para gestion empresarial integrada.',
        'footer.home': 'Inicio',
        'footer.modules': 'Modulos',
        'footer.architecture': 'Como funciona',
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
