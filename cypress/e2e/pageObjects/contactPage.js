import homePageSelectors from './/webElements/SELECTORS.JS'
import { navbarSelectors } from './webElements/SELECTORS.JS'
import { contactFormSelectors } from './webElements/SELECTORS.JS'
let authToken
class Contactpage {
    fillContactForm()  {
        cy.fixture('example.json').then((data) => {
            cy.get(contactFormSelectors.formTitle).should('contain', 'Contact')
            cy.get(contactFormSelectors.nameInputField).type(data.name)
            cy.get(contactFormSelectors.emailInputField).type(data.email)
            cy.get(contactFormSelectors.phoneInputField).type(data.phone)
            cy.get(contactFormSelectors.subjectInputField).type(data.subject)
            cy.get(contactFormSelectors.messageInputField).type(data.message)
        })
    }

    submitContactForm()  {
        cy.intercept('POST', '**/contact**').as('getContactInfo');
        cy.get(contactFormSelectors.submitButton).contains('Send').click()
        cy.wait('@getContactInfo').then((interceptionDetails)=>{
            expect(interceptionDetails.response.statusCode).to.eq(200)
            cy.fixture('example.json').then((data) => {
                expect(interceptionDetails.response.body).to.have.property('email', data.email)
                expect(interceptionDetails.response.body).to.have.property('phone', data.phone)
                expect(interceptionDetails.response.body).to.have.property('subject', data.subject)
                expect(interceptionDetails.response.body).to.have.property('message', data.message)
                expect(interceptionDetails.response.body).to.have.property('name', data.name)
                expect(interceptionDetails.response.body).to.have.property('uuid')
            })
            authToken = interceptionDetails.request.headers.authorization
        })
        cy.get(contactFormSelectors.modalMessage).should('contain', 'Thanks! for contact with us')
    }

    sendContactFormAPI()  {
            cy.fixture('example.json').then((data) => {
            cy.request({
                method: 'POST',
                url: 'http://10.115.8.126:8080/contact',
                headers: {
                    Authorization: authToken,
                },
                body: {
                    "name": data.name,
                    "email": data.email,
                    "phone": data.phone,
                    "subject": data.subject,
                    "message": data.message
                }
            
            }).then((response) => {
                console.log(response.body)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', data.email)
                expect(response.body).to.have.property('phone', data.phone)
                expect(response.body).to.have.property('subject', data.subject)
                expect(response.body).to.have.property('message', data.message)
                expect(response.body).to.have.property('name', data.name)
                expect(response.body).to.have.property('uuid')
            })
        })
    }

}   

export const contactpage = new Contactpage()