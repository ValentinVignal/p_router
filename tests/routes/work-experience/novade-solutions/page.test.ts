import { expect, test } from '@playwright/test';

test('It should display the novade solutions page', async ({ page }) => {
	await page.goto('/portfolio/work-experience/novade-solutions');

	// It should have the correct title.
	await expect(page.title()).resolves.toEqual('Valentin Vignal - Novade');

	// It should contain my achievements.
	await expect(page.getByText('Some achievements')).toBeVisible();

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});

test('It should display the novade solutions page with a tall screen', async ({ page }) => {
	page.setViewportSize({ width: 1280, height: 2200 });
	await page.goto('/portfolio/work-experience/novade-solutions');

	await expect(page).toHaveScreenshot({ fullPage: true }); // Takes a screenshot of the page.
});
