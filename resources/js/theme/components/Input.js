const Input = {
    variants: {
        outline: (props) => ({
            field: {
                fontSize: "sm",
                border: "1px solid #dbe2f1",
                width: ["full", "full", "370px", "370px", "370px"],
                padding: "8px 16px",
                _placeholder: {
                    color: "#9397AB",
                    opacity: 1,
                    fontSize: "sm",
                    textTransform: "capitalize",
                },
            },
        }),
        filled: (props) => ({
            field: {
                borderRadius: "2px",
                backgroundColor: "#f8f9fa",
                _hover: null,
                _focus: null,
                _focusVisible: null,
                _placeholder: {
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#6C6F73",
                },
                paddingInline: 0,
            },
            addon: {
                paddingInline: "14px",
                backgroundColor: "#f8f9fa",
                border: "0 !important",
                borderRadius: "2px",
            },
        }),
    },
};

export default Input;
