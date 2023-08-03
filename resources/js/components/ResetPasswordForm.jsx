import React from "react";
import { useForm } from "@inertiajs/react";
import { Alert, Button, Stack } from "@chakra-ui/react";
import Input from "@components/Input";

function ResetPasswordForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setData(name, value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(data);
    }

    return (
        <Stack
            width="clamp(210px, 370px, 100%)"
            as="form"
            onSubmit={handleSubmit}
            gap="16px"
        >
            <Alert fontSize="sm" status="info">
                Enter your Email and instructions will be sent to you!
            </Alert>
            <Input
                name="email"
                onChange={handleChange}
                value={data.email}
                errors={errors.email}
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
                reset
            </Button>
        </Stack>
    );
}

export default ResetPasswordForm;
