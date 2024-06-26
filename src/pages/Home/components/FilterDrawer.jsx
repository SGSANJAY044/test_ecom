import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Drawer, DrawerHeader, DrawerBody, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Flex, Box, Chip } from "@sparrowengg/twigs-react";
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
function FilterDrawer({ isDrawerOpen, setIsDrawerOpen, selectedCategories, setSelectedCategories }) {
    const products = useSelector((state) => state.products.currentProducts);
    const [categories, setCategories] = useState([...new Set(products.map(product => product.category))])
    console.log(categories);

    const addFilter = (category) => {
        setSelectedCategories(prev => prev.includes(category) ? prev : [...prev, category])
    }
    return (
        <>
            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <DrawerHeader>
                    <Flex css={{ width: 600 }} justifyContent='space-between'>
                        <Box css={{
                            fontFamily: 'sans-serif',
                            fontSize: '$2xl',
                            fontWeight: '$6',
                            color: '$primary400'
                        }}>Filter Products</Box>
                        <CloseIcon cursor='pointer' color='gray' onClick={() => setIsDrawerOpen(false)} />
                    </Flex>

                </DrawerHeader>
                <DrawerBody>
                    <DropdownMenu>
                        <DropdownMenuTrigger css={{
                            padding: '8px',
                            cursor: 'pointer',
                            color: 'white',
                            background: '#56B0BB',
                            border: 'none',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            fontFamily: 'sans-serif'
                        }}>
                            Categories
                        </DropdownMenuTrigger>

                        <DropdownMenuContent css={{ zIndex: 9999 }}>
                            {categories.map((category) => <DropdownMenuItem onClick={() => addFilter(category)}>{category}</DropdownMenuItem>)}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Flex css={{
                        flexWrap: 'wrap',
                        paddingTop: '$10',
                        gap: '$10',
                    }}>
                        {
                            selectedCategories.map((category) => (
                                <Chip css={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: '$6',
                                    padding: 15,
                                    borderRadius: 8,
                                    color: '$white900',
                                    backgroundColor: '$primary400'
                                }} closable onClose={() => setSelectedCategories(prev => prev.filter(item => item != category))} size='md'>{category}</Chip>
                            ))
                        }
                    </Flex>
                </DrawerBody>
            </Drawer>
        </>
    );

}

export default FilterDrawer