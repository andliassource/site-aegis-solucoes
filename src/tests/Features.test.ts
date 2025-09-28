// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Features from '../components/Features.astro';

test('Features component', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Features);

    // Check for feature titles
    expect(result).toContain('Núcleo Operacional (ERP/CRM)');
    expect(result).toContain('Inteligência de Dados e IA');
    expect(result).toContain('Governança Corporativa');
    expect(result).toContain('Gestão de Riscos');
    expect(result).toContain('Compliance e Conformidade');
    expect(result).toContain('Gestão de Pessoas (RH)');
    expect(result).toContain('Gestão de Sistemas (TI)');
    expect(result).toContain('Gestão Documental e Assinaturas');
    expect(result).toContain('Sustentabilidade (ESG)');
    expect(result).toContain('Continuidade de Negócios');
    expect(result).toContain('Estratégia e Planejamento');
    expect(result).toContain('Integrações e APIs Abertas');
});