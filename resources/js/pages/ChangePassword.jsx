import React from "react";
import Auth from "@layouts/Auth";
import Form from "@components/Form";
import ChangePasswordForm from "@components/ChangePasswordForm";

function ChangePassword() {
    return (
        <Auth head="Change Password">
            <Form title="change password">
                <ChangePasswordForm />
            </Form>
        </Auth>
    );
}

export default ChangePassword;
