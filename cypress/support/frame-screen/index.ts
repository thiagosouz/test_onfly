
Cypress.Commands.add('searchProductList', (product) => {
  cy.get('#twotabsearchtextbox').click()
  cy.get('#twotabsearchtextbox').type(product)
  cy.contains(product).should('exist')
  cy.get('.s-suggestion-container').contains(product).click()
  cy.screenshot('search-sucess')
})