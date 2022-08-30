import { kendraBasePage } from "./kendraBasePage";
const fs = require('fs');
const kendra = new kendraBasePage();

test('Testing functionality of the Search Bar', async () => {
    await kendra.navigate()
    await kendra.searchBar('quality assurance')
    let text = await kendra.getResults()
    expect(text).toContain('Quality assurance')
    await fs.writeFile(`${__dirname}/screenshots/wikipediaScreenshots.png`, await kendra.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    })
    //await kendra.driver.sleep(4000)
});
test('Testing the side bar links, Current Events and Main Page', async () => {
    await kendra.navigate()
    await kendra.click(kendra.english)
    await kendra.click(kendra.currentEvents)
    let text = await kendra.getResults()
    expect(text).toContain('Worldwide current events')
    await kendra.click(kendra.mainPage)
    let mainText = await kendra.getResults()
    expect(mainText).toContain('Welcome to ')
    //await kendra.driver.sleep(4000)
});
test('', async () => {

});

afterAll(async () => {
    await kendra.driver.quit()
});