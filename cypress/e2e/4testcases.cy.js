describe('First Test Case Valid Info', () => {
  it('succesfully logs in', () => {
    cy.navigation();
    cy.wait(6000);
    cy.get('h4').should('contain.text','Online Check-in');
    cy.get('p.signup-area__guest-text').should('contain.text', 'Are you a Guest?');
    cy.get('input[name="email"]').type('waqasmanual@mailinator.com');
    cy.get('input[name="password"').type('Boring321');
    cy.get('a.signup-area__guest-btn[href="/onlinecheckin-form').should('be.visible');
    cy.get('span.icon.protection').find('img.img-fluid').should('have.attr', 'src', 'images/reg-3.svg');  
    cy.get('p.form-footer-link').should('contain.text', 'Do not have an account yet? Sign Up');
    cy.get('a[href="/register"]').contains('Sign Up').should('exist');
    cy.get('#loginbtn').click();
    cy.wait(5000);
    cy.url().should('include','/dashboard');
  })
})

describe('Second Test Case InValid Email', () => {
  it('gives error', () => {
    cy.navigation();
    cy.wait(6000);
    cy.get('h4').should('contain.text','Online Check-in');
    cy.get('input[name="email"]').type('waqasmanual@eeee.com');
    cy.get('input[name="password"').type('Boring321');
    cy.get('#loginbtn').click();
    cy.wait(5000);
    cy.contains('span', 'These credentials do not match our records.').should('be.visible');
  })
})

describe('Third Test Case Invalid Password', () => {
  it('Gives Invalid Pass error', () => {
    cy.navigation();
    cy.wait(6000);
    cy.get('h4').should('contain.text','Online Check-in');
    cy.get('input[name="email"]').type('waqasmanual@mailinator.com');
    cy.get('input[name="password"').type('Boring');
    cy.get('#loginbtn').click();
    cy.wait(5000);
    cy.contains('span', 'These credentials do not match our records.').should('be.visible');
  })
})

describe('Forth Test Case Blanks', () =>{
  it('Gives error Blanks', () => {
    cy.navigation();
    cy.wait(6000);
    cy.get('h4').should('contain.text','Online Check-in');
    cy.get('#loginbtn').click();
    cy.wait(5000);
    cy.contains('span','Email is required').should('be.visible');
    cy.contains('span', 'Password is required').should('exist');
  })
})