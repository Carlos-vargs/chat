import React from "react";
import { Stack } from "@chakra-ui/react";
import ChatHeader from "@components/ChatHeader";
import ChatBody from "@components/ChatBody";
import ChatFooter from "@components/ChatFooter";

function Chat() {
    return (
        <Stack
            flex="1"
            maxWidth="1200px"
            justifyContent="space-between"
            marginInline="auto"
        >
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </Stack>
    );
}

export default Chat;
