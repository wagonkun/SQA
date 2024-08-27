export class Signin {
    loginToCA(userName, password) {
        cy.get('h4').should('contain.text','Online Check-in');
        cy.get('p.signup-area__guest-text').should('contain.text', 'Are you a Guest?');
        cy.get('a.signup-area__guest-btn[href="/onlinecheckin-form').should('be.visible');
        cy.get('span.icon.protection').find('img.img-fluid').should('have.attr', 'src', 'images/reg-3.svg');  
        cy.get('p.form-footer-link').should('contain.text', 'Do not have an account yet? Sign Up');
        cy.get('a[href="/register"]').contains('Sign Up').should('exist');
        cy.get('input[name="email"]').should('exist').and('be.visible').type(userName);
        cy.get('input[name="password"]').should('exist').and('be.visible').type(password);
        cy.get('#loginbtn').click();
    }
    validateSuccessfullLogin(){
        cy.url().should('include','/dashboard')
        cy.get('h1.page-title').should('be.visible').and('contain.text','Welcome')
    }
    validateToast(msg){
        cy.get('.toast-message').should('be.visible').and('contain.text', msg)
        cy.get('.toast-message').should('not.exist')
    }
    FailedLoginTest(){
        cy.contains('span', 'These credentials do not match our records.').should('be.visible');
    }
    BlankFieldsLoginTest(){
        cy.contains('span','Email is required').should('be.visible');
        cy.contains('span', 'Password is required').should('exist');
    }

}
