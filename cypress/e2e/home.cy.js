describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has a documention button", () => {
    cy.wait(1000);
    cy.get("h3").contains("Documentation");
  });
});
