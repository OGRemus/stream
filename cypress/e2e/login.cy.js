import { navbarSelectors } from "./pageObjects/webElements/SELECTORS.JS"
import {loginPageSelectors} from "./pageObjects/webElements/SELECTORS.JS"
import { homepage } from "./pageObjects/homePage";


//context('Contact page tests - happy flow', () => {
  describe('Login test - positive flow', () => {
    it('Open base page and login', () => {
      cy.clearLoginCache()
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
  })
  describe('Login test - negative flow', () => {
    it('Open base page and login with invalid credentials', () => {
      cy.clearLoginCache()
      cy.visit(Cypress.env('baseUrl'))
      cy.get(loginPageSelectors.signInButton).click()
      cy.origin('https://authentication-server-gl2nzwfaqq-ey.a.run.app/login', () => {
        //cy.visit('/login')
        cy.get('#email').type('invalidMail')
        cy.get('#passwordNewInput').type('pass')
        cy.get('.login-btn').click()
        cy.get('.text-danger').should('contain', 'Bad credentials')
      })
      cy.url().should('not.eq', Cypress.env('baseUrl'))
      cy.wait(3000)
    })
  })
//})