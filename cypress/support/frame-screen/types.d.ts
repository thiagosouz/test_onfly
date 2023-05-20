// load type definitions from Cypress module
/// <reference types="cypress" />

  declare namespace Cypress {
    interface Chainable {
      /**
       * Comando customizado para pesquisar no frame
       * @example cy.nameCommand()
       */
      searchProductList(product: string): Chainable<Element>
    }
  }
  