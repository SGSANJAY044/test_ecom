import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Flex,
  Box,
  Chip,
  Slider,
} from "@sparrowengg/twigs-react";
import { CloseIcon } from "@sparrowengg/twigs-react-icons";

function FilterDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedCategories,
  setSelectedCategories,
  setSelectedRating,
}) {
  const products = useSelector((state) => state.products.currentProducts.data);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (products)
      setCategories([...new Set(products.map((product) => product.category))]);
  }, [products]);
  const addFilter = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev : [...prev, category]
    );
  };
  return (
    <Box>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerHeader>
          <Flex css={{ width: 600 }} justifyContent="space-between">
            <Box
              css={{
                fontFamily: "sans-serif",
                fontSize: "$2xl",
                fontWeight: "$6",
                color: "$primary400",
              }}
            >
              Filter Products
            </Box>
            <CloseIcon
              cursor="pointer"
              color="gray"
              onClick={() => setIsDrawerOpen(false)}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <DropdownMenu>
            <DropdownMenuTrigger
              css={{
                padding: "8px",
                cursor: "pointer",
                color: "white",
                background: "#56B0BB",
                border: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                fontFamily: "sans-serif",
              }}
            >
              Categories
            </DropdownMenuTrigger>

            <DropdownMenuContent css={{ zIndex: 9999 }}>
              {categories.map((category) => (
                <DropdownMenuItem
                  onClick={() => addFilter(category)}
                  key={categories}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Flex
            css={{
              flexWrap: "wrap",
              paddingTop: "$10",
              gap: "$10",
            }}
          >
            {selectedCategories.map((category, index) => (
              <Chip
                css={{
                  fontFamily: "sans-serif",
                  fontWeight: "$6",
                  padding: 15,
                  borderRadius: 8,
                  color: "$white900",
                  backgroundColor: "$primary400",
                }}
                closable
                onClose={() =>
                  setSelectedCategories((prev) =>
                    prev.filter((item) => item !== category)
                  )
                }
                size="md"
                key={category + index}
              >
                {category}
              </Chip>
            ))}
          </Flex>
          <Flex css={{ paddingTop: 30 }} flexDirection="column" gap={20}>
            <Box
              css={{
                fontFamily: "sans-serif",
                fontSize: "$lg",
                color: "$primary400",
              }}
            >
              Rating
            </Box>
            <Slider
              defaultValue={[5]}
              min={1}
              max={5}
              labels={{
                left: "1 Star",
                right: "5 Star",
              }}
              labelPlacement="bottom"
              onValueChange={(value) => setSelectedRating(value[0])}
            />
          </Flex>
        </DrawerBody>
      </Drawer>
    </Box>
  );
}

FilterDrawer.propTypes = {
  isDrawerOpen: PropTypes.any,
  selectedCategories: PropTypes.array,
  setIsDrawerOpen: PropTypes.func,
  setSelectedCategories: PropTypes.func,
  setSelectedRating: PropTypes.func,
};

export default FilterDrawer;
