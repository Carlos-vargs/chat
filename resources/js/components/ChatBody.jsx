import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import IncomingMessage from "@components/IncomingMessage";
import OutgoingMessage from "@components/OutgoingMessage";
import { usePage } from "@inertiajs/react";

function ChatBody() {
    const { auth, conversation = {}, group = {} } = usePage().props;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(null);

    useEffect(() => {
        setMessages(conversation?.messages ?? group?.messages);

        window.Echo.private(
            "conversation." + (conversation?.id ?? group?.id)
        ).listen(".MessageSent", ({ message }) => {
            setNewMessage(message);
        });
    }, [conversation?.id]);

    useEffect(() => {
        if (newMessage) {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
    }, [newMessage]);

    return (
        <Stack
            as="main"
            padding="24px"
            maxHeight="calc(100vh - 179px)"
            minHeight="calc(100vh - 179px)"
            gap="26px"
            height="full"
            overflowY="scroll"
        >
            {messages.map((message, key) => {
                if (message?.user?.id === auth?.id) {
                    return <OutgoingMessage key={key} message={message} />;
                } else {
                    return <IncomingMessage key={key} message={message} />;
                }
            })}
        </Stack>
    );
}

export default ChatBody;
