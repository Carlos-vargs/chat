import React from "react";
import {
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    TabPanel,
    Text,
} from "@chakra-ui/react";
import MessageList from "@components/MessageList";
import CreateGroupForm from "@components/CreateGroupForm";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

export default function MessagesPanel() {
    const { favourites = [], contacts = [], groups = [] } = usePage().props;

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
                    messages
                    <Text fontSize="13px" color="#6153CC" as="span">
                        {" "}
                        (128)
                    </Text>
                </Heading>
                <InputGroup variant="filled" marginBlockStart="0 !important">
                    <InputLeftAddon
                        children={
                            <Icon
                                icon="bx:bx-search"
                                width="14px"
                                height="14px"
                            />
                        }
                    />
                    <Input placeholder="Search here..." />
                </InputGroup>
            </Stack>
            <MessageList data={favourites} title="favourites" />
            <MessageList
                data={contacts}
                canCreate={true}
                title="direct messages"
            />
            <MessageList
                data={groups}
                title="groups"
                canCreate={true}
                group={true}
                modal={<CreateGroupForm />}
            />
        </TabPanel>
    );
}
