const Menu = {
    variants: {
        base: (props) => ({
            button: {
                marginBlockStart: "0 !important",
            },
            list: {
                minWidth: "10rem",
                zIndex: "4",
                position: "relative",
            },
            item: {
                justifyContent: "space-between",
                paddingInline: "24px",
                fontSize: "sm",
                // color: "gray.700",
                gap: "4px",
                color: "rgb(42, 47, 52)",
                textTransform: "capitalize",
            },
            command: {
                opacity: "0.75",
                color: "rgba(42, 47, 52)",
            },
        }),
    },
    defaultProps: {
        islazy: true,
        variant: "base",
    },
};

export default Menu;
