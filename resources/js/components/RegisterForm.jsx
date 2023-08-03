import React from "react";
import { useForm } from "@inertiajs/react";
import { Button, Stack } from "@chakra-ui/react";
import Input from "@components/Input";
import PasswordInput from "@components/PasswordInput";

function RegisterForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData(name, value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        post("/register", data);
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
            <Input
                name="name"
                type="text"
                onChange={handleChange}
                value={data.name}
                errors={errors.name}
            />
            <PasswordInput
                recoverPassword={false}
                onChange={handleChange}
                value={data.password}
                errors={errors.password}
            />
            <PasswordInput
                name="password_confirmation"
                label="password confirmation"
                recoverPassword={false}
                onChange={handleChange}
                value={data.password_confirmation}
                errors={errors.password_confirmation}
            />
            <Button
                textTransform="capitalize"
                backgroundColor="#6153cce6"
                color="white"
                fontWeight="400"
                fontSize="sm"
                type="submit"
                _hover={{ backgroundColor: "#6153cc" }}
            >
                register
            </Button>
        </Stack>
    );
}

export default RegisterForm;
