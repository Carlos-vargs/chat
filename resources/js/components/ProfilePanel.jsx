import React from "react";
import {
    Avatar,
    Box,
    Flex,
    Heading,
    ListItem,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Stack,
    TabPanel,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
export default function ProfilePanel() {
    const { auth } = usePage().props;

    return (
        <TabPanel>
            <Flex
                alignItems="flex-start"
                justifyContent="space-between"
                backgroundColor="purple.400"
                width="full"
                padding="18px 16px"
                height="160px"
            >
                <Heading
                    as="h5"
                    fontFamily="'Roboto',sans-serif"
                    fontWeight="500"
                    color="white"
                    fontSize="17.5px"
                >
                    My Profile
                </Heading>
                <Menu placement="bottom-end">
                    <MenuButton color="white">
                        <Icon
                            icon="bx:bx-dots-vertical-rounded"
                            width="22"
                            height="22"
                        />
                    </MenuButton>
                    <MenuList>
                        <MenuGroup>
                            <MenuItem
                                command={
                                    <Icon
                                        icon="bx:bx-info-circle"
                                        width="14"
                                        height="14"
                                    />
                                }
                            >
                                info
                            </MenuItem>
                            <MenuItem
                                command={
                                    <Icon
                                        icon="bx:bx-cog"
                                        width="14"
                                        height="14"
                                    />
                                }
                            >
                                setting
                            </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup>
                            <MenuItem
                                command={
                                    <Icon
                                        icon="bx:bx-help-circle"
                                        width="14"
                                        height="14"
                                    />
                                }
                            >
                                help
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Flex>
            <Stack
                gap="18px"
                alignItems="center"
                borderBottom="1px dashed #e6ebf5"
                paddingBlockEnd="26px"
                paddingInline="2rem"
            >
                <Avatar
                    name={auth.name}
                    width="5rem"
                    position="relative"
                    marginBlockStart="-2.5rem"
                    height="5rem"
                    border=".25rem solid white"
                />
                <Stack textAlign="center">
                    <Heading
                        as="h5"
                        noOfLines="1"
                        fontSize="17px"
                        fontWeight="500"
                    >
                        {auth.name}
                    </Heading>
                    <Text
                        fontSize="14px"
                        noOfLines="1"
                        color="rgba(42, 47, 52, 0.75)"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolorem minima cum officia esse et dolores hic,
                        pariatur sint soluta, optio ipsum suscipit. Sapiente,
                        excepturi. Numquam officia tempore eligendi laborum
                        autem.
                    </Text>
                </Stack>
            </Stack>
            <Stack gap="24px" overflowY="auto" padding="24px 24px 0 24px">
                <Text
                    color="rgba(42, 47, 52, 0.75)"
                    noOfLines={3}
                    fontSize="sm"
                    textAlign="left"
                >
                    A professional profile is an introductory section on your
                    resume that highlights your relevant qualifications and
                    skills.
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Icon icon="bx:bx-user" width="19" height="19" />
                        {auth.name}
                    </ListItem>
                    <ListItem>
                        <Icon icon="ri:phone-line" width="19" height="19" />
                        +(365) 1456 12584
                    </ListItem>
                    <ListItem>
                        <Icon icon="ri:message-2-line" width="19" height="19" />
                        {auth.email}
                    </ListItem>
                    <ListItem
                        borderBottom="1px dashed #e6ebf5"
                        paddingBlockEnd="24px"
                    >
                        <Icon icon="ri-map-pin-2-line" width="19" height="19" />
                        California, USA
                    </ListItem>
                </UnorderedList>
                <Stack gap="18px">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading
                            textTransform="uppercase"
                            fontSize="12px"
                            color="#2a2f34bf"
                            as="h5"
                        >
                            media
                        </Heading>
                        <Text
                            as="span"
                            color="#6153CC"
                            fontSize="12px"
                            fontWeight="500"
                        >
                            Show all
                        </Text>
                    </Flex>
                    <Flex gap="8px">
                        <Box backgroundColor="#BE8255" height="76px" width="85px" borderRadius="4px"></Box>
                        <Box backgroundColor="#BE8255" height="76px" width="85px" borderRadius="4px"></Box>
                        <Box backgroundColor="#BE8255" height="76px" width="85px" borderRadius="4px"></Box>
                    </Flex>
                </Stack>
            </Stack>
        </TabPanel>
    );
}
