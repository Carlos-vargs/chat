import React from "react";
import Form from "@components/Form";
import ResetPasswordForm from "@components/ResetPasswordForm";
import Auth from "@layouts/Auth";

function ResetPassword() {
    return (
        <Auth head="Reset Password">
            <Form
                title="reset password"
                subtitle="Reset Password with Chatsam."
                optionMessage="Remember It?"
                optionLink="login"
            >
                <ResetPasswordForm />
            </Form>
        </Auth>
    );
}

export default ResetPassword;
