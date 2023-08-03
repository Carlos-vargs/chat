import React from "react";
import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

function Form({ title, subtitle, optionMessage, optionLink, children }) {
    return (
        <Stack
            boxShadow="lg"
            borderRadius="2xl"
            color="#495057"
            paddingBlock="72px"
            paddingInline={["30px", "90px", "164px", "164px", "164px"]}
            justifyContent="flex-start"
            alignItems="center"
            backgroundColor="white"
            gap="48px"
        >
            <Stack
                justifyContent="center"
                textAlign="center"
                alignItems="center"
            >
                <Heading
                    as="h3"
                    fontWeight="500"
                    fontSize="2xl"
                    textTransform="capitalize"
                >
                    {title}
                </Heading>
                <Text fontSize="sm" color="#9397ab">
                    {subtitle}
                </Text>
            </Stack>
            {children}
            {optionMessage && optionLink && (
                <Text as="span" textAlign="center" fontSize="sm">
                    {optionMessage}
                    <Link
                        marginInlineStart="4px"
                        color="#6153cc"
                        textDecoration="underline"
                        fontWeight="500"
                        textTransform="capitalize"
                        href={`/${optionLink}`}
                    >
                        {optionLink}
                    </Link>
                </Text>
            )}
            <Text
                as="span"
                display="inline-flex"
                alignItems="center"
                textAlign="center"
                justifyContent="center"
                flexWrap="wrap"
                fontSize="sm"
            >
                © {new Date().getFullYear()} chatsam. Crafted with
                <Text
                    as="span"
                    width="14px"
                    display="inline-flex"
                    height="16px"
                    marginInline="4px"
                    color="#ef476f"
                >
                    <Icon icon="mdi:heart" width="14" height="16" />
                </Text>
                by
                <Link marginInline="4px" href="https://github.com/Carlos-vargs">
                    Carlos Vargas
                </Link>
            </Text>
        </Stack>
    );
}

export default Form;
