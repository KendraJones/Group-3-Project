import { Driver } from "selenium-webdriver/chrome";
import { kendraBasePage } from "./kendraBasePage";
const fs = require('fs');
const kendra = new kendraBasePage();

test('Testing functionality of the Search Bar', async () => {
    await kendra.navigate()
    await kendra.searchBar('quality assurance')
    let text = await kendra.getResults()
    expect(text).toContain('Quality assurance')
    await fs.writeFile(`${__dirname}/screenshots/qa.png`, await kendra.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
});
test('Testing the functionality of the Side Bar', async () => {
    await kendra.navigate()
    await kendra.click(kendra.english)
    await kendra.click(kendra.currentEvents)
    await kendra.getElement(kendra.cEvents)
    let cEvents = await kendra.getResults()
    expect(cEvents).toContain('Current events')
    await fs.writeFile(`${__dirname}/screenshots/ce.png`, await kendra.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
    await kendra.click(kendra.mainPage)
    await (await kendra.getElement(kendra.mainText)).getText()
    await fs.writeFile(`${__dirname}/screenshots/mp.png`, await kendra.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
});


afterAll(async () => {
    await kendra.driver.quit()
});