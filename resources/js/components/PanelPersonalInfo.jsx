import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useBoolean,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function PanelPersonalInfo() {
    const { auth } = usePage().props;
    const [isDisabled, setIsDisabled] = useState(true);

    const { data, setData, post, processing, errors } = useForm({
        name: auth.name,
        email: auth.email,
        phone: "+(245) 4577 14523",
        location: "California, USA",
    });

    function onChange(event) {
        const { name, value } = event.target;

        setData(name, value);
    }

    return (
        <Stack as="form">
            <FormControl textTransform="capitalize">
                <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    color="rgba(42, 47, 52, 0.75)"
                    display="flex"
                    borderRadius="0.25rem"
                    justifyContent="space-between"
                    alignItems="center"
                    marginRight="0"
                >
                    name
                    <Box
                        onClick={() => setIsDisabled(!isDisabled)}
                        padding="2.625px 6.300px"
                        cursor="pointer"
                        backgroundColor="#f6f6f9"
                    >
                        <Icon
                            icon="bx:bxs-pencil"
                            width="10.5px"
                            height="11px"
                        />
                    </Box>
                </FormLabel>
                <Input
                    maxWidth="277px"
                    variant="filled"
                    border="1px solid #e6ebf5"
                    value={data.name}
                    onChange={onChange}
                    name="name"
                    borderRadius="4px"
                    isDisabled={isDisabled}
                    padding="7px 16px"
                    fontSize="sm"
                />
            </FormControl>
            <FormControl textTransform="capitalize">
                <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    color="rgba(42, 47, 52, 0.75)"
                >
                    email
                </FormLabel>
                <Input
                    maxWidth="277px"
                    variant="filled"
                    border="1px solid #e6ebf5"
                    borderRadius="4px"
                    value={data.email}
                    onChange={onChange}
                    name="email"
                    isDisabled={isDisabled}
                    padding="7px 16px"
                    fontSize="sm"
                />
            </FormControl>
            <FormControl textTransform="capitalize">
                <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    color="rgba(42, 47, 52, 0.75)"
                >
                    Phone no
                </FormLabel>
                <Input
                    maxWidth="277px"
                    variant="filled"
                    value={data.phone}
                    onChange={onChange}
                    name="phone"
                    isDisabled={isDisabled}
                    border="1px solid #e6ebf5"
                    borderRadius="4px"
                    padding="7px 16px"
                    fontSize="sm"
                />
            </FormControl>
            <FormControl textTransform="capitalize">
                <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    color="rgba(42, 47, 52, 0.75)"
                >
                    location
                </FormLabel>
                <Input
                    maxWidth="277px"
                    variant="filled"
                    border="1px solid #e6ebf5"
                    borderRadius="4px"
                    isDisabled={isDisabled}
                    value={data.location}
                    onChange={onChange}
                    name="location"
                    fontSize="sm"
                    padding="7px 16px"
                />
            </FormControl>
        </Stack>
    );
}
