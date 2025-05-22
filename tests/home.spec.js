const {test, expect}=require("@playwright/test");

const loginpage=require("../POMPages/Loginpage");
const homepage=require("../POMPages/homepage");

test("login using the POM", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const login=new loginpage(page);
    await login.LoginPagePost();

    await page.waitForTimeout(4000);

    const homepage1=new homepage(page);
    await homepage1.logout();
    
    await page.waitForTimeout(4000);

});