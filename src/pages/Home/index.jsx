import React, { lazy, useEffect, useMemo, useState } from "react";
import "./index.scss";

import API from "api/index";
import { Flex, toast, Pagination } from "@sparrowengg/twigs-react";

import { useSelector, useDispatch } from "react-redux";
import FilterDrawer from "pages/Home/components/FilterDrawer";
import {
  addProductsData,
  setProductsData,
  setTotalCount,
} from "../../redux/Products";

import Loader from "../../components/Loader";

const Nav = lazy(() => import("./components/Nav"));
const HomeFeed = lazy(() => import("./components/HomeFeed"));

const UseLoader = Loader(<></>);

function Home() {
  const dispatch = useDispatch();

  const currentCart = useSelector((state) => state.cart.currentCart);
  const products = useSelector((state) => state.products.currentProducts.data);
  const totalCount = useSelector(
    (state) => state.products.currentProducts.totalcount
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCart, setTotalCart] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  console.log(currentPage);
  useEffect(() => {
    const callUser = async () => {
      let query = "";
      if (selectedCategories.length > 0)
        query += "categories=" + selectedCategories.join("/");
      if (selectedRating !== 0) {
        if (selectedCategories.length > 0) query += "&";
        query += "rating=" + selectedRating;
      }
      if (searchWord !== "") {
        if (selectedCategories.length > 0 || selectedRating > 0) query += "&";
        query += "searchWord=" + searchWord;
      }
      const data = await API.get(`/products?${query}&pageno=${currentPage}`);
      console.log(data);
      dispatch(
        addProductsData(
          data.data.data.map((item) => ({ ...item, cartCount: 0 }))
        )
      );
    };
    if (currentPage <= totalCount / 9) {
      callUser();
    }
  }, [currentPage]);

  const getData = useMemo(
    () => async () => {
      try {
        let query = "";
        if (selectedCategories.length > 0)
          query += "categories=" + selectedCategories.join("/");
        if (selectedRating !== 0) {
          if (selectedCategories.length > 0) query += "&";
          query += "rating=" + selectedRating;
        }
        if (searchWord !== "") {
          if (selectedCategories.length > 0 || selectedRating > 0) query += "&";
          query += "searchWord=" + searchWord;
        }
        const data = await API.get(`/products?${query}&pageno=1`);
        console.log(data);
        dispatch(setTotalCount(data.data.totalcount));
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
    [currentPage, searchWord, selectedCategories, selectedRating]
  );

  useEffect(() => {
    getData();
    let total = 0;
    currentCart.map((product) => {
      total += product.cartCount;
      return product;
    });
    setTotalCart(total);
  }, [searchWord, selectedCategories, selectedRating]);

  return (
    <>
      {products ? (
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
          <Nav
            setIsDrawerOpen={setIsDrawerOpen}
            totalCart={totalCart}
            setSearchWord={setSearchWord}
            getData={getData}
          />
          {/* Shopping List */}
          <Flex css={{ paddingTop: 20 }} gap={10} flexDirection="column">
            <HomeFeed
              searchWord={searchWord}
              selectedCategories={selectedCategories}
              selectedRating={selectedRating}
              setProductsData={setProductsData}
              setTotalCart={setTotalCart}
              getData={getData}
              setCurrentPage={setCurrentPage}
            />
          </Flex>
        </>
      ) : (
        <UseLoader loading={products ? products.length <= 0 : true} />
      )}
    </>
  );
}

export default Home;
