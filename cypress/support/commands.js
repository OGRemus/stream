// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import  loginPageSelectors  from "../e2e/pageObjects/webElements/SELECTORS.JS";
Cypress.Commands.add('clearLoginCache', (email, password) => { 
    cy.clearLocalStorage();
    cy.clearAllCookies();
    cy.clearAllSessionStorage();
    cy.request({
        method: 'GET',
        url: 'https://authentication-server-gl2nzwfaqq-ey.a.run.app/ip/login-attempts',
        headers: { 'Accept-Language': 'en-us', },
    });
 })

 Cypress.Commands.add('login', () => { 
    cy.clearLoginCache();
    cy.visit('http://10.115.8.126:5555/')
    cy.get('.right-sidebar > .text-white').click()
    cy.origin("https://authentication-server-gl2nzwfaqq-ey.a.run.app/login", () => {
      cy.get('#email').type(Cypress.env('user'))
      cy.get('#passwordNewInput').type(Cypress.env('pass'))
      cy.get('.login-btn').click()
    })
 })

 Cypress.Commands.add('clickOnRandomElement', (element, clickMethod) => {
  if (!clickMethod) {
    throw new Error('Please provide a click method');
  } else if (clickMethod !== 'dblClick' && clickMethod !== 'click') {
    throw new Error('the click method has to be either dblClick or click');
  }
  //get the length of the elements
  cy.get(element)
    .its('length')
    .then((lengthOfElements) => {
      //generate a random number between 0 and lengthOfElements and store it in a variable
       let randomProductElement = Cypress._.random(0, lengthOfElements - 1);
      if (clickMethod === 'dblClick') {
        cy.get(element).eq(randomProductElement).dblclick();
      } else if (clickMethod === 'click');
      cy.get(element).eq(randomProductElement).click();
    });
    //return randomProductElement;
});