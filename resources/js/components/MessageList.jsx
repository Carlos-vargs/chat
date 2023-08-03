import React, { useContext, useEffect } from "react";
import {
    Flex,
    Heading,
    ListItem,
    Stack,
    Text,
    UnorderedList,
    Avatar,
    AvatarBadge,
    Link,
} from "@chakra-ui/react";
import ChatContext from "@contexts/Chat";
import { router, usePage } from "@inertiajs/react";

function MessageList({
    data = [],
    title,
    canCreate = false,
    modal,
    group = false,
}) {
    const { activeUsersId } = useContext(ChatContext);
    const props = usePage().props;

    function setCurrentChat(id) {
        console.log({
            props,
            id,
            group,
        });
        router.post("/current-chat", {
            id,
            group,
        });
    }

    return (
        <Stack paddingBlock="24px 48px" margin="0 !important">
            <Flex
                paddingInline="24px"
                alignItems="center"
                justifyContent="space-between"
            >
                <Heading
                    as="h5"
                    textTransform="uppercase"
                    fontWeight="500"
                    fontSize="11px"
                    color="#9397ab"
                >
                    {title}
                </Heading>
                {canCreate && modal}
            </Flex>
            <UnorderedList variant="message-list">
                {data.map((value) => (
                    <ListItem
                        key={value.id}
                        onClick={() => setCurrentChat(value.id)}
                    >
                        <Flex gap="8px">
                            <Avatar
                                name={value.name}
                                width="2rem"
                                size="sm"
                                height="2rem"
                            >
                                {!group && (
                                    <AvatarBadge
                                        boxSize="13px"
                                        backgroundColor={
                                            activeUsersId.has(value.id)
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
                                    fontSize="sm"
                                    fontWeight="500"
                                    translate="no"
                                >
                                    {value.name}
                                </Heading>
                                <Text
                                    as="span"
                                    margin="0 !important"
                                    color="#9397ab"
                                    fontSize="13px"
                                    textTransform="capitalize"
                                >
                                    last message...
                                </Text>
                            </Stack>
                        </Flex>
                    </ListItem>
                ))}
            </UnorderedList>
        </Stack>
    );
}

export default MessageList;
