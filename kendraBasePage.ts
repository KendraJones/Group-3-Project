import {BasePage} from "./basePage";
import {By} from "selenium-webdriver";

export class kendraBasePage extends BasePage {
    search: By = By.name('search');
    results: By = By.id('firstHeading');
    english: By = By.id('js-link-box-en')
    currentEvents: By = By.xpath('//*[@id="mw-content-text"]/div[1]/div/div[3]/ul/li[1]/a');
    mainPage: By = By.id('n-mainpage-description');
    mainText: By = By.id('Welcome_to_Wikipedia')
    mycoText: By = By.xpath('//*[@id="mw-content-text"]/div[3]/ul/li[1]/div[1]/a/span')

    constructor() {
        super({url: "https://www.wikipedia.org/"})
    };
    async searchBar(searchTerm: string) {
        return this.setInput(this.search, `${searchTerm}\n`);
    };
    async getResults() {
        return this.getText(this.results);
    };
};