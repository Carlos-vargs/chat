import {
    Box,
    Heading,
    ListItem,
    Select,
    Stack,
    Switch,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import SettingVisibilitySelect from "@components/SetingsVisibilitySelect";

export default function PanelPrivacy() {
    const data = [
        {
            name: "Profile photo",
            component: <SettingVisibilitySelect />,
        },
        {
            name: "Status",
            component: <SettingVisibilitySelect />,
        },
        {
            name: "Groups",
            component: <SettingVisibilitySelect />,
        },
        {
            name: "Last seen",
            component: <Switch size="sm" colorScheme="purple" isChecked />,
        },
        {
            name: "Read receipts",
            component: <Switch size="sm" colorScheme="purple" isChecked />,
        },
    ];

    return (
        <Stack gap="16px">
            <Heading as="h6" fontSize="14px" fontWeight="500">
                Who can see my personal info
            </Heading>
            <UnorderedList>
                {data.map((item, key) => (
                    <ListItem justifyContent="space-between" key={key}>
                        <Heading fontSize="13px" fontWeight="500" as="h5">
                            {item.name}
                        </Heading>
                        {item?.component}
                    </ListItem>
                ))}
            </UnorderedList>
        </Stack>
    );
}
