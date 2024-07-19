import React from "react";
import ProductCart from "./ProductCart";
import { setProductsData } from "../../../redux/Products";
import store from "../../../redux/store";
import "../index.scss";

describe("Product Session Nav", () => {
  it("renders", () => {
    const currentState = {
      id: 4,
      title: "Mens Casual Slim Fit",
      category: "men's clothing",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: "2.0",
      price: "15.99",
      cartCount: 4,
    };
    if (window.Cypress) {
      window.store = store;
    }
    cy.window().its("store").invoke("dispatch", setProductsData(currentState));
    cy.mount(<ProductCart product={currentState} />);
  });
});
