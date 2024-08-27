import { Signin } from "../PageObjects/Signin"
const signin = new Signin
import { Bookingdetail } from "./bookingdetail";
const bookingdetail = new Bookingdetail


describe('Booking Assertions', () => {
  it('passes Booking Tests', () => {
    cy.navigateTologin();
    signin.loginToCA('waqasmanual@mailinator.com','Boring321');
    signin.validateSuccessfullLogin();
    bookingdetail.validateBookpage();
    bookingdetail.dummyBooking();
    bookingdetail.bookingsource('TEST_PMS_NO_PMS');
    bookingdetail.selectDate('15','22');
  })
})