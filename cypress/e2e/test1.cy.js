describe('Login Facebook', () => {
  it('should login to facebook', () => {
    cy.visit('https://en-gb.facebook.com/')
    cy.get('#email').type('mohammad.farqleet@outlook.com')
    cy.get('#pass').type('leomessi2691')
    cy.get('#loginbutton').click();
  })
})