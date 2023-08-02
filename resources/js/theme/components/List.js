const List = {
    variants: {
        unstyled: (props) => ({
            container: {
                fontSize: "sm",
                fontWeight: "400",
                color: "#2a2f34",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                cursor: "pointer",
            },
            item: {
                color: "rgba(42, 47, 52, 0.75)",
                display: "flex",
                gap: "16px",
                listStyleType: "none",
            },
            icon: {},
        }),
        menu: (props) => ({
            container: {
                color: "#9397ab",
                display: "flex",
                gap: "30px",
                cursor: "pointer",
            },
            item: {
                height: "22px",
            },
        }),
        nav: (props) => ({
            container: {
                display: "flex",
                margin: "0 !important",
                listStyleType: "none",
                flexDirection: "column",
                gap: "14px",
            },
            item: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                width: "42px",
                height: "42px",
                padding: "0",
                color: "#878a92",
                backgroundColor: "#F6F6F9",
                borderRadius: "full",
                _first: {
                    backgroundColor: "transparent",
                    width: "auto",
                    height: "auto",
                    paddingBlock: "21px 12px",
                    color: "#6153cc",
                },
                "&>a": {
                    display: "inherit",
                    alignItems: "inherit",
                    justifyContent: "inherit",
                    width: "full",
                    height: "full",
                },
            },
        }),
        "message-list": (props) => ({
            container: {
                display: "flex",
                margin: "0 !important",
                listStyleType: "none",
                flexDirection: "column",
            },
            item: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "none",
                paddingInline: "24px",
                width: "full",
                cursor: "pointer",
                _hover: { backgroundColor: "#f6f6f9" },
                paddingBlock: "10px",
            },
        }),
    },
    defaultProps: {
        variant: "unstyled",
    },
};

export default List;
