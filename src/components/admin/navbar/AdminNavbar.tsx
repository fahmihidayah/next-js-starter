import { Avatar, Box, BoxProps, Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface AdminNavbar extends BoxProps {
    onOpen : () => void;

}

export default function AdminNavbar({onOpen, ... rest} : AdminNavbar) {
    return <Box bg={useColorModeValue('white', 'gray.900')} borderBottom={"1px"} borderColor={"gray.100"} px={4} {... rest}>
        <Flex h={16} alignItems={'center'} justifyContent={{
            base : 'end',
            xl : 'end',
            md : 'end',
            sm : 'space-between'
        }}>

            <IconButton
                display={{
                    base : 'none',
                    xl : "none",
                    md : "none",
                    sm : "flex"
                }}
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </Flex>


    </Box>
}