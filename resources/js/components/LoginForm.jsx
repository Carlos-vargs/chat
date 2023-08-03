import React from "react";
import { Button, Checkbox, Stack, Text } from "@chakra-ui/react";
import PasswordInput from "@components/PasswordInput";
import Input from "@components/Input";
import { useForm } from "@inertiajs/react";

function LoginForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function handleChange(e) {
        const { name, value, checked } = e.target;

        if (checked) {
            setData(name, checked);
            return;
        }
        setData(name, value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        post("/login", data);
    }

    return (
        <Stack
            width="clamp(210px, 370px, 100%)"
            as="form"
            onSubmit={handleSubmit}
            gap="16px"
        >
            <Input
                name="email"
                onChange={handleChange}
                value={data.email}
                errors={errors.email}
            />
            <PasswordInput
                onChange={handleChange}
                value={data.password}
                errors={errors.password}
            />
            <Checkbox
                fontWeight="500"
                name="remember"
                onChange={handleChange}
                checked={data.remember}
            >
                <Text as="span" fontSize="sm">
                    Remember me
                </Text>
            </Checkbox>
            <Button
                textTransform="capitalize"
                backgroundColor="#6153cce6"
                color="white"
                fontWeight="400"
                fontSize="sm"
                type="submit"
                _hover={{ backgroundColor: "#6153cc" }}
            >
                login in
            </Button>
        </Stack>
    );
}

export default LoginForm;
