import { Signin } from "../PageObjects/Signin"
const signin = new Signin

describe('Login Test Cases', () => {
  it.only('succesfully logs in', () => {
    cy.fixture('Logindata').then((loginData) => {
      const valid = loginData.Valid;
    cy.navigateTologin();
    signin.LoginPageTest();
    signin.loginToCA(valid.email,valid.password);
    })
    signin.validateSuccessfullLogin();
  })


  it('gives Invalid email error', () => {
    cy.navigateTologin();
    signin.LoginPageTest();
    signin.loginToCA('waqasmanual@eeee.com','Boring321');
    signin.FailedLoginTest();
  })

  it('Gives Invalid Pass error', () => {
    cy.navigateTologin();
    signin.loginToCA('waqasmanual@mailinator.com','Boring')
    signin.FailedLoginTest();
  })


  it('Gives error Blanks', () => {
    cy.navigateTologin();
    signin.loginToCA(' ',' ');
    signin.BlankFieldsLoginTest();
  })
})