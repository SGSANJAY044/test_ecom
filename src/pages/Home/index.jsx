import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";

import API from "api/index";
import { Flex, toast, Pagination } from "@sparrowengg/twigs-react";

import { useSelector, useDispatch } from "react-redux";
import FilterDrawer from "pages/Home/components/FilterDrawer";
import { setProductsData } from "../../redux/Products";

import Loader from "../../components/Loader";
import HomeFeed from "./components/HomeFeed";
import Nav from "./components/Nav";

const UseLoader = Loader(HomeFeed);

function Home() {
  const dispatch = useDispatch();

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
      <Nav
        setIsDrawerOpen={setIsDrawerOpen}
        totalCart={totalCart}
        setSearchWord={setSearchWord}
      />
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
