import { test, expect } from '@playwright/test';

test('homepage has correct title and visible header and footer', async ({ page }) => {
  await page.goto('/');

  // Check the title
  await expect(page).toHaveTitle("Aegis Soluções - Conformidade Tributária e GRC com IA");

  // Check that the header is visible
  const header = page.locator('header');
  await expect(header).toBeVisible();

  // Check that the footer is visible
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});