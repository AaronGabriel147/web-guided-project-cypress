
describe('testing things', () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    it('add text to inputs and submit form', () => {
        cy.get('[data-cy="text"]').type("Aaron").should("have.value", "Aaron");
    });
});
