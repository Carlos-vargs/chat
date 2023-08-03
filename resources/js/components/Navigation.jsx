import React from "react";
import {
    Link,
    Stack,
    UnorderedList,
    ListItem,
    TabList,
    Tab,
} from "@chakra-ui/react";
import Logo from "@icons/Logo";
import UserOptions from "@components/UserOptions";
import { Icon } from "@iconify/react";

function Navigation() {
    return (
        <TabList
            backgroundColor="white"
            minWidth="90px"
            zIndex="3"
            minHeight="100vh"
            paddingInline="8px"
            boxShadow="lg"
            alignItems="center"
        >
            <Link color="#6153cc" href="/" paddingBlockEnd="10px">
                <Logo />
            </Link>
            <Tab>
                <Icon icon="ri:user-3-line" width="20" height="20" />
            </Tab>
            <Tab
                _before={{
                    color: "white",
                    fontSize: "11px",
                    content: "'9'",
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#ef476f",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "full",
                    top: "-7px",
                    right: "-10px",
                    border: "3px solid #e6ebf5",
                }}
            >
                <Icon icon="ri:discuss-line" width="20" height="20" />
            </Tab>
            <Tab>
                <Icon icon="ri:contacts-book-line" width="20" height="20" />
            </Tab>
            <Tab>
                <Icon icon="ri:bookmark-3-line" width="20" height="20" />
            </Tab>
            <Tab>
                <Icon icon="ri:settings-4-line" width="20" height="20" />
            </Tab>
            <UserOptions />
        </TabList>
    );
}

export default Navigation;
