import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { Icon } from "@iconify/react";

function OutgoingMessage({ message }) {
    return (
        <Stack alignItems="flex-end">
            <Flex
                background="linear-gradient(to top,rgba(185,102,193,1),rgba(97,83,204,1))"
                justifyContent="flex-end"
                marginInlineStart="auto !important"
                width="fit-content"
                position="relative"
                maxWidth="590px"
                zIndex="1"
                color="white"
                padding="12px 20px"
                borderRadius="3px"
                _after={{
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    right: "-8px",
                    left: "auto",
                    width: 0,
                    height: 0,
                    border: "5px solid rgba(185,102,193,1)",
                    borderRightColor: "transparent",
                    borderTopColor: "transparent",
                }}
                fontSize="14px"
            >
                <Text>{message.content}</Text>
            </Flex>
            <Flex color="green.300" alignItems="center" gap="8px">
                <Icon icon="bx:bx-check-double" width="16px" height="16px" />
                <Text
                    color="rgba(42, 47, 52, 0.75)"
                    fontSize="12px"
                    fontWeight="500"
                    as="span"
                >
                    {format(new Date(message.created_at), "h:mm a")}
                </Text>
            </Flex>
        </Stack>
    );
}

export default OutgoingMessage;
