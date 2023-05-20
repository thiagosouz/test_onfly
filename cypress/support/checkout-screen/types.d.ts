// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Comando customizado para adicionar produto ao carrinho e fechar pedido
       * @example cy.nameCommand()
       */
      addCartShop(): Chainable<Element>
    }
  }
  