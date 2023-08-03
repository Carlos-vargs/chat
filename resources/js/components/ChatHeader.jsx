import React, { useContext, useEffect, useState } from "react";
import {
    AvatarBadge,
    Flex,
    Heading,
    Input,
    Link,
    ListItem,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Stack,
    Text,
    UnorderedList,
    Avatar,
} from "@chakra-ui/react";
import ChatContext from "@contexts/Chat";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

function HeaderChat() {
    const { chat, setChat, activeUsersId } = useContext(ChatContext);

    const { conversation, group, auth } = usePage().props;
    const [activeMembers, setActiveMembers] = useState(0);

    useEffect(() => {
        if (group) {
            let count = 0;
            group.members
                .filter((member) => member.id !== auth?.id)
                .map((member) => {
                    if (activeUsersId.has(member.id)) count++;

                    setActiveMembers(count);
                });
        }
    }, [activeUsersId]);

    return (
        <Flex
            as="header"
            justifyContent="space-between"
            padding="16px 24px"
            position="sticky"
            zIndex="sticky"
            top="0"
            borderBottom="1px dashed #e6ebf5"
            backgroundColor="hsla(0,0%,100%,.8)"
            backdropFilter="saturate(180%) blur(5px)"
            height="76px"
            maxWidth="1200px"
            width="full"
            alignItems="center"
        >
            <Flex gap="16px">
                <Avatar
                    name={conversation?.user?.name ?? group?.name}
                    width="38px"
                    height="38px"
                >
                    {conversation && (
                        <AvatarBadge
                            boxSize="16px"
                            backgroundColor={
                                activeUsersId.has(conversation.user.id)
                                    ? "#06D6A0"
                                    : "#AEB1C0"
                            }
                        />
                    )}
                </Avatar>
                <Stack>
                    <Heading
                        as="h6"
                        color="#495057"
                        fontSize="lg"
                        fontWeight="500"
                        translate="no"
                    >
                        {conversation?.user?.name ?? group?.name}
                    </Heading>
                    <Text
                        as="span"
                        margin="0 !important"
                        color="#9397ab"
                        fontSize="sm"
                    >
                        {conversation &&
                            (activeUsersId.has(conversation?.user?.id)
                                ? "online"
                                : "offline")}
                        {group &&
                            `${group.members.length} members${
                                activeMembers > 0
                                    ? `, ${activeMembers} online`
                                    : ""
                            }`}
                    </Text>
                </Stack>
            </Flex>
            <UnorderedList variant="menu" listStyleType="none">
                <ListItem>
                    <Popover placement="bottom-end">
                        <PopoverTrigger>
                            <Link href="/#">
                                <Icon
                                    icon="bx:bx-search"
                                    width="22"
                                    height="22"
                                />
                            </Link>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverBody width="full">
                                    <Input
                                        placeholder="Search..."
                                        width="full"
                                    />
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </ListItem>
                <ListItem>
                    <Icon icon="bx:bxs-phone-call" width="22" height="22" />
                </ListItem>
                <ListItem>
                    <Icon icon="bx:bx-video" width="22" height="22" />
                </ListItem>
                <ListItem>
                    <Icon icon="bx:bx-bookmark" width="22" height="22" />
                </ListItem>
                <ListItem
                    title="profile info"
                    onClick={() =>
                        setChat({ ...chat, rightPanel: !chat.rightPanel })
                    }
                >
                    <Icon icon="bx:bxs-info-circle" width="22" height="22" />
                </ListItem>
                <ListItem>
                    <Menu placement="bottom-end">
                        <MenuButton>
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
                                            icon="bx:bx-archive"
                                            width="14"
                                            height="14"
                                        />
                                    }
                                >
                                    archive
                                </MenuItem>
                                <MenuItem
                                    command={
                                        <Icon
                                            icon="bx:bx-microphone-off"
                                            width="14"
                                            height="14"
                                        />
                                    }
                                >
                                    muted
                                </MenuItem>
                                <MenuItem
                                    command={
                                        <Icon
                                            icon="bx:bx-trash"
                                            width="14"
                                            height="14"
                                        />
                                    }
                                >
                                    delete
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default HeaderChat;
