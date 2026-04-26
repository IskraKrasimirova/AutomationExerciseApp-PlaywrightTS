import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import {config} from "../utils/config";

export class HomePage extends BasePage {
    
    private logo: Locator;
    private header: Locator;
    private consentButton: Locator;

    constructor(page: Page) {
        super(page);

        this.logo = page.getByRole('link', { name: 'Home' });
        this.header = page.getByRole('heading', { name: /Full-Fledged practice website/i });
        this.consentButton = page.getByRole('button', { name: 'Consent' });
    }

  async acceptCookiesIfPresent() {
    if (await this.consentButton.isVisible()) {
      await this.consentButton.click();
    }
  }

  async verifyIsAtHomePage() {
    await expect(this.page).toHaveURL(config.baseUrl);
    await expect(this.logo).toBeVisible();
    await expect(this.header).toBeVisible();
  }
}