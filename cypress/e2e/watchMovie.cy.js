import { homepage } from "./pageObjects/homePage";
import { movieScreen } from "./pageObjects/movieScreen";
context('Watch a movie - happy flow', () => {
    describe('Watch a movie', () => {
        before('Login into application', () => {
            cy.login()
        });
        it('Select the first movie from carousel', () => {
            homepage.checkHomepage()
            homepage.checkCarouselContent()
            homepage.watchFirstMovie()
    
        });
    
        it('Verify movie page contents', () => {
            movieScreen.checkScreen()
            movieScreen.checkPlayer()
            movieScreen.checkPlayerBtns()
        });
    });
    
});