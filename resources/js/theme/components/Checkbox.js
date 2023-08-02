const Checkbox = {
    variants: {
        defalut: (props) => ({
            label: {
                fontSize: "14px",
                fontWeight: 500,
            },
            control: {
                borderRadius: "0.25em",
                boxSize: "14px",
            },
            icon: {
                boxSize: "8px",
            },
            container:{
                marginTop: "0 !important"
            }
        }),
    },
    defaultProps: {
        variant: "defalut",
        colorScheme: "purple",
    },
};

export default Checkbox;
