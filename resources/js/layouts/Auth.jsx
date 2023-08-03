import React from "react";
import { Flex } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import imgBg from "@images/auth-img.jpg";

function Auth({ head, children }) {
    return (
        <>
            <Head title={head} />
            <Flex
                width="full"
                minHeight="100vh"
                backgroundPosition="center"
                backgroundSize="cover"
                alignItems="center"
                justifyContent="center"
                backgroundImage={imgBg}
            >
                {children}
            </Flex>
        </>
    );
}

export default Auth;
