// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Contact from '../components/Contact.astro';

test('Contact component', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);

    // Check for contact form content
    expect(result).toContain('Dê o Próximo Passo na Sua Transformação Digital');
    expect(result).toContain('Nome Completo');
    expect(result).toContain('E-mail Corporativo');
    expect(result).toContain('Nome da Empresa');
    expect(result).toContain('Como podemos ajudar?');
    expect(result).toContain('Falar com um Especialista');
});