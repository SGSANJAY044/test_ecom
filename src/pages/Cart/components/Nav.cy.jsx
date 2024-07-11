import React from "react";
import Nav from "./Nav";
import store from "../../../redux/store";
import { Provider } from "react-redux";
import "../index.scss";

describe("Product Session Nav", () => {
  it("renders", () => {
    cy.mount(<Nav />);
  });
});
