// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Comando customizado para selecionar um produto da pesquisa
       * @example cy.nameCommand()
       */
      selectProductList(product: string): Chainable<Element>
    }
  }
  