describe('Hooks', () => {
  before(() => {
    // runs once before all tests in the block
    cy.log('Executa somenten antes de todos os testes')
  })

  beforeEach(() => {
    // runs before each test in the block
    cy.log('Executa antes de cada teste')
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('Executa apos os testes')
  })

  after(() => {
    // runs once after all tests in the block
    cy.log('runs once after all tests in the block')
  })
})

it('Teste 1', () =>{
    cy.log('**Execucao de teste 1**')
})

it('Teste 2', () =>{
    cy.log('**Execucao de teste 2**')
})

it('Teste 3', () =>{
    cy.log('**Execucao de teste 3**')
})