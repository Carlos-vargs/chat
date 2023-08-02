const Tabs = {
    variants: {
        "soft-rounded": (props) => ({
            tab: {
                border: "none",
                width: "42px",
                height: "42px",
                padding: "0",
                position: "relative",
                color: "#878a92",
                backgroundColor: "#F6F6F9",
                borderRadius: "full",
                _selected: {
                    color: "white",
                    backgroundColor: "#6153cc",
                },
            },
            tablist: {
                flexDirection: "column",
                paddingBlockStart: "24px",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "16px",
                border: "none",
            },
            root: {
                backgroundColor: "white",
                width: "full",
                minHeight: "100vh",
                boxShadow: "lg",
                isLazy: true,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                // flexDirection: "column",
            },
            tabpanel: {
                padding: 0,
            },
        }),
    },
    defaultProps: {
        variant: "soft-rounded",
    },
};

export default Tabs;
