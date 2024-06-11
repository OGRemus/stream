import {movieScreenSelectors} from ".//webElements/SELECTORS.JS"

class MovieScreen { 

    checkPlayer () {
        cy.get(movieScreenSelectors.player)
        .should('exist')
        .and('be.visible')
    }

    checkPlayerBtns (){ 
        cy.get(movieScreenSelectors.iframe).then($frame => {
            const content = $frame.contents()
            content.get(movieScreenSelectors.playButton)
            content.get(movieScreenSelectors.playerButtons)
            content.get(movieScreenSelectors.playerVolume)
            content.get(movieScreenSelectors.progressBar)
            content.get(movieScreenSelectors.timer)
        })
    }

    checkScreen () {
        cy.get(movieScreenSelectors.header)
        .should('exist')
        .and('be.visible')
    }

}


export const movieScreen = new MovieScreen()