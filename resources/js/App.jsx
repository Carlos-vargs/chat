import "./bootstrap";

import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@theme";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
        return pages[`./pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ChakraProvider resetCSS theme={theme}>
                <App {...props} />
            </ChakraProvider>
        );
    },
});
