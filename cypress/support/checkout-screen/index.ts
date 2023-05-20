
Cypress.Commands.add('addCartShop', () => {
  cy.get('#add-to-cart-button').click()
  cy.contains('Adicionado ao carrinho').should('be.visible')
  cy.get('[data-feature-id="proceed-to-checkout-action"]').click()
  cy.contains('Fazer login').should('be.visible')
  cy.screenshot('checkout-sucess')
})