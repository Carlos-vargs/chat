import React, { useState } from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    AvatarBadge,
    Box,
    Button,
    Flex,
    Heading,
    Input,
    ListItem,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Popover,
    PopoverAnchor,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Radio,
    RadioGroup,
    Stack,
    TabPanel,
    Text,
    Tooltip,
    UnorderedList,
    useBoolean,
} from "@chakra-ui/react";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import PanelPersonalInfo from "@components/PanelPersonalInfo";
import PanelPrivacy from "@components/PanelPrivacy";
import PanelHelp from "@components/PanelHelp";
import PanelSecurity from "@components/PanelSecurity";

const statuses = [
    {
        id: 1,
        name: "Active",
        color: "green.300",
    },
    {
        id: 2,
        name: "Away",
        color: "yellow.400",
    },
    {
        id: 2,
        name: "Do not disturb",
        color: "red.400",
    },
];

export default function SettingsPanel() {
    const { auth } = usePage().props;
    const [isEditing, setIsEditing] = useBoolean();

    const accordionItems = [
        {
            icon: "bx:bxs-user",
            title: "personal info",
            panel: <PanelPersonalInfo />,
        },
        {
            icon: "bx:bxs-lock",
            title: "privacy",
            panel: <PanelPrivacy />,
        },
        {
            icon: "bx:bxs-check-shield",
            title: "security",
            panel: <PanelSecurity />,
        },
        {
            icon: "bx:bxs-help-circle",
            title: "help",
            panel: <PanelHelp />,
        },
    ];

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
                    textTransform="capitalize"
                >
                    settings
                </Heading>
                <Tooltip
                    hasArrow
                    label="Change Background"
                    backgroundColor="black"
                    color="white"
                    placement="top"
                    fontSize="12.05px"
                >
                    <Flex
                        cursor="pointer"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="full"
                        backgroundColor="white"
                        width="28px"
                        height="28px"
                        as="label"
                        htmlFor="bgImage"
                    >
                        <Input id="bgImage" display="none" type="file" />
                        <Icon icon="bx:bxs-pencil" width="14px" height="14px" />
                    </Flex>
                </Tooltip>
            </Flex>
            <Stack
                gap="18px"
                alignItems="center"
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
                >
                    <AvatarBadge
                        boxSize="1.8rem"
                        backgroundColor="rgb(246, 246, 249)"
                        as="label"
                        htmlFor="profileImg"
                        cursor="pointer"
                    >
                        <Input id="profileImg" display="none" type="file" />
                        <Icon icon="bx:bxs-camera" width="14px" height="14px" />
                    </AvatarBadge>
                </Avatar>
                <Stack textAlign="center">
                    <Popover
                        isOpen={isEditing}
                        onOpen={setIsEditing.on}
                        onClose={setIsEditing.off}
                        isLazy
                        lazyBehavior="keepMounted"
                    >
                        <Stack>
                            <PopoverTrigger>
                                <Flex
                                    cursor="pointer"
                                    alignItems="center"
                                    gap="1"
                                    fontSize="sm"
                                    userSelect="none"
                                    justifyContent="center"
                                    color="rgba(42, 47, 52, 0.75)"
                                >
                                    <Box
                                        borderRadius="full"
                                        boxSize="8px"
                                        backgroundColor="green.300"
                                    />
                                    Active
                                    <Icon
                                        icon="mdi:chevron-down"
                                        width="14px"
                                        height="14px"
                                    />
                                </Flex>
                            </PopoverTrigger>
                        </Stack>
                        <PopoverContent maxWidth="160px">
                            <PopoverBody padding="0">
                                {statuses.map((status, key) => (
                                    <Flex
                                        key={key}
                                        alignItems="center"
                                        fontSize="sm"
                                        padding="0.35rem 1.5rem"
                                        cursor="pointer"
                                        _hover={{
                                            color: "#2a2f34",
                                            backgroundColor: "#f8f9fa",
                                        }}
                                    >
                                        <Box
                                            boxSize="8px"
                                            backgroundColor={status.color}
                                            borderRadius="full"
                                            marginRight="2"
                                        />
                                        {status.name}
                                    </Flex>
                                ))}
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Stack>
            </Stack>
            <Stack overflowY="auto">
                <Accordion allowToggle border="#e6ebf5">
                    {accordionItems.map((accordionItem, key) => (
                        <AccordionItem
                            _last={{ borderBottom: "none" }}
                            key={key}
                        >
                            <AccordionButton padding="12px 20px">
                                <Flex
                                    borderRadius="0.25rem"
                                    color="rgba(80,165,241,1)"
                                    backgroundColor="#dcedfc"
                                    boxSize="1.8rem"
                                    marginRight="1rem"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Icon
                                        icon={accordionItem.icon}
                                        width="14px"
                                        height="14px"
                                    />
                                </Flex>
                                <Box
                                    as="span"
                                    fontWeight="500"
                                    fontSize="14px"
                                    flex="1"
                                    textAlign="left"
                                    textTransform="capitalize"
                                >
                                    {accordionItem.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel padding="12px 20px">
                                {accordionItem.panel}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Stack>
        </TabPanel>
    );
}
