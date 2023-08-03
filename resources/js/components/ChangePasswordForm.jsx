import React from "react";
import { Button, ButtonGroup, Stack, Link } from "@chakra-ui/react";
import PasswordInput from "@components/PasswordInput";
import { useForm } from "@inertiajs/react";

function ChangePasswordForm() {
    const { data, setData, post, processing, errors } = useForm({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
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
            <PasswordInput
                label="old password"
                name="oldPassword"
                showPassword={false}
                recoverPassword={false}
                onChange={handleChange}
                value={data.oldPassword}
                errors={errors}
            />
            <PasswordInput
                label="new password"
                name="newPassword"
                recoverPassword={false}
                onChange={handleChange}
                value={data.newPassword}
                errors={errors}
            />
            <PasswordInput
                label="confirm new password"
                name="confirmNewPassword"
                recoverPassword={false}
                showPassword={false}
                onChange={handleChange}
                value={data.confirmNewPassword}
                errors={errors}
            />
            <ButtonGroup display="flex" width="full">
                <Button
                    textTransform="capitalize"
                    backgroundColor="#6153cce6"
                    color="white"
                    fontWeight="400"
                    fontSize="sm"
                    type="submit"
                    flex="1"
                    _hover={{ backgroundColor: "#6153cc" }}
                >
                    save
                </Button>
                <Button
                    as={Link}
                    textTransform="capitalize"
                    backgroundColor="#f6f6f9"
                    color="#212529"
                    fontWeight="400"
                    href="/"
                    _hover={{
                        textDecoration: "none",
                        backgroundColor: "#e8e8e8",
                    }}
                    fontSize="sm"
                    flex="1"
                >
                    cancel
                </Button>
            </ButtonGroup>
        </Stack>
    );
}

export default ChangePasswordForm;
