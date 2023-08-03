import React from "react";
import { Flex } from "@chakra-ui/react";

import Tiptap from "@components/Tiptap";
import { useForm, usePage } from "@inertiajs/react";

function ChatFooter() {
    const { conversation, group } = usePage().props;

    const { data, post, reset, processing, errors } = useForm({
        message: null,
        conversationId: null,
    });

    const handleSubmit = (message) => {
        data.message = message;
        data.conversationId = conversation?.id ?? group?.id;

        post("/send-message", {
            onSuccess: () => reset("message"),
        });
    };
    return (
        <Flex
            as="footer"
            borderTop="1px solid #e6ebf5"
            // backgroundColor="hsla(0,0%,100%,.8)"
            backgroundColor="white"
            // backdropFilter="saturate(180%) blur(5px)"
            position="sticky"
            padding="24px"
            paddingBlockEnd="34px"
            bottom="0"
            // width="full"
            maxWidth="1200px"
            color="#878a92"
        >
            <Tiptap handleSubmit={handleSubmit} />
        </Flex>
    );
}

export default ChatFooter;
