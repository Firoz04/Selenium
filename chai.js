import { Builder, Browser, By } from "selenium-webdriver";
import { expect } from "chai";

let driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner() {
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    const siteTitle = await driver.getTitle();
    const expectedTitle = "An Amazing EverShop";
    expect(expectedTitle).to.eql(siteTitle);
    const actions = driver.actions({ async: true});
    let element = await driver.findElement(By.xpath("//a[contains(text(),'Shop')]"));
    await actions.move({ origin: element}).perform();
    await driver.findElement(By.xpath("//a[contains(text(),'Men')]")).click();
    await driver.sleep(2000);
    await driver.quit();
}
    
testRunner();