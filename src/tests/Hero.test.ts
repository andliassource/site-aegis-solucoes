// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Hero from '../components/Hero.astro';

test('Hero component', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero);

    // Check for main heading
    expect(result).toContain('Sua empresa em conformidade, sempre.');

    // Check for subheading
    expect(result).toContain('A Aegis oferece um');
    expect(result).toContain('ERP/CRM modular com Inteligência Artificial');
});