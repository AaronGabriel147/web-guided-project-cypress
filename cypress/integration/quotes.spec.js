// write tests here

describe('Quotes App', () => {
    // schedule something to run before each test
    // start each test with a blank slate
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    const submitButton = () => cy.get('button[id="submitBtn"]')

    // 'it' is the keyword to create tests
    it('sanity checks', () => {
        // to create an assertion, use 'expect'
        expect(5).to.equal(5) // 5 === 5
        expect(1 + 2).to.equal(3) // 1 + 2 === 3
        expect({}).to.eql({}) // will this pass? with eql yes, with equal
        expect({}).not.to.equal({}) // not triple equal
    })

    it("the proper elements exist", () => {
        cy.get('input[name="text"]').should('exist')
        cy.get('input[name="ladygaga"]').should('not.exist')

        submitButton().should('exist')
        cy.get('button[id="cancelBtn"]').should('exist')
    })

})