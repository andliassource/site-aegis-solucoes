// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Header from '../components/Header.astro';

test('Header component', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    // Check for brand name
    expect(result).toContain('Aegis');
    expect(result).toContain('Soluções');

    // Check for navigation links
    expect(result).toContain('Início');
    expect(result).toContain('Simulador');
    expect(result).toContain('Produtos');
    expect(result).toContain('Email');
    expect(result).toContain('Demo Grátis');
    expect(result).toContain('Fale Conosco');
});