import React from "react";
import {
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    TabPanel,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function BookmarkPanel() {
    return (
        <TabPanel>
            <Stack
                position="sticky"
                top="0"
                zIndex="2"
                backgroundColor="hsla(0,0%,100%,.8)"
                backdropFilter="saturate(180%) blur(5px)"
                padding="24px 24px 0 24px"
                gap="24px"
            >
                <Heading
                    as="h4"
                    textTransform="capitalize"
                    fontSize="xl"
                    color="#495057"
                    fontWeight="500"
                >
                    Bookmark
                </Heading>
                <InputGroup variant="filled" marginBlockStart="0 !important">
                    <InputLeftAddon
                        children={<Icon icon="bx:bx-search" width="14px" height="14px" />}
                    />
                    <Input placeholder="Search contacts..." />
                </InputGroup>
            </Stack>
        </TabPanel>
    );
}
