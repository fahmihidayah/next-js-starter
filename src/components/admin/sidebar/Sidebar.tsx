import { Box, BoxProps, CloseButton, Drawer, DrawerContent, Flex, FlexProps, Icon, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"

import { IconType } from 'react-icons'
import { SidebarItem } from "."
import SidebarContent from "./SidebarContent";


interface SideBarItemProps extends FlexProps {
    icon: IconType;
    text: string;
}

export function SideBarItem({ text, icon, ...rest }: SideBarItemProps) {
    return <Box
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
            {icon && (
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={icon}
                />
            )}
            <Text>{text}</Text>
        </Flex>
    </Box>
} 