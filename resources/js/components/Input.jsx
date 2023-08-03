import React from "react";
import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    FormErrorMessage,
} from "@chakra-ui/react";

function Input({
    name,
    label,
    value,
    type,
    autoComplete,
    onChange,
    errors,
    ...rest
}) {
    return (
        <FormControl isInvalid={errors} isRequired textTransform="capitalize">
            <FormLabel fontSize="sm">{label || name}</FormLabel>
            <ChakraInput
                required
                onChange={onChange}
                value={value}
                name={name}
                type={type || name}
                autoComplete={autoComplete || name}
                placeholder={`enter ${label || name}`}
                {...rest}
            />
            {/* <FormErrorMessage textTransform="none">{errors}</FormErrorMessage> */}
        </FormControl>
    );
}

export default Input;
