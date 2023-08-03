import React, { useEffect } from "react";
import Chat from "@components/Chat";
import { useState } from "react";
import { Flex, TabPanels, Tabs } from "@chakra-ui/react";
import { Head, usePage } from "@inertiajs/react";
import Navigation from "@components/Navigation";
import ChatContext from "@contexts/Chat";
import MessagesPanel from "@components/MessagesPanel";
import ProfilePanel from "@components/ProfilePanel";
import ContactsPanel from "@components/ContactsPanel";
import BookmarkPanel from "@components/BookmarkPanel";
import SettingsPanel from "@components/SettingsPanel";

function Home() {
    const { conversation, group } = usePage().props;

    const [chat, setChat] = useState({
        openView: true,
        rightPanel: false,
    });

    const [activeUsersId, setActiveUsersId] = useState(new Set());

    useEffect(() => {
        const channel = window.Echo.join("chatsam");

        channel.here((usersId) => {
            setActiveUsersId(new Set(usersId));
        });

        channel.joining((userId) => {
            setActiveUsersId((prevActiveUsersId) =>
                new Set(prevActiveUsersId).add(userId)
            );
        });

        channel.leaving((userId) => {
            setActiveUsersId((prevActiveUsersId) => {
                const updatedActiveUsersId = new Set(prevActiveUsersId);
                updatedActiveUsersId.delete(userId);
                return updatedActiveUsersId;
            });
        });
    }, []);

    return (
        <ChatContext.Provider
            value={{ chat, setChat, activeUsersId, setActiveUsersId }}
        >
            <Head title="Chatsam" />
            <Tabs>
                <Navigation />
                <TabPanels
                    flex={[0, 0, 0, 0, 1]}
                    transition="all .5s ease-in-out"
                    maxWidth="320px"
                    minHeight="100vh"
                    maxHeight="100vh"
                    borderRight="1px solid #e6ebf5"
                >
                    <ProfilePanel />
                    <MessagesPanel />
                    <ContactsPanel />
                    <BookmarkPanel />
                    <SettingsPanel />
                </TabPanels>
                {chat.openView && (conversation || group) && <Chat />}
                <Flex
                    flex={chat.rightPanel ? 1 : 0}
                    transition="all .5s ease-in-out"
                    maxWidth="380px"
                    minWidth={chat.rightPanel ? "380px" : "auto"}
                    backgroundColor="red"
                ></Flex>
            </Tabs>
        </ChatContext.Provider>
    );
}

export default Home;
