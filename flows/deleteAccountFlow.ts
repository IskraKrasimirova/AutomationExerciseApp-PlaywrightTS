import { Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { AccountDeletedPage } from '../pages/accountDeletedPage';

export async function deleteUserAccount(page: Page) {
    const homePage = new HomePage(page);
    const accountDeletedPage = new AccountDeletedPage(page);

    await homePage.navBar.deleteAccount();
    await accountDeletedPage.verifyAccountDeleted();
    await accountDeletedPage.clickContinue();
    await homePage.verifyIsAtHomePage();
}
