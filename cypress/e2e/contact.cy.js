import { homepage } from "./pageObjects/homePage";
import { contactpage } from "./pageObjects/contactPage";

context('Contact page tests - happy flow', () => {
    describe('Check contact page and submit contact form', () => {
        before('Login into application', () => {
            cy.login()
        });
        it('Go to contact page', () => {
            homepage.clickOnContactButton()
        });
        it('Fill contact form', () => {
            contactpage.fillContactForm()
        });
        it('Submit contact form and check', () => {
            contactpage.submitContactForm()
        });
    });
    describe('Send contact form API test', () => {
        it('Send request api form', () => {
            contactpage.sendContactFormAPI()
        });
    });
})