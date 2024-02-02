import { Box, BoxProps, CloseButton, Flex, FlexProps, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { SidebarItem } from ".";
import Link from "next/link";

export interface SidebarContentProps extends BoxProps {
    onClose: () => void;
    items: SidebarItem[];
}

export default function SidebarContent({ onClose, items, ...rest }: SidebarContentProps) {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            h="full"
            pos={"fixed"}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton onClick={onClose} display={{
                    sm: "flex",
                    md: "none",
                    xl: "none",
                    base: "none"
                }} />
            </Flex>
            {items.map((item) => (
                <NavItem key={item.name} item={item}>
                </NavItem>
            ))}
        </Box>
    );
}


interface NavItemProps extends FlexProps {
    item: SidebarItem;
}
const NavItem = ({ item, ...rest }: NavItemProps) => {
    return (
        <Link href={item.action ?? "#"}>
            <Box
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'blue.400',
                        color: 'white',
                    }}
                    {...rest}>
                    {item.icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={item.icon}
                        />
                    )}
                    <Text>{item.name}</Text>
                </Flex>
            </Box>
        </Link>
    )
}