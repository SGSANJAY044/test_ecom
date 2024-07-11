import React from "react";
import Nav from "./Nav";

describe("Product Session Nav", () => {
  it("renders", () => {
    cy.mount(<Nav />);
  });
});
