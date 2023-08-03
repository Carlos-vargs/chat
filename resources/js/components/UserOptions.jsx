import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import UserMenu from "@components/UserMenu";
import { Icon } from "@iconify/react";

function UserOptions() {
    return (
        <Stack
            as="footer"
            marginBlockStart="auto"
            alignItems="center"
            gap="16px"
            paddingBlockEnd="21px"
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                border="none"
                width="42px"
                height="42px"
                padding="0"
                color="#878a92"
                backgroundColor="#F6F6F9"
                borderRadius="full"
                _selected={{
                    color: "white",
                    backgroundColor: "#6153cc",
                }}
            >
                <Icon icon="ri:moon-line" width="20px" height="20px" />
            </Flex>
            <UserMenu />
        </Stack>
    );
}

export default UserOptions;
