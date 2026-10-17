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
        'nav.releases': 'Novidades',
        'nav.enterApp': 'Acessar o App',
        'nav.talkSpecialist': 'Falar com Especialista',
        'releases.eyebrow': 'Historico de Inovacoes',
        'releases.title': 'Releases e Funcionalidades',
        'releases.subtitle': 'Acompanhe a evolucao continua da plataforma Aegis ERP/CRM.',
        'releases.v250.title': 'Escala Nacional, IA Multi-Provedor, EVM Curva S, Workflow de Aprovações, Supply Chain & Multi-Company',
        'releases.v250.subtitle': 'Failover em Cascata (Gemini → Claude → OpenAI), Pix EMV Bacen (CRC16), Análise de Valor Agregado EVM & Curva S (PMI), Workflow Multinível com SoD, Câmbio PTAX e Holding Intercompany',
        'releases.v250.details': '<ul><li><strong>IA Corporativa Multi-Provedor & Failover</strong>: Mecanismo de alta disponibilidade com chaveamento automático (Gemini → Claude 3.5 Sonnet → OpenAI GPT-4o-mini) para contingência ininterrupta do RAG multi-tenant.</li><li><strong>Gestão Avançada de Projetos (EVM & Curva S PMI)</strong>: Análise de Valor Agregado com cálculo em tempo real de índices CPI, SPI, estimativa de término (EAC/ETC/VAC), métricas de saúde e projeção cronológica pela Curva S.</li><li><strong>Workflow Avançado de Aprovações Corporativas</strong>: Matriz multinível de alçadas configurável por faixas de valor (até R$ 100k+), segregação rígida de funções (SoD), delegação de autoridade e trilha auditável SHA-256.</li><li><strong>Open Finance & Cobrança Pix Bacen (BR Code)</strong>: Conectores bancários (Itaú, Inter, Cora, Pluggy), geração de QR Code Pix padrão EMV QRCPS com CRC16-CCITT (0x1021) e conciliação bancária inteligente com scoring.</li><li><strong>Contas a Receber com Aging & PDD (IFRS 9 / CPC 48)</strong>: Classificação contábil por faixas de vencimento (Aging List em 6 buckets), provisão de perdas de crédito esperadas, cálculo legal de juros/multa CDC, indicador DSO e régua de cobrança automatizada.</li><li><strong>DRE Realizado vs. Orçado & Margens (CPC 26 / IFRS)</strong>: Demonstração de Resultado do Exercício com Budget Variance Analysis em tempo real, cálculo automático de Margens (Bruta, EBITDA e Líquida) e sinalizadores de desvio orçamentário.</li><li><strong>Projeção de Fluxo de Caixa Multidisciplinar (3 Horizontes)</strong>: Modelagem dinâmica de liquidez: Operacional (30 dias diário), Tático (12 meses) e Estratégico (3 anos com investimentos Capex e Free Cash Flow).</li><li><strong>Custom Fields Ilimitados & Metadados Dinâmicos</strong>: Arquitetura extensível por tenant para Clientes, Oportunidades, Contratos, Transações e Projetos com campos tipados, validação de regras de integridade e portabilidade de esquemas JSON.</li><li><strong>Hub de Dados Abertos Governamentais</strong>: Consultas automáticas de CEP com failover (ViaCEP/BrasilAPI), CNPJ na Receita Federal e cotações PTAX do Banco Central (USD, EUR, SELIC e IPCA).</li><li><strong>Supply Chain & Gestão Inteligente de Estoque</strong>: Ponto de Pedido Automático (ROP com 95%+ confiança), Curva ABC de Pareto, valoração CMP/FIFO/LIFO, ranking multicritério de cotações e Lote Econômico de Compra (EOQ).</li><li><strong>Multi-Moeda & Câmbio Internacional</strong>: Conversões diretas e trianguladas entre moedas globais (BRL, USD, EUR, GBP, ARS, CLP, MXN) com cotações oficiais PTAX, spread cambial e formatação internacional Intl.</li><li><strong>Auditoria Automática SOX & Fraude Contábil</strong>: Detecção de anomalias com Lei de Benford (χ²), trilha imutável por Hash Chaining (SHA-256) padrão SOX/ISO 27001 e detecção estatística de despesas atípicas (Z-score ≥ 2.5).</li><li><strong>Multi-Company Nativo & Consolidação Intercompany (IFRS 10 / CPC 36)</strong>: Gestão corporativa de holding e filiais, consolidação contábil de DREs com expurgo de transações internas e rateio corporativo (Shared Services).</li><li><strong>Webhooks Resilientes com DLQ & SDK Oficial</strong>: Eventos padronizados CloudEvents 1.0 com assinatura HMAC SHA-256 à prova de timing attacks, retry exponencial e pacote oficial @aegis/sdk para desenvolvedores.</li></ul>',
        'releases.v240.title': 'Governança Corporativa, Conformidade Legal Total & Motor Probatório',
        'releases.v240.subtitle': 'Resoluções BACEN, CVM 80/59, eSocial 2026, Módulo Jurídico CPC 25, Assinaturas Digitais SHA-256 e Segregação por Entidade (PJ/GOV/Capital Misto)',
        'releases.v240.details': '<ul><li><strong>Módulo Jurídico & Contencioso (CPC 25 / IAS 37)</strong>: Matriz de processos judiciais/administrativos com provisão financeira no DRE para perdas prováveis.</li><li><strong>Tomada de Decisão & Assinaturas SHA-256 em PDF</strong>: Emissão de laudos de auditoria em PDF com selo oficial e quadro de assinaturas executivas para fiscalizações (TCU, TCE, CVM, BACEN).</li><li><strong>Plano Diretor de TIC (PDTIC IN SGD/ME 94/22 & COBIT 2019)</strong>: Alinhamento estratégico de metas de TIC, orçamento do Comitê CGTIC e controle de ativos ITAM.</li><li><strong>Governança S/A & Alçadas (Lei 6.404/76 & CVM 80/22)</strong>: Livro digital de atas de Conselho e Assembleias (AGO/AGE) com Matriz de Alçadas de Assinatura (DOA).</li><li><strong>Balanço Verde ESG & Neutralização (CVM 59/21)</strong>: Inventário GHG Protocol Escopos 1, 2 e 3 com neutralização de carbono via Pix SOS Mata Atlântica.</li><li><strong>GCN BIA / DRP (ISO 22301 & BACEN CMN 4.893/21)</strong>: Análise de impacto no negócio (RTO/RPO) e plano de contingência cibernética.</li><li><strong>Motor de Segregação por Porte & Entidade</strong>: Adaptação dinâmica para empresas privadas (PJ), órgãos públicos (GOV) e estatais (Capital Misto - Lei 13.303/16), com dispensas legais automáticas para MEI/ME/EPP.</li><li><strong>Departamento Pessoal eSocial 2026 & SST</strong>: Ponto eletrônico REP-P (Portaria MTP 671/21), contracheques digitais em PDF e auditoria de NR-01/07/15/17.</li></ul>',
        'releases.v230.title': 'Faturamento Recorrente & Contratos',
        'releases.v230.subtitle': 'Módulo de CLM Inteligente e Mora Contábil',
        'releases.v230.details': '<ul><li><strong>Contratos Inteligentes (Auto-Fill)</strong>: Preenchimento automático de placeholders com base em dados de vendas e clientes.</li><li><strong>Cronograma Recorrente (12-60 meses)</strong>: Geração em lote automatizada de parcelas e boletos mensais futuros no financeiro.</li><li><strong>Ajustes de Mora/Dedução</strong>: Cálculo automático de multas e juros por atraso pro-rata ou descontos por pontualidade no recebimento.</li><li><strong>Conciliação em Lote</strong>: Retorno bancário de boletos da competência de forma 100% simulada e segura.</li><li><strong>Balanço Verde ESG Contábil</strong>: Relatório ecológico que calcula a pegada de CO2 a partir de despesas da DRE.</li></ul>',
        'releases.v221.title': 'Open Payment Lifecycle',
        'releases.v221.subtitle': 'Integração Financeira & Webhooks',
        'releases.v221.details': '<ul><li><strong>Multi-Provedor</strong>: Integração com Stripe, Pagar.me, Asaas e Mercado Pago.</li><li><strong>Métricas e DLQ</strong>: Monitoramento e retentativas manuais em fila de webhook.</li><li><strong>Navegação Contextual</strong>: Ponte integrada de Fluxo de Caixa para transações da API.</li></ul>',
        'releases.v101.title': 'Expansão de Módulos',
        'releases.v101.subtitle': 'Mais robustez empresarial',
        'releases.v101.details': '<ul><li><strong>Expansão de Portfólio</strong>: Evolução estratégica da plataforma de 12 para 40+ módulos integrados funcionais.</li><li><strong>Validação de CST</strong>: Suporte a CST de 3 dígitos do Simples Nacional no faturador NFe.</li></ul>',
        'releases.v100.title': 'Lançamento Oficial',
        'releases.v100.subtitle': 'O início do ERP/CRM 360',
        'releases.v100.details': '<ul><li><strong>Módulos Nativos</strong>: Fluxo de caixa, emissão de notas, vendas, RH e compliance.</li><li><strong>Suporte PWA</strong>: Funcionamento offline básico e notificações móveis nativas.</li></ul>',
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
        'contact.eyebrow': 'Fale Conosco',
        'contact.title': 'Envie uma mensagem',
        'contact.subtitle': 'Preencha o formulario abaixo e nossa equipe retorna em breve.',
        'contact.labelName': 'Nome',
        'contact.labelEmail': 'E-mail',
        'contact.labelSubject': 'Assunto',
        'contact.labelMessage': 'Mensagem',
        'contact.placeholderName': 'Seu nome completo',
        'contact.placeholderEmail': 'seu@email.com',
        'contact.placeholderSubject': 'Como podemos ajudar?',
        'contact.placeholderMessage': 'Descreva sua necessidade...',
        'contact.submit': 'Enviar mensagem',
        'contact.success': 'Mensagem enviada! Nossa equipe entrara em contato em breve.',
        'contact.error': 'Algo deu errado. Verifique sua conexao e tente novamente.',
        'plans.eyebrow': 'Planos e Preços',
        'plans.title': 'Escolha o plano ideal para sua empresa',
        'plans.subtitle': 'Sem taxa de adesão, sem fidelidade. Cancele ou pause quando desejar.',
        'plan.free.name': 'Gratuito PJ',
        'plan.free.period': '/sempre grátis',
        'plan.free.desc': 'Para validar sua operação. Sem cartão de crédito.',
        'plan.free.f1': 'Dashboard + Clientes + Contatos',
        'plan.free.f2': 'Tarefas e Notificações',
        'plan.free.f3': 'Até 3 usuários',
        'plan.free.f4': 'Suporte via comunidade',
        'plan.free.cta': 'Começar Grátis',
        'plan.basic.name': 'Básico',
        'plan.basic.desc': 'Para pequenas empresas e equipes comerciais de até 25 usuários.',
        'plan.basic.f1': 'Módulos Core + CRM Básico',
        'plan.basic.f2': 'Até 25 usuários cadastrados',
        'plan.basic.f3': 'Suporte por Email e Chat',
        'plan.basic.f4': 'Backup diário automático',
        'plan.premium.name': 'Premium',
        'plan.premium.desc': 'Para médias empresas em crescimento de até 100 usuários.',
        'plan.premium.f1': 'Módulos Financeiro + Fiscal + CRM',
        'plan.premium.f2': 'Até 100 usuários cadastrados',
        'plan.premium.f3': 'Suporte por Telefone e Chat',
        'plan.premium.f4': 'Multi-tenant e White label',
        'plan.enterprise.name': 'Enterprise',
        'plan.enterprise.desc': 'Para grandes corporações que exigem cobertura total e SLAs.',
        'plan.enterprise.f1': 'Todos os 40+ módulos integrados',
        'plan.enterprise.f2': 'Usuários cadastrados Ilimitados',
        'plan.enterprise.f3': 'Suporte Premium 24x7 e SLA 99.9%',
        'plan.enterprise.f4': 'Consultor dedicado e IA customizada',
        'plan.featured': 'Mais Popular',
        'plan.buy': 'Contratar plano',
        'checkout.step1.title': '1. Informações de Cadastro',
        'checkout.step1.desc': 'Preencha os dados abaixo para configurar o seu ambiente empresarial.',
        'checkout.labelPassword': 'Senha de Acesso',
        'checkout.labelCpfCnpj': 'CNPJ da Empresa',
        'checkout.labelCompany': 'Nome da Empresa',
        'checkout.labelDomain': 'Subdomínio Desejado',
        'checkout.next': 'Prosseguir para o Pagamento',
        'checkout.step2.title': '2. Forma de Pagamento',
        'checkout.step2.desc': 'Selecione o método de pagamento. Assinaturas são recorrentes e faturadas mensalmente.',
        'checkout.pix.desc': 'Pague com PIX para ativação imediata. A nota fiscal será emitida automaticamente em seu CNPJ.',
        'checkout.pix.key': 'Chave PIX Copia e Cola',
        'checkout.confirmPayment': 'Confirmar Pagamento Simulado',
        'checkout.card.holder': 'Nome no Cartão',
        'checkout.card.number': 'Número do Cartão',
        'checkout.card.expiry': 'Validade (MM/AA)',
        'checkout.card.cvv': 'CVV',
        'checkout.payCard': 'Finalizar Compra',
        'checkout.back': 'Voltar para cadastro',
        'checkout.processing.title': 'Processando Assinatura...',
        'checkout.processing.desc': 'Estamos validando o pagamento e estruturando o seu novo banco de dados no Firebase. Isso levará alguns segundos.',
        'checkout.success.title': 'Assinatura Ativada com Sucesso!',
        'checkout.success.desc': 'Seu novo ambiente ERP está provisionado e pronto para uso.',
        'checkout.success.credentialsTitle': 'Chaves de Acesso e Link da Aplicação:',
        'checkout.success.instructionsTitle': 'Instruções de Apontamento de Domínio (Registro.br):',
        'checkout.success.instructionsDesc': 'Se você já possui um domínio próprio ou deseja configurar um subdomínio para apontar para o seu ERP, siga o passo-a-passo abaixo:',
        'checkout.success.step1': 'Acesse sua conta no provedor onde registrou seu domínio (Registro.br, GoDaddy, Hostgator, etc).',
        'checkout.success.step2': 'Acesse as configurações de Zona de DNS do domínio desejado.',
        'checkout.success.step3': 'Crie uma nova entrada do tipo CNAME:',
        'checkout.success.step4': 'Salve as alterações e aguarde a propagação do DNS (geralmente leva de 15 minutos até 24 horas).',
        'checkout.success.step5': 'No ERP Aegis, acesse o menu Licenciamento > Gerenciamento, insira seu domínio personalizado e ative-o para que o Firebase responda através dele.',
        'checkout.success.openApp': 'Ir para a Aplicação',
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
        'nav.releases': 'Releases',
        'nav.enterApp': 'Access App',
        'nav.talkSpecialist': 'Talk to a Specialist',
        'releases.eyebrow': 'History of Innovations',
        'releases.title': 'Releases & Features',
        'releases.subtitle': 'Follow the continuous evolution of the Aegis ERP/CRM platform.',
        'releases.v250.title': 'National Scale, Multi-Provider AI, EVM S-Curve, Approval Workflow, Supply Chain & Multi-Company',
        'releases.v250.details': '<ul><li><strong>Intelligent CRM & Predictive Lead Scoring</strong>: Multidimensional scoring (0 to 100 pts) evaluating ICP Fit, Engagement and BANT, deal stall detection and automated WhatsApp/Email follow-up drafting.</li><li><strong>Bank Reconciliation with SPED Chart of Accounts Inference</strong>: Semantic statement recognition with AI for automatic accounting classification (SPED/RFB Chart of Accounts), cost centers, Income Statement categories and confidence scoring.</li><li><strong>Multi-Provider Enterprise AI & Failover</strong>: High-availability cascade routing (Gemini → Claude 3.5 Sonnet → OpenAI GPT-4o-mini) providing zero-downtime multi-tenant RAG.</li><li><strong>Advanced Project Management (EVM & S-Curve PMI)</strong>: Earned Value Analysis with real-time computation of CPI, SPI, Estimate at Completion (EAC/ETC/VAC), project health index, and chronological S-Curve tracking.</li><li><strong>Enterprise Multi-Level Approval Workflow</strong>: Dynamic threshold authority matrix (up to $100k+), strict Segregation of Duties (SoD), authority delegation, and SHA-256 cryptographic audit trail.</li><li><strong>Open Finance & Central Bank Pix (BR Code)</strong>: Direct banking connectors (Itaú, Inter, Cora, Pluggy), EMV QRCPS QR Code with CRC16-CCITT (0x1021) and smart reconciliation scoring.</li><li><strong>Accounts Receivable Aging & ECL Provision (IFRS 9 / CPC 48)</strong>: Six-bucket maturity aging list, expected credit loss provisioning, automatic statutory interest/fines calculation, DSO indicator, and smart dunning automation.</li><li><strong>Income Statement vs. Budget & Margins (CPC 26 / IFRS)</strong>: Real-time managerial DRE with Budget Variance Analysis, automatic computation of Gross, EBITDA, and Net margins, with budget overrun warning badges.</li><li><strong>Multidisciplinary Cash Flow Forecast (3 Horizons)</strong>: Continuous liquidity simulation: Operational (30-day daily), Tactical (12-month), and Strategic (3-year pluriannual with Capex and Free Cash Flow).</li><li><strong>Unlimited Custom Fields & Dynamic Metadata</strong>: Tenant-level extensible schema for Customers, Deals, Contracts, Transactions, and Projects with strong typing, runtime constraint validation, and JSON schema migration.</li><li><strong>Government Open Data Hub</strong>: Automated postal code lookup with failover (ViaCEP/BrasilAPI), Federal Tax ID registry lookup and Central Bank economic indicators (USD, EUR, SELIC, IPCA).</li><li><strong>Smart Supply Chain & Inventory Control</strong>: Automated Reorder Point (ROP with 95%+ confidence), Pareto ABC classification, CMP/FIFO/LIFO stock valuation, multi-criteria supplier ranking, and Economic Order Quantity (EOQ).</li><li><strong>Multi-Currency & International Exchange</strong>: Direct and triangular conversions between world currencies (BRL, USD, EUR, GBP, ARS, CLP, MXN) with official PTAX rates, spread, and Intl formatting.</li><li><strong>SOX Automated Audit & Accounting Fraud Prevention</strong>: Benford Law anomaly detection (χ²), immutable block-chained audit trail (SHA-256) per SOX/ISO 27001, and expense outlier detection (Z-score ≥ 2.5).</li><li><strong>Native Multi-Company & Intercompany Consolidation (IFRS 10 / CPC 36)</strong>: Group governance for headquarters and subsidiaries, automated Income Statement consolidation with elimination of intercompany revenue/costs, and Shared Services corporate cost apportionment.</li><li><strong>Resilient Webhooks with DLQ & Official SDK</strong>: Standardized CloudEvents 1.0 with timing-safe HMAC SHA-256 signatures, exponential backoff retries, and the official @aegis/sdk developer package.</li></ul>',
        'releases.v240.title': 'Corporate Governance, Full Legal Compliance & Audit Engine',
        'releases.v240.subtitle': 'BACEN & CVM Regulations, Legal Module CPC 25, SHA-256 PDF Signatures & Entity Segregation',
        'releases.v240.details': '<ul><li><strong>Legal & Litigation Module (CPC 25 / IAS 37)</strong>: Lawsuit matrix with automatic financial provision on Income Statement for probable loss.</li><li><strong>Decision Making & SHA-256 PDF Signatures</strong>: Executive PDF audit reports with digital timestamps and signature blocks for audit oversight (TCU, TCE, CVM, BACEN).</li><li><strong>Master IT Plan (PDTIC IN 94/22 & COBIT 2019)</strong>: Strategic IT goal alignment, CGTIC committee budget and ITAM asset management.</li><li><strong>S/A Governance & DOA (Law 6.404/76 & CVM 80/22)</strong>: Digital minute book for Board and Assembly meetings with Delegation of Authority matrix.</li><li><strong>ESG Green Balance & Offsetting (CVM 59/21)</strong>: GHG Protocol Scope 1, 2, and 3 footprint inventory with active Pix carbon offsetting.</li><li><strong>BCM BIA / DRP (ISO 22301 & BACEN 4.893/21)</strong>: Business impact analysis (RTO/RPO) and cybersecurity contingency plan.</li><li><strong>Entity & Size Segregation Engine</strong>: Dynamic UI adaptation for Private Companies, Government Entities, and State-Owned Enterprises with legal waivers for SMBs.</li><li><strong>HR eSocial 2026 & OHS</strong>: REP-P time tracking (MTP 671/21), digital PDF paystubs, and OHS compliance.</li></ul>',
        'releases.v230.title': 'Recurring Billing & Contracts',
        'releases.v230.subtitle': 'Smart CLM Module & Interest Calculations',
        'releases.v230.details': '<ul><li><strong>Smart Contracts (Auto-Fill)</strong>: Automatic placeholder replacement using customer and sales order metadata.</li><li><strong>Recurring Schedule (12-60 months)</strong>: Automatic batch generation of future monthly transactions and slips in finance.</li><li><strong>Interest & Discount Adjustments</strong>: Automatic calculation of late payment fees or early payment discounts on transaction settlements.</li><li><strong>Batch Reconciliation</strong>: Safe simulated bank return processing for active subscription slips.</li><li><strong>ESG Green Balance</strong>: Ecological reporting calculating CO2 footprint based on income statement expenses.</li></ul>',
        'releases.v221.title': 'Open Payment Lifecycle',
        'releases.v221.subtitle': 'Financial Integration & Webhooks',
        'releases.v221.details': '<ul><li><strong>Multi-Provider</strong>: Seamless integration with Stripe, Pagar.me, Asaas, and Mercado Pago.</li><li><strong>Metrics & DLQ</strong>: Real-time monitoring and manual retry queues for webhook events.</li><li><strong>Contextual Bridge</strong>: Integrated link connecting Cash Flow directly to API charges.</li></ul>',
        'releases.v101.title': 'Module Portfolio Expansion',
        'releases.v101.subtitle': 'Enhanced business capabilities',
        'releases.v101.details': '<ul><li><strong>Portfolio Expansion</strong>: Strategic growth of the ecosystem from 12 to 40+ active functional modules.</li><li><strong>CST Validation</strong>: Robust support for 3-digit CST tax codes for Simples Nacional in NFe.</li></ul>',
        'releases.v100.title': 'Official Launch',
        'releases.v100.subtitle': 'The birth of ERP/CRM 360',
        'releases.v100.details': '<ul><li><strong>Native Modules</strong>: Cash flow, invoice issuing, sales pipeline, HR, and compliance.</li><li><strong>PWA Support</strong>: Basic offline features and native mobile push notifications.</li></ul>',
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
        'contact.eyebrow': 'Get in Touch',
        'contact.title': 'Send us a message',
        'contact.subtitle': 'Fill in the form below and our team will get back to you shortly.',
        'contact.labelName': 'Name',
        'contact.labelEmail': 'E-mail',
        'contact.labelSubject': 'Subject',
        'contact.labelMessage': 'Message',
        'contact.placeholderName': 'Your full name',
        'contact.placeholderEmail': 'your@email.com',
        'contact.placeholderSubject': 'How can we help?',
        'contact.placeholderMessage': 'Describe your needs...',
        'contact.submit': 'Send message',
        'contact.success': 'Message sent! Our team will reach out to you shortly.',
        'contact.error': 'Something went wrong. Please check your connection and try again.',
        'plans.eyebrow': 'Plans & Pricing',
        'plans.title': 'Choose the ideal plan for your company',
        'plans.subtitle': 'No setup fee, no lock-in. Cancel or pause whenever you wish.',
        'plan.free.name': 'Free PJ',
        'plan.free.period': '/always free',
        'plan.free.desc': 'To validate your operation. No credit card required.',
        'plan.free.f1': 'Dashboard + Clients + Contacts',
        'plan.free.f2': 'Tasks and Notifications',
        'plan.free.f3': 'Up to 3 users',
        'plan.free.f4': 'Community support',
        'plan.free.cta': 'Start Free',
        'plan.basic.name': 'Basic',
        'plan.basic.desc': 'For small businesses and sales teams up to 25 users.',
        'plan.basic.f1': 'Core + Basic CRM Modules',
        'plan.basic.f2': 'Up to 25 registered users',
        'plan.basic.f3': 'Email & Chat Support',
        'plan.basic.f4': 'Daily automatic backup',
        'plan.premium.name': 'Premium',
        'plan.premium.desc': 'For growing medium businesses up to 100 users.',
        'plan.premium.f1': 'Financial + Tax + CRM Modules',
        'plan.premium.f2': 'Up to 100 registered users',
        'plan.premium.f3': 'Phone & Chat Support',
        'plan.premium.f4': 'Multi-tenant and White label',
        'plan.enterprise.name': 'Enterprise',
        'plan.enterprise.desc': 'For large corporations requiring full coverage and SLAs.',
        'plan.enterprise.f1': 'All 40+ integrated modules',
        'plan.enterprise.f2': 'Unlimited registered users',
        'plan.enterprise.f3': '24x7 Premium Support and 99.9% SLA',
        'plan.enterprise.f4': 'Dedicated advisor and custom AI',
        'plan.featured': 'Most Popular',
        'plan.buy': 'Get plan',
        'checkout.step1.title': '1. Registration Information',
        'checkout.step1.desc': 'Fill in the details below to set up your business environment.',
        'checkout.labelPassword': 'Access Password',
        'checkout.labelCpfCnpj': 'Company CNPJ',
        'checkout.labelCompany': 'Company Name',
        'checkout.labelDomain': 'Desired Subdomain',
        'checkout.next': 'Proceed to Payment',
        'checkout.step2.title': '2. Payment Method',
        'checkout.step2.desc': 'Select your payment method. Subscriptions are recurring and billed monthly.',
        'checkout.pix.desc': 'Pay with PIX for immediate activation. The invoice will be automatically issued under your company CNPJ.',
        'checkout.pix.key': 'Copy and Paste PIX Key',
        'checkout.confirmPayment': 'Confirm Simulated Payment',
        'checkout.card.holder': 'Cardholder Name',
        'checkout.card.number': 'Card Number',
        'checkout.card.expiry': 'Expiry Date (MM/YY)',
        'checkout.card.cvv': 'CVV',
        'checkout.payCard': 'Complete Purchase',
        'checkout.back': 'Back to registration',
        'checkout.processing.title': 'Processing Subscription...',
        'checkout.processing.desc': 'We are validating the payment and structuring your new database on Firebase. This will take a few seconds.',
        'checkout.success.title': 'Subscription Activated Successfully!',
        'checkout.success.desc': 'Your new ERP environment has been provisioned and is ready to use.',
        'checkout.success.credentialsTitle': 'Access Keys and Application Link:',
        'checkout.success.instructionsTitle': 'Domain Pointing Instructions (Registro.br):',
        'checkout.success.instructionsDesc': 'If you already have your own domain or wish to configure a subdomain to point to your ERP, follow the step-by-step below:',
        'checkout.success.step1': 'Access your account at the provider where you registered your domain (Registro.br, GoDaddy, Hostgator, etc).',
        'checkout.success.step2': 'Go to the DNS Zone settings for the desired domain.',
        'checkout.success.step3': 'Create a new CNAME entry:',
        'checkout.success.step4': 'Save changes and wait for DNS propagation (typically takes 15 minutes to 24 hours).',
        'checkout.success.step5': 'In the Aegis ERP, access the Licensing > Management menu, enter your custom domain and activate it so Firebase responds through it.',
        'checkout.success.openApp': 'Go to Application',
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
        'nav.releases': 'Novedades',
        'nav.enterApp': 'Acceder al App',
        'nav.talkSpecialist': 'Hablar con Especialista',
        'releases.eyebrow': 'Historial de Innovaciones',
        'releases.title': 'Releases y Funcionalidades',
        'releases.subtitle': 'Siga la evolucion continua de la plataforma Aegis ERP/CRM.',
        'releases.v250.title': 'Escala Nacional, IA Multi-Proveedor, EVM Curva S, Workflow de Aprobaciones, Cadena de Suministro y Multi-Company',
        'releases.v250.details': '<ul><li><strong>CRM Inteligente y Lead Scoring Predictivo</strong>: Algoritmo multidimensional (0 a 100 pts) ponderando ICP Fit, Compromiso y BANT, detección de estancamiento de acuerdos (stalled deals) y borradores predictivos de seguimiento para WhatsApp y Email.</li><li><strong>Conciliación Bancaria con Inferencia de Plan de Cuentas SPED</strong>: Reconocimiento semántico de extractos con IA para clasificación contable automática (Plan de Cuentas SPED/RFB), centros de costos, categorías del Estado de Resultados y puntuación de confianza.</li><li><strong>IA Corporativa Multi-Proveedor y Conmutación por Error</strong>: Alta disponibilidad con enrutamiento en cascada (Gemini → Claude 3.5 Sonnet → OpenAI GPT-4o-mini) garantizando contingencia continua del RAG multi-inquilino.</li><li><strong>Gestión Avanzada de Proyectos (EVM & Curva S PMI)</strong>: Análisis de Valor Ganado con cálculo en tiempo real de índices CPI, SPI, estimación al término (EAC/ETC/VAC), métricas de salud y proyección cronológica mediante la Curva S.</li><li><strong>Workflow Avanzado de Aprobaciones Corporativas</strong>: Matriz multinivel de límites de aprobación configurable por tramos de valor (hasta $100k+), estricta segregación de funciones (SoD), delegación de autoridad y pista de auditoría criptográfica SHA-256.</li><li><strong>Open Finance y Cobro Pix Bacen (BR Code)</strong>: Conectores bancarios directos (Itaú, Inter, Cora, Pluggy), código QR Pix EMV QRCPS con CRC16-CCITT (0x1021) y conciliación bancaria inteligente con puntuación.</li><li><strong>Cuentas por Cobrar con Aging y PDD (IFRS 9 / CPC 48)</strong>: Clasificación contable en 6 tramos de vencimiento (Aging List), provisión de pérdidas crediticias esperadas, cálculo legal de recargos/intereses, indicador DSO y automatización de cobranza.</li><li><strong>Estado de Resultados vs. Presupuesto & Márgenes (CPC 26 / IFRS)</strong>: DRE gerencial con Budget Variance Analysis en tiempo real, cálculo automático de Márgenes (Bruta, EBITDA y Neta) con avisos de desvío presupuestario.</li><li><strong>Proyección de Flujo de Caja Multidisciplinar (3 Horizontes)</strong>: Simulación continua de liquidez: Operacional (30 días diario), Táctico (12 meses) y Estratégico (3 años con Capex y Flujo Libre de Caja).</li><li><strong>Campos Personalizados Ilimitados & Metadados Dinámicos</strong>: Arquitectura extensible por inquilino para Clientes, Oportunidades, Contratos, Transacciones y Proyectos con tipado estricto, validación de reglas y migración JSON.</li><li><strong>Hub de Datos Abiertos Gubernamentales</strong>: Consultas automáticas de código postal con respaldo (ViaCEP/BrasilAPI), consulta de registro fiscal de empresas y cotizaciones económicas del Banco Central (USD, EUR, SELIC e IPCA).</li><li><strong>Cadena de Suministro y Gestión Inteligente de Stock</strong>: Punto de Pedido Automático (ROP con 95%+ de confianza), Curva ABC de Pareto, valoración CMP/FIFO/LIFO, ranking multicriterio de proveedores y Lote Económico de Compra (EOQ).</li><li><strong>Multidivisa y Cambio Internacional</strong>: Conversiones directas y cruzadas entre monedas globales (BRL, USD, EUR, GBP, ARS, CLP, MXN) con tasas oficiales PTAX, diferencial cambiario y formato internacional Intl.</li><li><strong>Auditoría Automática SOX y Fraude Contable</strong>: Detección de anomalías con Ley de Benford (χ²), registro inmutable por Hash Chaining (SHA-256) estándar SOX/ISO 27001 y detección estadística de gastos atípicos (Z-score ≥ 2.5).</li><li><strong>Multi-Company Nativo y Consolidación Intercompany (IFRS 10 / CPC 36)</strong>: Gestión corporativa de holding y filiales, consolidación contable de pérdidas y ganancias con eliminación de transacciones internas e prorrateo corporativo (Shared Services).</li><li><strong>Webhooks Resilientes con DLQ y SDK Oficial</strong>: Eventos estandarizados CloudEvents 1.0 con firmas HMAC SHA-256 a prueba de ataques de temporización, reintentos exponenciales y paquete oficial @aegis/sdk para desarrolladores.</li></ul>',
        'releases.v240.title': 'Gobernanza Corporativa, Conformidad Legal Total y Motor Probatorio',
        'releases.v240.subtitle': 'Regulaciones BACEN y CVM, Módulo Jurídico CPC 25, Firmas Digitales SHA-256 y Segregación por Entidad',
        'releases.v240.details': '<ul><li><strong>Módulo Jurídico y Contencioso (CPC 25 / IAS 37)</strong>: Matriz de litigios con provisión financiera automática en el estado de resultados para pérdidas probables.</li><li><strong>Toma de Decisiones y Firmas SHA-256 en PDF</strong>: Informes de auditoría en PDF con sello oficial y bloque de firmas ejecutivas para fiscalizaciones (TCU, TCE, CVM, BACEN).</li><li><strong>Plan Director de TIC (PDTIC IN 94/22 y COBIT 2019)</strong>: Alineación de objetivos de TI, presupuesto del comité CGTIC y control de activos ITAM.</li><li><strong>Gobernanza S/A y Alçadas (Ley 6.404/76 y CVM 80/22)</strong>: Libro digital de actas de Consejo y Asambleas con matriz de delegación de autoridad.</li><li><strong>Balance Verde ESG y Compensación (CVM 59/21)</strong>: Inventario GHG Protocol Alcances 1, 2 y 3 con compensación activa de carbono vía Pix.</li><li><strong>GCN BIA / DRP (ISO 22301 y BACEN 4.893/21)</strong>: Análisis de impacto operativo (RTO/RPO) y plan de contingencia cibernética.</li><li><strong>Motor de Segregación por Tamaño y Entidad</strong>: Adaptación dinámica para empresas privadas, entidades públicas y estatales con exenciones legales para PyMEs.</li><li><strong>Gestión de Personal eSocial 2026 y SST</strong>: Control de asistencia REP-P (MTP 671/21), recibos de sueldo digitales en PDF y auditoría de SST.</li></ul>',
        'releases.v230.title': 'Facturación Recurrente y Contratos',
        'releases.v230.subtitle': 'Módulo de CLM Inteligente y Mora Contable',
        'releases.v230.details': '<ul><li><strong>Contratos Inteligentes (Auto-Fill)</strong>: Relleno automático de marcadores con datos de clientes y pedidos.</li><li><strong>Cronograma Recurrente (12-60 meses)</strong>: Generación automática de cuotas mensuales futuras en el módulo financiero.</li><li><strong>Cálculos de Mora y Descuento</strong>: Cálculo automático de multas y recargos por retraso o descuentos por pago anticipado.</li><li><strong>Conciliación Bancaria</strong>: Simulador seguro para el procesamiento de archivos de retorno bancario.</li><li><strong>Balance Verde ESG Contable</strong>: Informe ecológico que estima la huella de carbono según gastos de la DRE.</li></ul>',
        'releases.v221.title': 'Open Payment Lifecycle',
        'releases.v221.subtitle': 'Integración Financiera y Webhooks',
        'releases.v221.details': '<ul><li><strong>Multi-Proveedor</strong>: Integración fluida con Stripe, Pagar.me, Asaas y Mercado Pago.</li><li><strong>Métricas y DLQ</strong>: Monitoreo en tiempo real y reintentos manuales de eventos fallidos.</li><li><strong>Navegación de Contexto</strong>: Acceso integrado desde el flujo de caja a los cobros de la API.</li></ul>',
        'releases.v101.title': 'Expansión de Portafolio',
        'releases.v101.subtitle': 'Mayor cobertura funcional',
        'releases.v101.details': '<ul><li><strong>Expansión de Módulos</strong>: Crecimiento estratégico del ecosistema de 12 a más de 40 módulos funcionales.</li><li><strong>Validación de CST</strong>: Soporte para códigos de impuesto CST de 3 dígitos del Simples Nacional en NFe.</li></ul>',
        'releases.v100.title': 'Lanzamiento Oficial',
        'releases.v100.subtitle': 'El inicio de ERP/CRM 360',
        'releases.v100.details': '<ul><li><strong>Módulos Nativos</strong>: Flujo de caja, emisión de facturas, ventas, RRHH y cumplimiento.</li><li><strong>Soporte PWA</strong>: Funcionamiento offline básico y notificaciones push en móviles.</li></ul>',
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
        'contact.eyebrow': 'Contactenos',
        'contact.title': 'Envie un mensaje',
        'contact.subtitle': 'Complete el formulario y nuestro equipo se comunicara pronto.',
        'contact.labelName': 'Nombre',
        'contact.labelEmail': 'Correo',
        'contact.labelSubject': 'Asunto',
        'contact.labelMessage': 'Mensaje',
        'contact.placeholderName': 'Tu nombre completo',
        'contact.placeholderEmail': 'tu@correo.com',
        'contact.placeholderSubject': 'Como podemos ayudar?',
        'contact.placeholderMessage': 'Describe tu necesidad...',
        'contact.submit': 'Enviar mensaje',
        'contact.success': 'Mensaje enviado! Nuestro equipo se pondra en contacto pronto.',
        'contact.error': 'Algo salio mal. Verifica tu conexion e intenta de nuevo.',
        'plans.eyebrow': 'Planes y Precios',
        'plans.title': 'Elija el plan ideal para su empresa',
        'plans.subtitle': 'Sin cuota de alta, sin fidelidad. Cancele o pause cuando lo desee.',
        'plan.free.name': 'Gratuito PJ',
        'plan.free.period': '/siempre gratis',
        'plan.free.desc': 'Para validar su operación. Sin tarjeta de crédito.',
        'plan.free.f1': 'Dashboard + Clientes + Contactos',
        'plan.free.f2': 'Tareas y Notificaciones',
        'plan.free.f3': 'Hasta 3 usuarios',
        'plan.free.f4': 'Soporte vía comunidad',
        'plan.free.cta': 'Comenzar Gratis',
        'plan.basic.name': 'Básico',
        'plan.basic.desc': 'Para pequeñas empresas y equipos comerciales de hasta 25 usuarios.',
        'plan.basic.f1': 'Módulos Core + CRM Básico',
        'plan.basic.f2': 'Hasta 25 usuarios registrados',
        'plan.basic.f3': 'Soporte por Correo y Chat',
        'plan.basic.f4': 'Copia de seguridad automática diaria',
        'plan.premium.name': 'Premium',
        'plan.premium.desc': 'Para medianas empresas en crecimiento de hasta 100 usuarios.',
        'plan.premium.f1': 'Módulos Financiero + Fiscal + CRM',
        'plan.premium.f2': 'Hasta 100 usuarios registrados',
        'plan.premium.f3': 'Soporte por Teléfono y Chat',
        'plan.premium.f4': 'Multi-tenant y Marca blanca',
        'plan.enterprise.name': 'Enterprise',
        'plan.enterprise.desc': 'Para grandes corporaciones que requieren cobertura total y SLAs.',
        'plan.enterprise.f1': 'Todos los 40+ módulos integrados',
        'plan.enterprise.f2': 'Usuarios registrados ilimitados',
        'plan.enterprise.f3': 'Soporte Premium 24x7 y SLA 99.9%',
        'plan.enterprise.f4': 'Consultor dedicado e IA personalizada',
        'plan.featured': 'Más Popular',
        'plan.buy': 'Contratar plan',
        'checkout.step1.title': '1. Información de Registro',
        'checkout.step1.desc': 'Complete los datos a continuación para configurar su entorno empresarial.',
        'checkout.labelPassword': 'Contraseña de Acceso',
        'checkout.labelCpfCnpj': 'CNPJ de la Empresa',
        'checkout.labelCompany': 'Nombre de la Empresa',
        'checkout.labelDomain': 'Subdominio Deseado',
        'checkout.next': 'Continuar al Pago',
        'checkout.step2.title': '2. Método de Pago',
        'checkout.step2.desc': 'Seleccione su método de pago. Las suscripciones son recurrentes y se facturan mensualmente.',
        'checkout.pix.desc': 'Pague con PIX para activación inmediata. La factura se emitirá automáticamente bajo el CNPJ de su empresa.',
        'checkout.pix.key': 'Copiar y Pegar Clave PIX',
        'checkout.confirmPayment': 'Confirmar Pago Simulado',
        'checkout.card.holder': 'Nombre en la Tarjeta',
        'checkout.card.number': 'Número de Tarjeta',
        'checkout.card.expiry': 'Vencimiento (MM/AA)',
        'checkout.card.cvv': 'CVV',
        'checkout.payCard': 'Completar Compra',
        'checkout.back': 'Volver al registro',
        'checkout.processing.title': 'Procesando Suscripción...',
        'checkout.processing.desc': 'Estamos validando el pago y estructurando su nueva base de datos en Firebase. Esto tomará unos segundos.',
        'checkout.success.title': '¡Suscripción Activada con Éxito!',
        'checkout.success.desc': 'Su nuevo entorno ERP ha sido provisionado y está listo para usar.',
        'checkout.success.credentialsTitle': 'Llaves de Acceso y Enlace de la Aplicación:',
        'checkout.success.instructionsTitle': 'Instrucciones para Apuntar el Dominio (Registro.br):',
        'checkout.success.instructionsDesc': 'Si ya tiene su propio dominio o desea configurar un subdominio para apuntar a su ERP, siga el paso a paso a continuación:',
        'checkout.success.step1': 'Acceda a su cuenta en el proveedor donde registró su dominio (Registro.br, GoDaddy, Hostgator, etc).',
        'checkout.success.step2': 'Vaya a la configuración de la Zona DNS del dominio deseado.',
        'checkout.success.step3': 'Cree una nueva entrada de tipo CNAME:',
        'checkout.success.step4': 'Guarde los cambios y espere la propagación de DNS (generalmente toma de 15 minutos a 24 horas).',
        'checkout.success.step5': 'En el ERP Aegis, acceda al menú Licenciamiento > Gestión, ingrese su dominio personalizado y ative-o para que Firebase responda a través de él.',
        'checkout.success.openApp': 'Ir a la Aplicación',
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
      const value = bundle && bundle.text ? bundle.text[key] : undefined;
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = bundle && bundle.text ? bundle.text[key] : undefined;
      if (typeof value === 'string') {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = bundle && bundle.text ? bundle.text[key] : undefined;
      if (typeof value === 'string') {
        el.placeholder = value;
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
  const makeVisible = (el) => {
    if (el) el.classList.add('is-visible');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            makeVisible(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px 0px 100px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach(makeVisible);
  }

  // Se houver âncora direta na URL (ex: #releases), exibir imediatamente
  if (window.location.hash) {
    try {
      const target = document.querySelector(window.location.hash);
      if (target) {
        makeVisible(target);
      }
    } catch (_e) {}
  }

  // Ao clicar em links de navegação para âncoras, exibir o alvo imediatamente
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        try {
          const target = document.querySelector(href);
          if (target) {
            makeVisible(target);
          }
        } catch (_e) {}
      }
    });
  });

  // Salvaguarda: após 1.2s garante que todos os elementos estejam 100% visíveis
  setTimeout(() => {
    revealElements.forEach(makeVisible);
  }, 1200);

  // ── Contact form ────────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const cfSubmit = document.getElementById('cfSubmit');
  const cfFeedback = document.getElementById('cfFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const lang = localStorage.getItem('aegis-lang') || 'pt';
      const bundle = translations[lang] || translations.pt;

      // honeypot check — abort silently if filled
      if (contactForm.querySelector('[name="_honey"]').value) return;

      cfSubmit.disabled = true;
      cfSubmit.classList.add('loading');
      cfFeedback.hidden = true;

      // Obter tokens do reCAPTCHA Enterprise
      const getRecaptchaToken = async () => {
        try {
          if (typeof grecaptcha !== 'undefined' && grecaptcha.enterprise) {
            return await new Promise((resolve) => {
              grecaptcha.enterprise.ready(async () => {
                try {
                  const t = await grecaptcha.enterprise.execute('6LeU1CotAAAAALBtE-6Pa9ZXFh2mLJwKxQpVNCHD', { action: 'CONTACT' });
                  resolve(t);
                } catch (err) {
                  console.warn('reCAPTCHA Enterprise execution error:', err);
                  resolve('');
                }
              });
            });
          }
        } catch (err) {
          console.warn('reCAPTCHA Enterprise error:', err);
        }
        return '';
      };

      const baseData = {
        name: contactForm.querySelector('[name="name"]').value.trim(),
        email: contactForm.querySelector('[name="email"]').value.trim(),
        subject: contactForm.querySelector('[name="subject"]').value.trim(),
        message: contactForm.querySelector('[name="message"]').value.trim(),
      };

      try {
        const recaptchaToken = await getRecaptchaToken();
        const payload = { ...baseData, 'g-recaptcha-response': recaptchaToken };

        const res = await fetch('https://us-central1-site-aegis-solucoes-1416-a6b2d.cloudfunctions.net/sendContactEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          cfFeedback.textContent = bundle.text['contact.success'];
          cfFeedback.className = 'form-feedback success';
          contactForm.reset();
        } else {
          throw new Error('server');
        }
      } catch {
        cfFeedback.textContent = bundle.text['contact.error'];
        cfFeedback.className = 'form-feedback error';
      } finally {
        cfFeedback.hidden = false;
        cfSubmit.disabled = false;
        cfSubmit.classList.remove('loading');
      }
    });
  }

  // ── Checkout & Loja Online Logic ─────────────────────────────
  let selectedPlan = 'basic';
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckout = document.getElementById('closeCheckout');
  const buyButtons = document.querySelectorAll('.buy-btn');

  const stepInfo = document.getElementById('step-info');
  const stepPayment = document.getElementById('step-payment');
  const stepProcessing = document.getElementById('step-processing');
  const stepSuccess = document.getElementById('step-success');

  const btnNextToPayment = document.getElementById('btnNextToPayment');
  const btnBackToInfo = document.getElementById('btnBackToInfo');
  const btnConfirmPixPayment = document.getElementById('btnConfirmPixPayment');
  const btnConfirmCardPayment = document.getElementById('btnConfirmCardPayment');

  const payTabButtons = document.querySelectorAll('.pay-tab-btn');
  const panelPix = document.getElementById('panel-pix');
  const panelCard = document.getElementById('panel-card');
  const panelCoupon = document.getElementById('panel-coupon');
  const paymentTabs = document.getElementById('checkout-payment-tabs');
  const btnApplyCoupon = document.getElementById('btnApplyCoupon');
  const inputCouponCode = document.getElementById('checkout-coupon-code');
  const couponFeedback = document.getElementById('coupon-feedback');
  const btnConfirmCouponPayment = document.getElementById('btnConfirmCouponPayment');

  // Input fields
  const inputName = document.getElementById('ck-name');
  const inputEmail = document.getElementById('ck-email');
  const inputPassword = document.getElementById('ck-password');
  const inputCpfCnpj = document.getElementById('ck-cpfcnpj');
  const inputCompany = document.getElementById('ck-company');
  const inputSubdomain = document.getElementById('ck-domain');

  // Card fields
  const inputCardHolder = document.getElementById('card-holder');
  const inputCardNumber = document.getElementById('card-number');
  const inputCardExpiry = document.getElementById('card-expiry');
  const inputCardCvv = document.getElementById('card-cvv');

  // Success fields
  const successUrl = document.getElementById('success-url');
  const successEmail = document.getElementById('success-email');
  const successPass = document.getElementById('success-pass');
  const successInvoice = document.getElementById('success-invoice');

  const openCheckoutModal = (plan) => {
    selectedPlan = plan;
    checkoutModal.style.display = 'block';
    checkoutModal.setAttribute('aria-hidden', 'false');
    // Ajusta o botão de avanço conforme o plano
    if (btnNextToPayment) {
      btnNextToPayment.textContent = plan === 'free_pj'
        ? 'Criar Minha Conta Gratuita'
        : (translations[localStorage.getItem('aegis-lang') || 'pt']?.text?.['checkout.next'] || 'Prosseguir para o Pagamento');
    }
    showStep(stepInfo);
  };

  const closeCheckoutModal = () => {
    checkoutModal.style.display = 'none';
    checkoutModal.setAttribute('aria-hidden', 'true');
  };

  const showStep = (stepToShow) => {
    [stepInfo, stepPayment, stepProcessing, stepSuccess].forEach(step => {
      if (step) step.style.display = 'none';
    });
    if (stepToShow) stepToShow.style.display = 'block';
  };

  buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openCheckoutModal(btn.dataset.plan);
    });
  });

  if (closeCheckout) {
    closeCheckout.addEventListener('click', closeCheckoutModal);
  }

  // Switch payment methods
  payTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      payTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const method = btn.dataset.payMethod;
      if (method === 'pix') {
        panelPix.style.display = 'block';
        panelCard.style.display = 'none';
      } else {
        panelPix.style.display = 'none';
        panelCard.style.display = 'block';
      }
    });
  });

  const validarCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g,'');
    if(cnpj == '') return false;
    if (cnpj.length != 14) return false;
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;
           
    return true;
  };

  if (inputCpfCnpj) {
    inputCpfCnpj.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 14) value = value.slice(0, 14);
      
      if (value.length > 12) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
      } else if (value.length > 8) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4})$/, "$1.$2.$3/$4");
      } else if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{3})(\d{0,3})$/, "$1.$2.$3");
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,3})$/, "$1.$2");
      }
      e.target.value = value;
    });
  }

  // Next Step validation
  if (btnNextToPayment) {
    btnNextToPayment.addEventListener('click', () => {
      if (!inputName.value.trim() || !inputEmail.value.trim() || !inputPassword.value.trim() || !inputCpfCnpj.value.trim() || !inputCompany.value.trim() || !inputSubdomain.value.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      const cnpjLimpo = inputCpfCnpj.value.replace(/\D/g, '');
      if (cnpjLimpo.length === 11) {
        alert('A contratação do Aegis ERP é restrita a Pessoas Jurídicas. Por favor, utilize um CNPJ válido.');
        return;
      }

      if (!validarCNPJ(cnpjLimpo)) {
        alert('O CNPJ informado é inválido. Por favor, verifique os dados digitados.');
        return;
      }

      // Plano free_pj: pula pagamento e provisiona direto
      if (selectedPlan === 'free_pj') {
        executeProvisioning('GRATUITO');
        return;
      }

      showStep(stepPayment);
    });
  }

  if (btnBackToInfo) {
    btnBackToInfo.addEventListener('click', () => {
      showStep(stepInfo);
    });
  }

  // Execute provisioning via Cloud Functions
  const executeProvisioning = async (paymentMethodName) => {
    showStep(stepProcessing);

    // Obter token do reCAPTCHA Enterprise
    let recaptchaToken = '';
    try {
      if (typeof grecaptcha !== 'undefined' && grecaptcha.enterprise) {
        recaptchaToken = await new Promise((resolve) => {
          grecaptcha.enterprise.ready(async () => {
            try {
              const t = await grecaptcha.enterprise.execute('6LeU1CotAAAAALBtE-6Pa9ZXFh2mLJwKxQpVNCHD', { action: 'PROVISIONING' });
              resolve(t);
            } catch (err) {
              console.warn('reCAPTCHA Enterprise execution error:', err);
              resolve('');
            }
          });
        });
      }
    } catch (err) {
      console.warn('reCAPTCHA Enterprise error:', err);
    }

    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const functionUrl = isLocal
      ? 'http://localhost:9015/site-aegis-solucoes-1416-a6b2d/us-central1/provisionNewTenant'
      : 'https://us-central1-site-aegis-solucoes-1416-a6b2d.cloudfunctions.net/provisionNewTenant';

    const payload = {
      email: inputEmail.value.trim(),
      name: inputName.value.trim(),
      companyName: inputCompany.value.trim(),
      planId: selectedPlan,
      password: inputPassword.value.trim(),
      customerCpfCnpj: inputCpfCnpj.value.trim(),
      paymentMethod: paymentMethodName,
      recaptchaToken: recaptchaToken
    };

    try {
      const res = await fetch(functionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        // Setup success screen
        const generatedSubdomain = inputSubdomain.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
        const loginUrl = `https://${generatedSubdomain}.aegissolucoes.dev.br`;
        
        if (successUrl) {
          successUrl.href = loginUrl;
          successUrl.textContent = `${generatedSubdomain}.aegissolucoes.dev.br`;
        }
        if (successEmail) successEmail.textContent = payload.email;
        if (successPass) successPass.textContent = payload.password;
        if (successInvoice) successInvoice.textContent = result.invoiceNumber || 'NFS-984712';

        showStep(stepSuccess);
      } else {
        throw new Error(result.error || 'Falha no provisionamento.');
      }
    } catch (err) {
      alert(`Erro ao criar ambiente: ${err.message}`);
      showStep(stepPayment);
    }
  };

  if (btnConfirmPixPayment) {
    btnConfirmPixPayment.addEventListener('click', () => {
      executeProvisioning('PIX');
    });
  }

  if (btnConfirmCardPayment) {
    btnConfirmCardPayment.addEventListener('click', () => {
      executeProvisioning('CARTÃO DE CRÉDITO');
    });
  }

  let activeCoupon = null;

  if (btnApplyCoupon) {
    btnApplyCoupon.addEventListener('click', async () => {
      const code = inputCouponCode.value.trim().toUpperCase();
      if (!code) {
        alert('Por favor, digite um código de cupom.');
        return;
      }

      btnApplyCoupon.disabled = true;
      const originalText = btnApplyCoupon.textContent;
      btnApplyCoupon.textContent = 'Validando...';

      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const functionUrl = isLocal
        ? `http://localhost:8550/site-aegis-solucoes-1416-a6b2d/us-central1/api/validate-coupon?code=${encodeURIComponent(code)}`
        : `https://us-central1-site-aegis-solucoes-1416-a6b2d.cloudfunctions.net/api/validate-coupon?code=${encodeURIComponent(code)}`;

      try {
        const res = await fetch(functionUrl);
        const result = await res.json();

        if (res.ok && result.ok && result.valid) {
          activeCoupon = code;
          couponFeedback.style.display = 'block';
          couponFeedback.style.color = '#4caf50';
          couponFeedback.textContent = `🎉 Cupom "${code}" aplicado com sucesso! Benefício: ${result.discount || '100% Gratuito (Parceria)'}.`;

          const benefit = result.discount || '';
          if (benefit.includes('100%') || benefit.includes('Gratuito') || code.includes('FREE') || code === 'GOV-PARCEIRO-100') {
            // Isenção completa: esconde opções normais e mostra botão de ativação de cupom
            if (paymentTabs) paymentTabs.style.display = 'none';
            if (panelPix) panelPix.style.display = 'none';
            if (panelCard) panelCard.style.display = 'none';
            if (panelCoupon) panelCoupon.style.display = 'block';
          } else {
            // Desconto parcial: mantém formas de pagamento, apenas aplica o cupom
            if (paymentTabs) paymentTabs.style.display = 'flex';
            if (panelCoupon) panelCoupon.style.display = 'none';
          }
        } else {
          throw new Error(result.error || 'Cupom inválido ou já resgatado.');
        }
      } catch (err) {
        let msg = '❌ Cupom inválido ou já resgatado.';
        if (err.message === 'cupom-ja-resgatado') {
          msg = '❌ Este cupom já foi utilizado e não é mais válido.';
        }
        activeCoupon = null;
        couponFeedback.style.display = 'block';
        couponFeedback.style.color = '#f44336';
        couponFeedback.textContent = msg;
        
        // Restaura exibição padrão de pagamento
        if (paymentTabs) paymentTabs.style.display = 'flex';
        if (panelPix) panelPix.style.display = 'block';
        if (panelCard) panelCard.style.display = 'none';
        if (panelCoupon) panelCoupon.style.display = 'none';
      } finally {
        btnApplyCoupon.disabled = false;
        btnApplyCoupon.textContent = originalText;
      }
    });
  }

  if (btnConfirmCouponPayment) {
    btnConfirmCouponPayment.addEventListener('click', () => {
      if (!activeCoupon) return;
      executeProvisioning(`CUPOM: ${activeCoupon}`);
    });
  }
});
