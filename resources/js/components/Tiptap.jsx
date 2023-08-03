import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
    Button,
    Flex,
    Stack,
    Text,
    Tooltip,
    keyframes,
} from "@chakra-ui/react";
import Placeholder from "@tiptap/extension-placeholder";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const mercuryTypingAnimation = keyframes({
    "0%": {
        transform: "translateY(0)",
        backgroundColor: "rgba(97,83,204,.7)",
    },

    "28%": {
        transform: "translateY(-7px)",
        backgroundColor: "rgba(97,83,204,.4)",
    },

    "44%": {
        transform: "translateY(0)",
        backgroundColor: "rgba(97,83,204,.2)",
    },
});

function Tiptap({ content = null, handleSubmit }) {
    const { auth, conversation, group } = usePage().props;
    const [currentUserTyping, setCurrentUserTyping] = useState({});

    useEffect(() => {
        let timeoutId;

        function handleTyping(user) {
            setCurrentUserTyping(user);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setCurrentUserTyping({});
            }, 1000);
        }

        window.Echo.private(
            "conversation." + (conversation?.id ?? group?.id)
        ).listenForWhisper("typing", handleTyping);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    function handleContentUpdate() {
        window.Echo.private(
            "conversation." + (conversation?.id ?? group?.id)
        ).whisper("typing", {
            id: auth.id,
            name: auth.name,
        });
    }

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Type your message...",
            }),
        ],
        content: content,
        onUpdate: handleContentUpdate,
    });

    return (
        <Flex alignItems="center" flex="1" gap="20px">
            <Tooltip
                hasArrow
                label="More"
                backgroundColor="black"
                color="white"
                placement="top"
                fontSize="12.05px"
            >
                <Icon
                    icon="bx:bx-dots-horizontal-rounded"
                    width="22px"
                    height="22px"
                />
            </Tooltip>
            <Tooltip
                hasArrow
                label="Emoji"
                backgroundColor="black"
                color="white"
                placement="top"
                fontSize="12.05px"
            >
                <Icon icon="bx:bx-smile" width="22px" height="22px" />
            </Tooltip>
            <Stack position="relative" flex="1">
                <EditorContent className="editorContent" editor={editor} />
                {currentUserTyping.name && (
                    <Flex
                        position="absolute"
                        bottom="-22px"
                        flex="1"
                        paddingInline="4px"
                        gap="8px"
                    >
                        <Text fontSize="11px" fontWeight="500" color="#495057">
                            {currentUserTyping.name} is typing
                        </Text>
                        <Flex gap="4px" alignItems="center">
                            {[2, 3, 4].map((delay) => (
                                <Text
                                    as="span"
                                    key={delay}
                                    width="5px"
                                    height="5px"
                                    borderRadius="full"
                                    animation={`${mercuryTypingAnimation} 1.8s .${delay}s infinite ease-in-out`}
                                />
                            ))}
                        </Flex>
                    </Flex>
                )}
            </Stack>
            <Icon icon="bx:bx-microphone" width="22px" height="22px" />
            <Button
                color="white"
                type="submit"
                width="44px"
                height="44px"
                padding="0"
                backgroundColor="#6153cce6"
                _hover={{ backgroundColor: "#6153cc" }}
                onClick={() => {
                    handleSubmit(editor.getText());
                    editor.commands.clearContent();
                }}
            >
                <Icon icon="bx:bxs-send" height="22px" width="22px" />
            </Button>
        </Flex>
    );
}

export default Tiptap;
