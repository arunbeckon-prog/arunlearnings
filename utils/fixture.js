const base = require('@playwright/test');
const{ExamplePage}= require('../PageObjectModel/examplePage');

exports.customtest=base.test.extend(
{

    authPage : async ({page},use) =>{


         const examplePage=new ExamplePage(page);
    await examplePage.goto();
    await examplePage.pagetest();

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('Open Window').click()]);
    console.log(await newPage.getByText('Invalid SSL certificate').textContent());

    const [tabPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await page.getByRole('link', { name: 'Open Tab' }).click()]);
    console.log(await tabPage.getByText('Chennai').textContent());
    await use(page);

    //tear down
    await page.context().close();

    }
})