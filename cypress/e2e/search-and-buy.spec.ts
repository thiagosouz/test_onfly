const product = "bicicleta caloi"

describe('e2e journey - Purchase flow', () => {
  before(() => {
    cy.visit('/')
  })

  it('Efetuando uma pesquisa e verificando disponilidade...', () => {
    cy.searchProductList(product)
  })

  it(`Seleciona o produto buscado e segue para o fluxo de compra...`, () => {
    cy.selectProductList(product)
  })

  it(`Adiciona o produto no carrinho para finalizar a compra...`, () => {
    cy.addCartShop()
  })
})
