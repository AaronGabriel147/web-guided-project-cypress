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

    it('submit button enables when form is filled out', () => {
        submitButton().should('not.be.enabled')
        // select text input and type into it
        textInput().type('hello there')
        // select author input and type into it
        authorInput().type('Obi Wan')
        // select the submit button and check that it's enabled
        submitButton().should('be.enabled')
    })

    it('cancel button can reset inputs and disable submit button', () => {
        // type into text
        textInput().type('hello there')
        // select author input and type into it
        authorInput().type('Obi Wan')
        // select cancel button, and click it
        cancelButton().click()
        // check inputs are empty
        textInput().should('have.value', '')
        authorInput().should('have.value', '')
        // check that submit button is disabled
        submitButton().should('be.disabled')
    })
  })

   describe.only('adding a new quote', () => {
       it('can submit a new quote', () => {
           // check the page does not have our quote on it
        //    cy.contains(/quotes/i).should('exist') // regular expression, case invariant

      // you must upgrade Cypress to 6.x.x for this to work!
      // put "^6.0.0" in package.json
      // and uncomment the intercept and wait below

      // then comment out the deleteButton.click()
      // and run the test TWICE
      // you will see the test fail

        //    cy.intercept('/').as('baseUrl')
        //    cy.wait("@baseUrl");

           cy.contains("have fun").should('not.exist') // regular expression, case invariant
           // fill out the form and hit submit
           textInput().type('have fun')
           authorInput().type('Elton John')
           submitButton().click()
           // check the page now does have our quote on it
           cy.contains(/have fun/i).should('exist') // regular expression, case invariant

           const deleteButton = cy.contains(/have fun/).next().next()
           deleteButton.click()
       })
       it('is a fake test', () => {})
   })
})

