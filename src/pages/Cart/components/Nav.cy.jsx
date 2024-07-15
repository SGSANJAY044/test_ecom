import React from "react";
import Nav from "./Nav";
import "../index.scss";

describe("Product Session Nav", () => {
  it("renders", () => {
    cy.mount(<Nav />);
  });
});
