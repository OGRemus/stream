import { navbarSelectors } from "./pageObjects/webElements/SELECTORS.JS"
import {loginPageSelectors} from "./pageObjects/webElements/SELECTORS.JS"
import { homepage } from "./pageObjects/homePage";


describe('Logout test - positive flow', () => {
    it('Open base page and login', () => {

      cy.visit(Cypress.env('baseUrl'))
      cy.get(loginPageSelectors.signInButton).click()
      cy.origin('https://authentication-server-gl2nzwfaqq-ey.a.run.app/login', () => {
        //cy.visit('/login')
        cy.get('#email').type(Cypress.env('user'))
        cy.get('#passwordNewInput').type(Cypress.env('pass'))
        cy.get('.login-btn').click()
      })
      cy.get(navbarSelectors.navbarButtons).should('be.visible')
      cy.url().should('eq', Cypress.env('baseUrl') + '/app')
    })

    it('Logout test', () => {
      homepage.logout()
      homepage.checkIfLoggedOut()
    });
  })