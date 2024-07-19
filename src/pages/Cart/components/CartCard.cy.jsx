import React from "react";
import CartCard from "./CartCard";
import "../index.scss";

const product = {
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
describe("Product Session Nav", () => {
  it("renders", () => {
    cy.mount(<CartCard product={product} />);
  });
});
