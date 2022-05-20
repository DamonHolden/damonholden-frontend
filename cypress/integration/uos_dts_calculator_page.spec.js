describe('The UOS DTS Calculator page', () => {
  it('Successfully Loads', () => {
    cy.visit('/UOS_DTS_Calculator');
  });

  it('has a page title (h1 element)', () => {
    cy.get('h1').should('be.visible');
  });

  it('has a content card', () => {
    cy.get('.card').should('be.visible');
  });

  it('has titles for level 5 and level 6 mark inputs', () => {
    cy.get('h2').contains('Level 5');
    cy.get('h2').contains('Level 6');
  });

  it('has correct amount of mark inputs', () => {
    cy.get('.grade-input').should(($inputs) => {
      expect($inputs).to.have.length(14);
    });
  });
});
