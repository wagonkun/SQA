export class Bookingdetail {
    validateBookpage () {
        cy.get('a[href="https://master.chargeautomation.com/client/v2/bookings"]').should('be.visible').click();
        cy.get('h1').should('have.attr','class','page-title translate').and('contain.text','Bookings');
        cy.get('div.table-header.d-none.d-lg-block.label-header.bookig-details-header').should('exist');
        cy.get('#filter-search').should('be.visible');
    }
    bookingsource(value) {
        cy.get('#booking_source').should('exist').select(value.toUpperCase());
    }
    selectDate(startdate,enddate) {
        cy.get('#datepicker-trigger-booking-add').click();
        cy.get('button[date="2024-08-' + startdate + '"]').click({force: true});
        cy.get('button[date="2024-08-' + enddate + '"]').click({force: true});
    }
    dummyBooking() {
        cy.get('#add_booking_button').click();
        cy.get('#assigned_property').should('exist').select('3129');
        cy.get('#reservation_status').should('be.visible').select('Confirmed');
        cy.get('#total_booking_amount').should('exist').type('500');
        cy.get('#booking_access_code').should('be.visible').type('1214');
        cy.get('#booking_confirmation_code').should('exist').type('1414');
        cy.get('#bookingNotes').type('Client is a foreigner');
    }
}