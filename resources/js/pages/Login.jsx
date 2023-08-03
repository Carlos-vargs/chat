import React from "react";
import LoginForm from "@components/LoginForm";
import Form from "@components/Form";
import Auth from "@layouts/Auth";

function Login() {
    return (
        <Auth head="Login">
            <Form
                title="welcome back !"
                subtitle="Sign in to continue to Chatsam."
                optionMessage="Don't have an account?"
                optionLink="register"
            >
                <LoginForm />
            </Form>
        </Auth>
    );
}

export default Login;
