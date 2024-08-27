describe('Test Cases', () => {
  it('', () => {
    const link = 'https://master.chargeautomation.com/downloadable-booking-details-page/106970?signature=cc97c6027a38091dcb178c46adbb223ee8c02c91bc0beac9988c965ea6e43e89'
    
    cy.visit(link, {
      onBeforeLoad(win){
        cy.stub(win, 'print')
      }
    })
    cy.contains('Welcome Mia Jackson').should('exist');
    cy.get('img').should('be.visible').and('have.attr','src',"https://chargeautomationlocal.nyc3.digitaloceanspaces.com/storage/uploads/property_logos/no_image.png");
    cy.get(':nth-child(3) > :nth-child(1) > table > tbody > :nth-child(1) > td > h2').should('be.visible')
      .and('contain.text','Booking Details')
    cy.contains('12:00');
    cy.get('#gmap_canvas').should('be.visible');
  })
})
