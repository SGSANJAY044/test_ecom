import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Avatar,
  Box,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Flex,
  Input,
} from "@sparrowengg/twigs-react";

import { setLanguageData } from "../../../redux/Language";
import { setThemeData } from "../../../redux/Theme";

import clear from "utils/Twigs/clearClass";

import logo from "assets/surveysparrow_logo.jpeg";

import { FaShoppingCart, FaFilter } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { MdLanguage } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { SearchIcon } from "@sparrowengg/twigs-react-icons";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function Nav({ setSearchWord, totalCart, setIsDrawerOpen }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const signOut = () => {
    sessionStorage.setItem("user", null);
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

  return (
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
            <DropdownMenuItem onClick={(e) => dispatch(setLanguageData("en"))}>
              {t("English")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => dispatch(setLanguageData("tm"))}>
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
  );
}

export default Nav;
