import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";
import logo from "assets/surveysparrow_logo.jpeg";
import API from "api/index";

import { FaShoppingCart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { MdLanguage } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { SearchIcon } from "@sparrowengg/twigs-react-icons";
import {
  Box,
  Flex,
  Avatar,
  Input,
  toast,
  Pagination,
} from "@sparrowengg/twigs-react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FilterDrawer from "pages/Home/components/FilterDrawer";
import { setProductsData } from "../../redux/Products";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import HomeFeed from "./components/HomeFeed";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@sparrowengg/twigs-react";

import { setLanguageData } from "../../redux/Language";
import { setThemeData } from "../../redux/Theme";

import clear from "config/Twigs/clearClass";

const UseLoader = Loader(HomeFeed);

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentCart = useSelector((state) => state.cart.currentCart);
  const products = useSelector((state) => state.products.currentProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCart, setTotalCart] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  const getData = useMemo(
    () => async () => {
      try {
        const data = await API.get(`/products?pageno=${currentPage}`);
        console.log(data);
        dispatch(
          setProductsData(
            data.data.data.map((item) => ({ ...item, cartCount: 0 }))
          )
        );
      } catch (e) {
        console.log(e);
        toast({
          variant: "error",
          title: "Error in Fetch Data",
          description: e.message,
        });
      }
    },
    [currentPage]
  );

  const signOut = () => {
    localStorage.setItem("user", null);
    navigate("/");
  };

  const debouncing = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  };

  const getDebouncing = debouncing(setSearchWord);

  useEffect(() => {
    getData();
    let total = 0;
    currentCart.map((product) => {
      total += product.cartCount;
      return product;
    });
    setTotalCart(total);
  }, [currentPage]);

  return (
    <>
      {/* Drawer */}
      <FilterDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        setSelectedRating={setSelectedRating}
      />
      {/* Nav */}
      <Flex
        css={{
          height: 80,
          margin: 10,
          padding: 20,
          borderRadius: 20,
          background: "$primary300",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap={20}>
          <Avatar src={logo} name="sparrow" size="2xl" />
          <Box
            css={{
              fontSize: "$2xl",
              color: "$white900",
              fontFamily: "sans-serif",
              letterSpacing: 1,
              fontWeight: "$9",
            }}
          >
            {t("SPARROWMART")}
          </Box>
        </Flex>
        <Flex
          css={{
            gap: 30,
            padding: 30,
          }}
          alignItems="center"
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              css={{
                cursor: "pointer",
                color: "white",
                background: "$primary300",
                border: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                fontFamily: "sans-serif",
              }}
            >
              <MdLanguage className="lang-icon" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={(e) => dispatch(setLanguageData("en"))}
              >
                {t("English")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => dispatch(setLanguageData("tm"))}
              >
                {t("Tamil")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              css={{
                cursor: "pointer",
                color: "white",
                background: "$primary300",
                border: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                fontFamily: "sans-serif",
              }}
            >
              <IoIosColorPalette className="lang-icon" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={(e) => {
                  clear();
                  dispatch(setThemeData("Sparrow"));
                }}
              >
                <Flex gap={"$5"} alignItems="center" justifyContent="center">
                  <Box
                    css={{
                      backgroundColor: "#56B0BB",
                      width: "$7",
                      height: "$5",
                      borderRadius: "$sm",
                    }}
                  />
                  <Box>{t("Sparrow")}</Box>
                </Flex>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  clear();
                  dispatch(setThemeData("Edith"));
                }}
              >
                <Flex gap={"$5"} alignItems="center" justifyContent="center">
                  <Box
                    css={{
                      backgroundColor: "#c26ba9",
                      width: "$7",
                      height: "$5",
                      borderRadius: "$sm",
                    }}
                  />
                  <Box>{t("Edith")}</Box>
                </Flex>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  clear();
                  dispatch(setThemeData("Jarvis"));
                }}
              >
                <Flex gap={"$5"} alignItems="center" justifyContent="center">
                  <Box
                    css={{
                      backgroundColor: "#72cf9b",
                      width: "$7",
                      height: "$5",
                      borderRadius: "$sm",
                    }}
                  />
                  <Box>{t("Jarvis")}</Box>
                </Flex>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  clear();
                  dispatch(setThemeData("Friday"));
                }}
              >
                <Flex gap={"$5"} alignItems="center" justifyContent="center">
                  <Box
                    css={{
                      backgroundColor: "#43c4e0",
                      width: "$7",
                      height: "$5",
                      borderRadius: "$sm",
                    }}
                  />
                  <Box>{t("Friday")}</Box>
                </Flex>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            css={{
              width: 300,
              fontFamily: "sans-serif",
            }}
            placeholder="Search"
            leftIcon={<SearchIcon size={200} />}
            size="lg"
            onChange={(e) => getDebouncing(e.target.value)}
          />
          <Flex css={{ position: "relative" }} alignItems="center">
            <Link to="/Cart">
              <FaShoppingCart className="cart-icon" />
            </Link>
            <Flex
              css={{
                position: "absolute",
                top: -4,
                right: -8,
                color: "$white900",
                background: "red",
                fontSize: "$sm",
                height: 15,
                width: 15,
                borderRadius: 200,
              }}
              justifyContent="center"
              alignItems="center"
            >
              {totalCart}
            </Flex>
          </Flex>
          <FaFilter
            className="filter-icon"
            onClick={() => setIsDrawerOpen(true)}
          />
          <PiSignOutBold className="sign-out" onClick={signOut} />
        </Flex>
      </Flex>
      {/* Shopping List */}
      <Flex css={{ paddingTop: 20 }} gap={10} flexDirection="column">
        <Pagination
          activePage={currentPage}
          itemsPerPage={10}
          total={100}
          onChange={(event, page) => setCurrentPage(page)}
        />
        <UseLoader
          products={products}
          searchWord={searchWord}
          selectedCategories={selectedCategories}
          setProductsData={setProductsData}
          setTotalCart={setTotalCart}
          selectedRating={selectedRating}
          currentPage={currentPage}
          loading={products.length <= 0}
        />
      </Flex>
    </>
  );
}

export default Home;
