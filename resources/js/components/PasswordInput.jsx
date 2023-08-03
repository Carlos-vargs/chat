import {
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

function PasswordInput({
    onChange,
    value,
    errors,
    recoverPassword = true,
    showPassword = true,
    label = "password",
    name,
    placeholder,
}) {
    const [show, setShow] = useState(false);

    return (
        <FormControl isInvalid={errors} isRequired textTransform="capitalize">
            <Flex justifyContent="space-between">
                <FormLabel fontSize="sm">{label}</FormLabel>
                {recoverPassword && (
                    <Link
                        href="/reset-password"
                        fontSize="sm"
                        height="fit-content"
                        _hover={{ outline: "none" }}
                        color="#9397ab"
                    >
                        Forgot password?
                    </Link>
                )}
            </Flex>
            <InputGroup>
                <Input
                    required
                    onChange={onChange}
                    value={value}
                    name={name || label}
                    autoComplete="current-password"
                    placeholder={`Enter ${placeholder || label}`}
                    type={show ? "text" : "password"}
                />
                {showPassword && (
                    <InputRightElement color="#9397ab">
                        <Icon
                            icon={`ri:${show ? "eye-off-fill" : "eye-fill"}`}
                            width="16px"
                            height="16px"
                            onClick={() => setShow(!show)}
                        />
                    </InputRightElement>
                )}
            </InputGroup>
            <FormErrorMessage textTransform="none">{errors}</FormErrorMessage>
        </FormControl>
    );
}

export default PasswordInput;
