import React from "react";
import { router, usePage } from "@inertiajs/react";
import {
    Avatar,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

function UserMenu() {
    const { auth } = usePage().props;

    return (
        <Menu>
            <MenuButton>
                <Avatar
                    name={auth.name}
                    width="42px"
                    border="3px solid #f8f9fa"
                    size="sm"
                    height="42px"
                />
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    <MenuItem
                        command={
                            <Icon
                                icon="bx:bx-user-circle"
                                width="14px"
                                height="14px"
                            />
                        }
                    >
                        profile
                    </MenuItem>
                    <MenuItem
                        command={
                            <Icon icon="bx:bx-cog" width="14px" height="14px" />
                        }
                    >
                        setting
                    </MenuItem>
                    <MenuItem
                        as={Link}
                        _hover={{
                            textDecoration: "none",
                        }}
                        href="/change-password"
                        command={
                            <Icon
                                icon="bx:bx-lock-open"
                                width="14px"
                                height="14px"
                            />
                        }
                    >
                        change password
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem
                        onClick={() => router.post("/logout")}
                        command={
                            <Icon
                                icon="bx:bx-log-out-circle"
                                width="14px"
                                height="14px"
                            />
                        }
                    >
                        log out
                    </MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
}

export default UserMenu;
