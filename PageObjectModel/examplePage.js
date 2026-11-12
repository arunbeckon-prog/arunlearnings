class ExamplePage{


    constructor(page){
        this.page=page;
        this.radio=page.locator('.radioButton');

    }


    async goto(){
await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    }

    async pagetest (){
await this.radio.first().click();
    }
}

module.exports={ExamplePage};