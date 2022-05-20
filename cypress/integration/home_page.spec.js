describe('The Home Page', () => {
  it('Successfully Loads', () => {
    cy.visit('/');
  });

  it('has a page title (h1 element)', () => {
    cy.get('h1').should('be.visible');
  });

  it('has a content card', () => {
    cy.get('.card').should('be.visible');
  });
});
