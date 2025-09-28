// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Footer from '../components/Footer.astro';

test('Footer component', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    // Check for copyright notice
    expect(result).toContain('© 2025 Aegis Soluções – Todos os direitos reservados.');

    // Check for security seals
    expect(result).toContain("alt=\"Site protegido com Let's Encrypt SSL\"");
    expect(result).toContain('alt="Selo Site Seguro ICP-Brasil Certisign"');
    expect(result).toContain('alt="Domínio registrado no Registro.br"');
});