import { Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import React from "react";

const data = [
    {
        name: "FAQs",
    },
    {
        name: "Contact",
    },
    {
        name: "Terms & Privacity",
    },
];

export default function PanelHelp() {
    return (
        <UnorderedList>
            {data.map((item, key) => (
                <ListItem color="inherit" key={key}>
                    <Heading as="h5" fontWeight="500" fontSize="13px">
                        {item.name}
                    </Heading>
                </ListItem>
            ))}
        </UnorderedList>
    );
}
