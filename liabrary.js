import { Builder, Browser, By, Key } from "selenium-webdriver";
import { expect } from "chai";
let driver = new Builder().forBrowser(Browser.CHROME).build();
const searchText = "Nike air"
const expectedProduct = 'Nike air presto by you'

async function testRunner() {
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
   
    //check site title
    const siteTitle = await driver.getTitle();
    const expectedTitle = "An Amazing EverShop Store";
    expect(expectedTitle).to.eql(siteTitle);
    

    //search for product
    await driver.findElement(By.className("search-icon")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(searchText, Key.ENTER);
    
    //get results
    const searchedResult = await driver.findElements(By.xpath(`//span[contains(text(), '${searchText}')]`));
    for(let i=0; i<searchedResult.length; i++){
        let currentProduct = await searchedResult[i].getText();
        var searchedCount = 0;
        try{
            expect(expectedProduct).to.eql(currentProduct);
            searchedCount++;
        }catch(error){
            console.log("Searched result not found yet.")
        }
    }
    if(searchedCount ==0){
        throw new Error("Searched product not found");
    }
    await driver.sleep(2000);
    await driver.quit();
}

testRunner();