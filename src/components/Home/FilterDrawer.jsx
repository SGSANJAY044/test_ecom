import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Drawer, DrawerHeader, DrawerBody, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Flex, Box } from "@sparrowengg/twigs-react";
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
function FilterDrawer({ isDrawerOpen, setIsDrawerOpen }) {
    const products = useSelector((state) => state.products.currentProducts);
    const category = useState([...new Set(products.map(product => product.category))])
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
                            color: '$primary500'
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

                        <DropdownMenuContent>
                            <DropdownMenuItem></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </DrawerBody>
            </Drawer>
        </>
    );

}

export default FilterDrawer