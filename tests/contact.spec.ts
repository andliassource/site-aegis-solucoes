import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all form fields and the submit button', async ({ page }) => {
    // Check for the form itself
    const form = page.locator('form[name="contact"]');
    await expect(form).toBeVisible();

    // Check for the name input
    const nameInput = form.locator('input#name');
    await expect(nameInput).toBeVisible();

    // Check for the email input
    const emailInput = form.locator('input#email');
    await expect(emailInput).toBeVisible();

    // Check for the company input
    const companyInput = form.locator('input#empresa');
    await expect(companyInput).toBeVisible();

    // Check for the message textarea
    const messageTextarea = form.locator('textarea#message');
    await expect(messageTextarea).toBeVisible();

    // Check for the submit button
    const submitButton = form.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveText('Falar com um Especialista');
  });
});