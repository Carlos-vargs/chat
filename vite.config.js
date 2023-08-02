import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/App.jsx"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@components": "/resources/js/components/",
            "@theme": "/resources/js/theme/",
            "@layouts": "/resources/js/layouts/",
            "@pages": "/resources/js/pages/",
            "@icons": "/resources/js/resources/icons/",
            "@images": "/resources/js/resources/images/",
            "@contexts": "/resources/js/contexts/",
        },
    },
});
