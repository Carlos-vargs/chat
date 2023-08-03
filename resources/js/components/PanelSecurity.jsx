import { Flex, Heading, Stack, Switch } from "@chakra-ui/react";
import React from "react";

export default function PanelSecurity() {
    return (
        <Flex justifyContent="space-between" >
            <Heading as="h5" fontWeight="500" fontSize="13px">
                Show security notification
            </Heading>
            <Switch size='sm' colorScheme="purple" />
        </Flex>
    );
}
