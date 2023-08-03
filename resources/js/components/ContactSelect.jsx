import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    Flex,
    Heading,
    Stack,
} from "@chakra-ui/react";
function ContactSelect({ options = [], onChange, name }) {
    const contacts = options.reduce((acc, { id, name }) => {
        const firstLetter = name.charAt(0).toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push({ id, name });
        return acc;
    }, {});

    return (
        <Card variant="unstyled" border="1px solid #e6ebf5" borderRadius="3px">
            <CardHeader
                borderBottom="1px solid rgba(0, 0, 0, 0.175)"
                padding="8px 16px"
                height="34px"
                backgroundColor="rgba(42,47,52, 0.03)"
            >
                <Heading
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    color="#212529"
                >
                    contacts
                </Heading>
            </CardHeader>
            <CardBody paddingBlock={2}>
                <Stack maxHeight="196px" overflowY="auto">
                    {Object.entries(contacts)
                        .sort()
                        .map(([key, list]) => (
                            <Stack key={key}>
                                <Flex
                                    paddingBlock="6px"
                                    fontSize="12px"
                                    position="sticky"
                                    top="0"
                                    fontWeight="500"
                                    color="rgba(97,83,204,1)"
                                    paddingInline="24px"
                                    backgroundColor="white"
                                    zIndex="sticky"
                                    _after={{
                                        content: "''",
                                        height: "1px",
                                        position: "absolute",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        left: "50px",
                                        right: "0",
                                        backgroundColor: "#e6ebf5",
                                    }}
                                >
                                    {key}
                                </Flex>
                                <Stack>
                                    {list.map(({ id, name: item }) => (
                                        <Checkbox
                                            padding="8px 24px"
                                            onChange={(event) =>
                                                onChange(event, id)
                                            }
                                            key={id}
                                            name={name}
                                        >
                                            {item}
                                        </Checkbox>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ContactSelect;
