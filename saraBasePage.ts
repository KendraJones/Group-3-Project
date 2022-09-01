import {BasePage} from './basePage'
import { By } from 'selenium-webdriver'


export class SaraPage extends BasePage {
    english: By = By.id('js-link-box-en');
    login: By = By.id('pt-login');
    userName: By = By.id('wpName1');
    password: By = By.id('wpPassword1');
    logInButton: By = By.id('wpLoginAttempt');

    constructor() {
        super({url: "https://www.wikipedia.org/"})
    };
}