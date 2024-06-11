import {homepageSelectors} from './/webElements/SELECTORS.JS'
import { pricingPageSelectors } from './webElements/SELECTORS.JS'
import { navbarSelectors } from './webElements/SELECTORS.JS'
import { headerSelectors } from './webElements/SELECTORS.JS'

class Homepage {
    watchFirstMovie ()  {
        cy.contains('Watch Now')
        .first()
        .click()
    }

    clickOnNextTopCarousel () {
        cy.get(homepageSelectors.carouselRedNextButton)
        .first()
        .should('be.visible')
        .click()
    }

    checkHomepage () {
        cy.get(homepageSelectors.movieTitle)
        .first()
        .should('be.visible')

        cy.get(homepageSelectors.carousel)
        .first()
        .should('be.visible')

        cy.get('header')
        .should('exist')
        .and('be.visible')
    }

    checkCarouselContent () {
        cy.timeout(50000)
        cy.get(homepageSelectors.watchNowButton)
        .isVisible
        
        cy.get(homepageSelectors.carouselRedNextButton, {timeout: 10000})
        .first()
        .should('exist')
        .and('be.visible')
    }
    clickOnContactButton () {
        cy.get(navbarSelectors.navbarButtons).contains('Contact')
        .click()
        cy.url().should('contain', '/contact')
    }

    clickOnPricingButton () {
        cy.get(navbarSelectors.navbarButtons).contains('Pricing')
        .click()
        cy.url().should('contain', '/pricing-plan')
        cy.get(pricingPageSelectors.title).should('contain', 'Pricing')
    }

    clickOnProfileIcon () {
        cy.get(headerSelectors.profileIcon)
        .should('be.visible')
        .click()
    }

    logout () {
        this.clickOnProfileIcon()
        cy.contains(headerSelectors.logoutButton)
        .should('be.visible')
        .click()
    }

    checkIfLoggedOut() {
        cy.contains('Sign In').should('be.visible')
        cy.get('h1.title').should('have.text', 'Endless movies, TV shows, and more.')
    }


}   
export const homepage = new Homepage()