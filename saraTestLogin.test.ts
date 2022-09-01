import { SaraPage } from "./saraBasePage";

const sara = new SaraPage()

test('Wikipedia login', async () => {
    await sara.navigate()
    await sara.click(sara.english)
    await sara.click(sara.login)
    await sara.click(sara.userName)
    await sara.setInput(sara.userName, 'usernamefor1day')
    await sara.click(sara.password)
    await sara.setInput(sara.password, 'Ihavepurpose2!')
    await sara.click(sara.logInButton)
    await sara.driver.quit()
})