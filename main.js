document.addEventListener('DOMContentLoaded', () => {
  const topbar = document.getElementById('topbar');
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const langButtons = document.querySelectorAll('[data-set-lang]');

  const translations = {
    pt: {
      meta: {
        title: 'Aegis Solucoes | ERP/CRM 360 com 40+ modulos principais',
        description:
          'Aegis Solucoes: ERP/CRM 360 com 40+ modulos principais, com submodulos, funcoes e camadas de apoio para operacao, governanca, BI e IA aplicada ao contexto empresarial.',
        ogTitle: 'Aegis Solucoes | ERP/CRM 360 com 40+ modulos principais',
        ogDescription: 'Gestao empresarial integrada com dashboard central, governanca e camadas reais de negocio.',
        twitterTitle: 'Aegis Solucoes | ERP/CRM 360 com 40+ modulos principais',
        twitterDescription: 'Uma plataforma para operar, governar e escalar com visao 360 de negocio e rastreabilidade.',
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
          'A documentacao do produto aponta mais de 40 modulos principais no app, com submodulos, funcoes e camadas de apoio, e um dashboard que agrega KPIs de vendas e finanças em uma visao 360.',
        'hero.ctaPrimary': 'Ver ambiente',
        'hero.ctaSecondary': 'Explorar modulos',
        'hero.proof1': 'Dashboard principal com KPIs e atividade recente',
        'hero.proof2': '40+ modulos principais no app',
        'hero.proof3': 'submodulos, funcoes e camadas de apoio',
        'stats.modules': 'modulos principais e camadas de apoio documentadas',
        'stats.traceability': 'arquitetura focada em rastreabilidade',
        'stats.availability': 'dados operacionais disponiveis',
        'stats.vision': 'com visao 360 de negocio',
        'modules.eyebrow': 'Modulos reais da operacao',
        'modules.title': 'Aderente ao stack real do Aegis App (ERP/CRM/GRC/BI)',
        'modules.subtitle':
          'Este website agora comunica o que a plataforma realmente entrega em producao, sem reduzir a proposta para um recorte pequeno de modulos.',
        'modules.scopeTitle': '40+ modulos principais com submodulos e funcoes',
        'modules.scopeDesc': 'A comunicacao agora espelha a documentacao do produto: core, CRM, finance, operations, HR, GRC, IT e system, com dashboard central como ponto de entrada e camadas de apoio ao redor.',
        'module.core.title': 'Core e Dashboard',
        'module.core.desc': 'Home executiva, KPIs, atividade recente, autenticacao e entrada operacional para navegacao principal.',
        'module.finance.title': 'Financeiro e Contabil',
        'module.finance.desc': 'Fluxo de caixa, contas, conciliacao, resultado e indicadores para previsibilidade de margem.',
        'module.fiscal.title': 'Fiscal e Tributario',
        'module.fiscal.desc': 'Calendario fiscal, obrigacoes, validacoes e reducao de risco de multa em ambiente auditavel.',
        'module.operations.title': 'Operacoes e Supply',
        'module.operations.desc': 'Empresas, produtos, estoque, pedidos, projetos, integracoes e continuidade operacional.',
        'module.hr.title': 'RH e Usuarios',
        'module.hr.desc': 'Recursos humanos, usuarios, treinamentos e gestao de pessoas com disciplina de acesso.',
        'module.crm.title': 'CRM e Comercial',
        'module.crm.desc': 'Clientes, contatos, vendas, oportunidades e marketing em uma jornada comercial integrada.',
        'module.projects.title': 'Projetos e Entregas',
        'module.projects.desc': 'Planejamento, prazos, risco de execucao e governanca de iniciativas estrategicas.',
        'module.grc.title': 'GRC e Auditoria',
        'module.grc.desc': 'Riscos corporativos, compliance, governanca, ESG, continuidade e auditoria com rastreabilidade.',
        'module.it.title': 'TI, Suporte e Documentos',
        'module.it.desc': 'SLA, suporte, base de conhecimento, documentos e gestao de servicos para operacao interna.',
        'module.system.title': 'Sistema e Inteligencia',
        'module.system.desc': 'Tarefas, eventos, notificacoes, relatorios, configuracoes, BI e camadas de decisao.',
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
        'adv.card3.desc': 'CTAs em pontos estrategicos com foco em informacao clara e contato direto, sem promessas excessivas.',
        'faq.title': 'Perguntas sobre produto e implantacao',
        'faq.q1': 'O site reflete a documentacao real da plataforma?',
        'faq.a1': 'Sim. O texto foi ajustado para acompanhar a documentacao funcional do Aegis App, sem exagerar a contagem ou prometer personalizacao excessiva.',
        'faq.q2': 'A plataforma pede muita personalizacao?',
        'faq.a2': 'Nao. Ela vem pronta para uso e normalmente pede apenas o minimo de ajustes, como a maior parte das plataformas de mercado.',
        'faq.q3': 'O que sustenta a proposta do site?',
        'faq.a3': 'A proposta se apoia nos modulos reais da plataforma, na governanca e no uso operacional, sem vender uma personalizacao cliente a cliente.',
        'cta.eyebrow': 'Proximo passo',
        'cta.title': 'Quer o website alinhado com o produto real?',
        'cta.desc': 'Podemos manter uma versao institucional objetiva e ajustar o necessario sem prometer customizacao excessiva.',
        'cta.openApp': 'Abrir aplicacao',
        'footer.copy': 'Aegis Solucoes © 2026. ERP/CRM 360 com 40+ modulos principais e camadas de apoio.',
        'footer.home': 'Inicio',
        'footer.modules': 'Modulos',
        'footer.architecture': 'Arquitetura',
        'footer.contact': 'Contato',
      },
    },
    en: {
      meta: {
        title: 'Aegis Solutions | 360 ERP/CRM with 40+ main modules',
        description:
          'Aegis Solutions: 360 ERP/CRM with 40+ main modules, with submodules, functions, and support layers for operations, governance, BI, and AI applied to business context.',
        ogTitle: 'Aegis Solutions | 360 ERP/CRM with 40+ main modules',
        ogDescription: 'Integrated business management with a central dashboard, governance, and real business layers.',
        twitterTitle: 'Aegis Solutions | 360 ERP/CRM with 40+ main modules',
        twitterDescription: 'One platform to operate, govern, and scale with 360 visibility and traceability.',
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
          'The product documentation points to 40+ main modules in the app, with submodules, functions, and support layers, and a dashboard that aggregates sales and finance KPIs in a 360 view.',
        'hero.ctaPrimary': 'See platform',
        'hero.ctaSecondary': 'Explore modules',
        'hero.proof1': 'Main dashboard with KPIs and recent activity',
        'hero.proof2': '40+ main modules in the app',
        'hero.proof3': 'submodules, functions, and support layers',
        'stats.modules': 'main modules and support layers documented',
        'stats.traceability': 'traceability-first architecture',
        'stats.availability': 'operational data availability',
        'stats.vision': 'with 360 business visibility',
        'modules.eyebrow': 'Real operational modules',
        'modules.title': 'Aligned with the real Aegis App stack (ERP/CRM/GRC/BI)',
        'modules.subtitle':
          'This website now communicates what the platform really delivers in production, without reducing it to a small module subset.',
        'modules.scopeTitle': '40+ main modules with submodules and functions',
        'modules.scopeDesc': 'The messaging now mirrors the product docs: core, CRM, finance, operations, HR, GRC, IT, and system, with the dashboard as the entry point and support layers around them.',
        'module.core.title': 'Core and Dashboard',
        'module.core.desc': 'Executive home, KPIs, recent activity, authentication, and the operational entry point for main navigation.',
        'module.finance.title': 'Finance and Accounting',
        'module.finance.desc': 'Cash flow, accounts, reconciliation, results, and indicators for margin predictability.',
        'module.fiscal.title': 'Tax and Fiscal',
        'module.fiscal.desc': 'Tax calendar, obligations, validations, and reduced fine exposure in an auditable environment.',
        'module.operations.title': 'Operations and Supply',
        'module.operations.desc': 'Companies, products, inventory, orders, projects, integrations, and operational continuity.',
        'module.hr.title': 'HR and Users',
        'module.hr.desc': 'Human resources, users, training, and people management with access discipline.',
        'module.crm.title': 'CRM and Sales',
        'module.crm.desc': 'Customers, contacts, sales, opportunities, and marketing in an integrated commercial journey.',
        'module.projects.title': 'Projects and Delivery',
        'module.projects.desc': 'Planning, deadlines, execution risk, and governance for strategic initiatives.',
        'module.grc.title': 'GRC and Audit',
        'module.grc.desc': 'Corporate risk, compliance, governance, ESG, continuity, and audit with traceability.',
        'module.it.title': 'IT, Support, and Documents',
        'module.it.desc': 'SLA, support, knowledge base, documents, and service management for internal operations.',
        'module.system.title': 'System and Intelligence',
        'module.system.desc': 'Tasks, events, notifications, reports, settings, BI, and decision layers.',
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
        'adv.card3.desc': 'Strategic CTAs focused on clear information and direct contact, without overpromising.',
        'faq.title': 'Questions about product and implementation',
        'faq.q1': 'Does the site reflect the real platform documentation?',
        'faq.a1': 'Yes. The text was adjusted to match the functional documentation of the Aegis App without inflating counts or promising excessive customization.',
        'faq.q2': 'Does the platform require a lot of customization?',
        'faq.a2': 'No. It is ready to use and usually needs only minimal adjustments, like most market platforms.',
        'faq.q3': 'What supports the site proposition?',
        'faq.a3': 'The proposition is based on the platform’s real modules, governance, and operational use, without selling client-by-client customization.',
        'cta.eyebrow': 'Next step',
        'cta.title': 'Want the website aligned with the real product?',
        'cta.desc': 'We can keep an objective institutional version and adjust only what is necessary without promising excessive customization.',
        'cta.openApp': 'Open application',
        'footer.copy': 'Aegis Solutions © 2026. 360 ERP/CRM with 40+ main modules and support layers.',
        'footer.home': 'Home',
        'footer.modules': 'Modules',
        'footer.architecture': 'Architecture',
        'footer.contact': 'Contact',
      },
    },
    es: {
      meta: {
        title: 'Aegis Soluciones | ERP/CRM 360 con 40+ modulos principales',
        description:
          'Aegis Soluciones: ERP/CRM 360 con 40+ modulos principales, con submodulos, funciones y capas de apoyo para operacion, gobernanza, BI e IA aplicada al contexto empresarial.',
        ogTitle: 'Aegis Soluciones | ERP/CRM 360 con 40+ modulos principales',
        ogDescription: 'Gestion empresarial integrada con dashboard central, gobernanza y capas reales de negocio.',
        twitterTitle: 'Aegis Soluciones | ERP/CRM 360 con 40+ modulos principales',
        twitterDescription: 'Una plataforma para operar, gobernar y escalar con vision 360 y trazabilidad.',
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
          'La documentacion del producto apunta a 40+ modulos principales en el app, con submodulos, funciones y capas de apoyo, y un dashboard que agrega KPIs de ventas y finanzas en una vision 360.',
        'hero.ctaPrimary': 'Ver plataforma',
        'hero.ctaSecondary': 'Explorar modulos',
        'hero.proof1': 'Dashboard principal con KPIs y actividad reciente',
        'hero.proof2': '40+ modulos principales en el app',
        'hero.proof3': 'submodulos, funciones y capas de apoyo',
        'stats.modules': 'modulos principales y capas de apoyo documentados',
        'stats.traceability': 'arquitectura enfocada en trazabilidad',
        'stats.availability': 'datos operativos disponibles',
        'stats.vision': 'con vision 360 del negocio',
        'modules.eyebrow': 'Modulos reales de la operacion',
        'modules.title': 'Alineado al stack real del Aegis App (ERP/CRM/GRC/BI)',
        'modules.subtitle':
          'Este sitio ahora comunica lo que la plataforma realmente entrega en produccion, sin reducir la propuesta a un recorte pequeno.',
        'modules.scopeTitle': '40+ modulos principales con submodulos y funciones',
        'modules.scopeDesc': 'La comunicacion ahora refleja la documentacion del producto: core, CRM, finance, operations, HR, GRC, IT y system, con el dashboard como entrada y capas de apoyo alrededor.',
        'module.core.title': 'Core y Dashboard',
        'module.core.desc': 'Home ejecutiva, KPIs, actividad reciente, autenticacion y entrada operacional para la navegacion principal.',
        'module.finance.title': 'Finanzas y Contabilidad',
        'module.finance.desc': 'Flujo de caja, cuentas, conciliacion, resultados e indicadores para previsibilidad de margen.',
        'module.fiscal.title': 'Fiscal y Tributario',
        'module.fiscal.desc': 'Calendario fiscal, obligaciones, validaciones y menor riesgo de multas en un entorno auditable.',
        'module.operations.title': 'Operaciones y Supply',
        'module.operations.desc': 'Empresas, productos, inventario, pedidos, proyectos, integraciones y continuidad operacional.',
        'module.hr.title': 'RRHH y Usuarios',
        'module.hr.desc': 'Recursos humanos, usuarios, entrenamiento y gestion de personas con disciplina de acceso.',
        'module.crm.title': 'CRM y Comercial',
        'module.crm.desc': 'Clientes, contactos, ventas, oportunidades y marketing en un recorrido comercial integrado.',
        'module.projects.title': 'Proyectos y Entregas',
        'module.projects.desc': 'Planificacion, plazos, riesgo de ejecucion y gobernanza de iniciativas estrategicas.',
        'module.grc.title': 'GRC y Auditoria',
        'module.grc.desc': 'Riesgos corporativos, compliance, gobernanza, ESG, continuidad y auditoria con trazabilidad.',
        'module.it.title': 'TI, Soporte y Documentos',
        'module.it.desc': 'SLA, soporte, base de conocimiento, documentos y gestion de servicios para operacion interna.',
        'module.system.title': 'Sistema e Inteligencia',
        'module.system.desc': 'Tareas, eventos, notificaciones, reportes, configuraciones, BI y capas de decision.',
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
        'adv.card3.desc': 'CTAs estrategicos enfocados en informacion clara y contacto directo, sin promesas excesivas.',
        'faq.title': 'Preguntas sobre producto e implantacion',
        'faq.q1': 'El sitio refleja la documentacion real de la plataforma?',
        'faq.a1': 'Si. El texto se ajusto para acompañar la documentacion funcional del Aegis App, sin inflar cifras ni prometer personalizacion excesiva.',
        'faq.q2': 'La plataforma requiere mucha personalizacion?',
        'faq.a2': 'No. Viene lista para uso y normalmente requiere solo ajustes minimos, como la mayoria de las plataformas de mercado.',
        'faq.q3': 'Que sustenta la propuesta del sitio?',
        'faq.a3': 'La propuesta se apoya en los modulos reales de la plataforma, la gobernanza y el uso operativo, sin vender personalizacion cliente a cliente.',
        'cta.eyebrow': 'Proximo paso',
        'cta.title': 'Quieres el sitio alineado con el producto real?',
        'cta.desc': 'Podemos mantener una version institucional objetiva y ajustar solo lo necesario sin prometer personalizacion excesiva.',
        'cta.openApp': 'Abrir aplicacion',
        'footer.copy': 'Aegis Soluciones © 2026. ERP/CRM 360 con 40+ modulos principales y capas de apoyo.',
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
