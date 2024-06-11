import { pricingPageSelectors } from "./webElements/SELECTORS.JS"
import { userData } from '../../fixtures/userData';

class Pricingpage {
    checkPricingPlans(){
        cy.get(pricingPageSelectors.pricingCardGrid).should('be.visible')
        cy.get(pricingPageSelectors.pricingCardGrid).children().should('have.length', 3)
        cy.get(pricingPageSelectors.pricingPanelCard).its('length').should('eq', 3)
        cy.get(pricingPageSelectors.pricingPanelCard).each((element,index) => {
            cy.get(element).find(pricingPageSelectors.pricingFooter).invoke('text').should('not.be.empty').should('contain', 'Choose A Plan')
            cy.get(element).find(pricingPageSelectors.pricingPlanText).invoke('text').should('contain', userData().pricingPlansList[index])
        });
    }

    clickOnRandomPlanButton(){
        cy.clickOnRandomElement(pricingPageSelectors.pricingFooter, 'click')
        cy.get(pricingPageSelectors.title).invoke('text').should('contain', 'Pricing plan details')
    }
}   

export const pricingpage = new Pricingpage()