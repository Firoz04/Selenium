const { Builder, Browser, By, Key, Actions} = require("selenium-webdriver");
 
//click(), sendkeys(), scrollIntoView(), select()
let driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner() {
     await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    const siteTitle = await driver.getTitle();
    console.log(`Site Title: ${siteTitle}`);
    //await driver.findElement(By.className("search-icon")).click();
   // await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike Air",Key.ENTER);
    const actions = driver.actions({ async: true});
    let element = await driver.findElement(By.xpath("//a[contains(text(),'Shop')]"));
    await actions.move({ origin: element}).perform();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//a[contains(text(),'Men')]")).click();
    await driver.sleep(5000);
    await driver.quit();
}
    
testRunner();
