import { Page } from '@playwright/test';
import { NavBar } from './navBar';

export class BasePage {
    navBar: NavBar;

  constructor(protected page: Page) {
    this.navBar = new NavBar(page);
  }
}