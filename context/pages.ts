import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { SignupPage } from '../pages/signupPage';
import { AccountCreatedPage } from '../pages/accountCreatedPage';
import { AccountDeletedPage } from '../pages/accountDeletedPage';
import { ProductsPage } from '../pages/productsPage';
import { ProductDetailsPage } from '../pages/productDetailsPage';

export class Pages {
    constructor(
        public homePage: HomePage,
        public loginPage: LoginPage,
        public signupPage: SignupPage,
        public accountCreatedPage: AccountCreatedPage,
        public accountDeletedPage: AccountDeletedPage,
        public productsPage: ProductsPage,
        public productDetailsPage: ProductDetailsPage
    ) {}
}
