export const loginPageSelectors = {
    signInButton: ".right-sidebar > .text-white",
    emailInputField: "#email",
    passwordInputField: "#passwordNewInput",
    submitButton: "button[type='submit']",
    body: 'body',
    warningMessage: '.text-danger',
}

export const navbarSelectors = {
    navbarBurgerButton: ".burger-btn",
    navbarButtons: "li.group",
}

export const homepageSelectors =  {
    carouselRedNextButton : 'button.swiper-btn-next',
    watchNowButton: 'a.text-white.bg-red-500',
    movieQualityText: 'span.text-white.mb-2.block',
    movieTitle: 'a.text-white',
    carousel: 'div.product-contents',
}

export const headerSelectors = {
    profileIcon: 'div.profile-photo.cursor-pointer',
    logoutButton: 'Log Out'
}

export const movieScreenSelectors =  {
    iframe: "#widget2",
    player : 'div.react-player',
    playerButtons: 'div.ytp-chrome-bottom',
    playButton: 'button.ytp-play-button',
    playerVolume: 'span.ytp-volume-area',
    progressBar: 'div.ytp-progress-bar',
    timer: 'div.ytp-time-display',
    header: 'h1.text-2xl'
} 

export const contactFormSelectors = {
    nameInputField: "#name",
    emailInputField: "#email",
    messageInputField: "#message",
    phoneInputField: "#phone",
    subjectInputField: "#subject",
    submitButton: ".button-wrap",
    formTitle: ".title",
    modalMessage: ".form-output",
}

export const pricingPageSelectors = {
    title: "h1.title",
    pricingCardGrid: ".container > .grid",
    pricingPanelCard: ".pricing-panel",
    pricingFooter: ".pricing-footer",
    pricingPlanText: ".mt-2"
}