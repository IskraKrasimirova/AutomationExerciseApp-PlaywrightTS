import { expect } from "@playwright/test";
import { BasePage } from "./basePage";
import {config} from "../utils/config";

export class HomePage extends BasePage {
    
    logo = this.page.getByAltText('Website for automation practice');
    header = this.page.getByRole('heading', { name: /Full-Fledged practice website/i });
    consentButton = this.page.getByRole('button', { name: 'Consent' });

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