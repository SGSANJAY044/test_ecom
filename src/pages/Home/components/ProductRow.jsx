import PropTypes from "prop-types";
import React, { useState } from "react";
import { Flex, Button, Text } from "@sparrowengg/twigs-react";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../../redux/Cart";

import { FaShoppingCart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductRow({ product, setTotalCart, cartStatus, setProducts }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.currentProducts.data);
  const [cartCount, setCartCount] = useState(1);
  const [currentCartStatus, setCurrentCartStatus] = useState(cartStatus);

  const addCart = (product) => {
    dispatch(
      setProducts(
        products.map((currentproduct) => {
          if (currentproduct.id === product.id) {
            return {
              ...product,
              cartCount: currentproduct.cartCount + cartCount,
            };
          }
          return currentproduct;
        })
      )
    );
    dispatch(setCartData({ ...product, cartCount: cartCount }));
    setTotalCart((prev) => prev + cartCount);
    setCurrentCartStatus(false);
    setCartCount(1);
  };
  return (
    <>
      <Flex
        className="row-container"
        key={product.id}
        css={{
          padding: 15,
        }}
        alignItems="center"
        gap={50}
      >
        <Text css={{ fontFamily: "sans-serif", width: "1%", fontSize: "$md" }}>
          {product.id}
        </Text>
        <Text
          truncate
          css={{ fontFamily: "sans-serif", width: "20%", fontSize: "$md" }}
        >
          {t(product.title)}
        </Text>
        <Text
          css={{ fontFamily: "sans-serif", width: "50%", fontSize: "$md" }}
          truncate
        >
          {t(product.description)}
        </Text>
        <Flex
          css={{
            gap: 10,
            width: "30%",
          }}
          justifyContent="center"
        >
          {currentCartStatus ? (
            <>
              <Button
                css={{
                  padding: 10,
                  fontFamily: "sans-serif",
                  fontSize: "$md",
                  width: 120,
                  textAlign: "center",
                }}
                onClick={() => addCart(product)}
                key={"OK Button"}
              >
                OK
              </Button>
              <Flex gap={10}>
                <Button
                  key={"plus"}
                  css={{
                    padding: 10,
                    fontFamily: "monospace",
                    fontSize: "$md",
                    width: 35,
                    textAlign: "center",
                  }}
                  onClick={() => setCartCount((prev) => prev + 1)}
                >
                  +
                </Button>
                <Flex
                  css={{
                    fontSize: "$md",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    marginRight: 5,
                    paddingLeft: 5,
                  }}
                  alignItems="center"
                >
                  {cartCount}
                </Flex>
                <Button
                  css={{
                    padding: 10,
                    fontFamily: "monospace",
                    fontSize: "$md",
                    width: 35,
                    textAlign: "center",
                  }}
                  disabled={cartCount < 1}
                  onClick={() => setCartCount((prev) => prev - 1)}
                >
                  -
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <Button
                css={{
                  padding: 10,
                  fontFamily: "monospace",
                  fontSize: "$md",
                  color: "$primary400",
                }}
                color={"light"}
                leftIcon={<FaShoppingCart />}
                onClick={() => setCurrentCartStatus(true)}
              >
                {t("Add to Cart")}
              </Button>
              <Button
                css={{
                  padding: 10,
                  fontFamily: "monospace",
                  fontSize: "$md",
                  cursor: "pointer",
                }}
                leftIcon={<FaBagShopping />}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {t("Buy Now")}
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <hr />
    </>
  );
}

ProductRow.propTypes = {
  cartStatus: PropTypes.any,
  product: PropTypes.any,
  setProducts: PropTypes.any,
  setTotalCart: PropTypes.any,
};

export default ProductRow;