// write tests here

// Most teams don't have enough tests
// they will thank you for adding tests
// unit tests: test a single function, or its output
// integration tests: test two functions working together
// end-to-end, aka e2e: what we're doing now


describe('Quotes App', () => {
    // schedule something to run before each test
    // start each test with a blank slate
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    const submitButton = () => cy.get('button[id="submitBtn"]')
    const cancelButton = () => cy.get('button[id="cancelBtn"]')
    const textInput = () => cy.get('input[name="text"]')
    const authorInput = () => cy.get('input[name="author"]') 

    // 'it' is the keyword to create tests
    it('sanity checks', () => {
        // to create an assertion, use 'expect'
        expect(5).to.equal(5) // 5 === 5
        expect(1 + 2).to.equal(3) // 1 + 2 === 3
        expect({}).to.eql({}) // will this pass? with eql yes, with equal
        expect({}).not.to.equal({}) // not triple equal
    })

    it("the proper elements exist", () => {
        textInput().should('exist')
        cy.get('input[name="ladygaga"]').should('not.exist')

        submitButton().should('exist')
        cancelButton().should('exist')
    })

   describe("filling in inputs and then cancelling", () => {
    it('submit button is disabled', () => {
        submitButton().should('be.disabled')
        submitButton().should('not.be.enabled')
    })

    // write a test to check that the cancel button is enabled
    it('cancel button is enabled', () => {
        cancelButton().should('be.enabled')
    })

    it('can type inside the text input', () => {
        textInput()
        .should('have.value', "")
        .type("Be kind to yourself and others")
        .should('have.value', "Be kind to yourself and others")
    })

    it("can type inside the author input", () => {
          authorInput()
          .should("have.value", "")
          .type("George Washington Carver")
          .should("have.value", "George Washington Carver");
      })
   })

})

