class BaseScreen   {

    static clickElement (selector) { 
        cy.get(selector)
        .should("be.visible")
        .click()
    }

    static hoverOverElement (selector) { 
        cy.get(selector)
        .trigger('mouseover')
    }

    
}