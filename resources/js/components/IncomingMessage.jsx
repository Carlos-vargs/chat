import React from "react";
import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { usePage } from "@inertiajs/react";

function IncomingMessage({ message }) {
    const { auth, conversation = {}, group } = usePage().props;

    return (
        <Flex gap="10px" alignItems="center">
            {group && (
                <Avatar
                    name={message?.user?.name}
                    width="28px"
                    size="sm"
                    height="28px"
                />
            )}
            <Stack alignItems="flex-start">
                {/* {group && (
                    <Text fontSize="14px" fontWeight="500">
                        {message.user.name}
                    </Text>
                )} */}
                <Flex
                    backgroundColor="#f6f6f9"
                    justifyContent="flex-start"
                    width="fit-content"
                    position="relative"
                    padding="12px 20px"
                    borderRadius="3px"
                    maxWidth="590px"
                    _before={{
                        content: "''",
                        position: "absolute",
                        bottom: 0,
                        left: "-8px",
                        right: "auto",
                        width: 0,
                        height: 0,
                        border: "5px solid #f6f6f9",
                        borderLeftColor: "transparent",
                        borderTopColor: "transparent",
                    }}
                    fontSize="14px"
                >
                    <Text>{message.content}</Text>
                </Flex>
                <Text
                    color="rgba(42, 47, 52, 0.75)"
                    fontSize="12px"
                    fontWeight="500"
                    as="span"
                >
                    {format(new Date(message.created_at), "h:mm a")}
                </Text>
            </Stack>
        </Flex>
    );
}

export default IncomingMessage;
