describe("Perform a search", () => {
  it("should redirect to the Alaska tour", () => {
    cy.visit("https://adventure.policatcr.com/");
    cy.get("#menu-item-1810").click();
    cy.get("form > :nth-child(2) > input").type("alaska");
    cy.contains("Find Tours").click();
    cy.location("pathname").should("eq", "/tours/northernalaska-2/");
  });

  it.only("should display results", () => {
    cy.visit("https://adventure.policatcr.com/");
    cy.get("#menu-item-1810").click();
    cy.get("form > :nth-child(2) > input").type("Park");
    const currentValue = 90;
    const targetValue = 200;
    const increment = 1;
    const steps = (targetValue - currentValue) / increment;
    const arrows = "{rightarrow}".repeat(steps);
    cy.get(".price_slider span").eq(1).type(arrows);
    cy.contains("Find Tours").click();
    cy.contains("Yellowstone National Park").should("exist");
    cy.contains("Zion National Park").should("exist");
  });

  // https://adventure.policatcr.com/?toursearch=1&s=Park&min_price=90&max_price=200
});
