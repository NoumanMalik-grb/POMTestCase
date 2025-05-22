class LoginPage{

    constructor(page){
        this.page=page,
        this.userName = page.locator("//input[@id='email1']");
        this.password = page.locator("//input[@id='password1']");
        this.submit = page.locator("//button[normalize-space()='Sign in']");
    }

    async LoginPagePost(){
      
        await this.userName.fill("noumanuskt002@gmail.com");
        await this.password.fill("12345678");
        await this.submit.click();
    }
}

module.exports=LoginPage;