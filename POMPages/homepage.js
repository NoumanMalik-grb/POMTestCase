class homepage{

    constructor(page){

       this.page=page;
       this.menu=page.locator("//img[@alt='menu']");
       this.logoutbutton=page.locator("//button[normalize-space()='Sign out']");
    }

    async logout(){
        await this.menu.click();
        await this.logoutbutton.click();
    }
}
module.exports=homepage;