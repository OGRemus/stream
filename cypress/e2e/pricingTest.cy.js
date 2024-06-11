import { homepage } from "./pageObjects/homePage";
import { pricingpage } from "./pageObjects/pricingPage";
context('Pricing tests - happy flow', () => {
    describe('Pricing page tests', () => {
        before('Login into application', () => {
            cy.login()
        });
        it('Go to pricing page', () => {
            homepage.clickOnPricingButton()
        });
        it('Check pricing plans', () => {
            pricingpage.checkPricingPlans()
        });
        it('Select a random pricing plan and check', () => {
            pricingpage.clickOnRandomPlanButton()
        });
    });
})