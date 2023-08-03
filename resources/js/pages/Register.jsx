import React from "react";
import Form from "@components/Form";
import RegisterForm from "@components/RegisterForm";
import Auth from "@layouts/Auth";

function Register() {
    return (
        <Auth head="Register">
            <Form
                title="register account"
                subtitle="Get your free Chatsam account now."
                optionMessage="Already have an account?"
                optionLink="login"
            >
                <RegisterForm />
            </Form>
        </Auth>
    );
}

export default Register;
