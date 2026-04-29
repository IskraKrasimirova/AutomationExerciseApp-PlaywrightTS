import { Pages } from '../context/pages';

export async function deleteUserAccount(pages: Pages) {
    await pages.homePage.navBar.deleteAccount();
    await pages.accountDeletedPage.verifyAccountDeleted();
    await pages.accountDeletedPage.clickContinue();
    await pages.homePage.verifyIsAtHomePage();
}
