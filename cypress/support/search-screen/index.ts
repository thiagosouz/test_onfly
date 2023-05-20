
Cypress.Commands.add('selectProductList', (product) => {
  cy.get('.sg-col-inner').contains(product).should('be.visible')
  cy.get('[data-component-type="s-product-image"]').first().click()
  cy.get('#productTitle', { timeout: 10000 }).should('be.visible')
  cy.get('#availability').contains('Em estoque').should('be.visible')
  cy.screenshot('select-sucess')
})