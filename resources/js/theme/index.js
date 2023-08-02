import { extendTheme, Avatar as AvatarChakra, Popover } from "@chakra-ui/react";
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";
// import fontSizes from "./foundations/fontSizes";
// import breakpoints from "./foundations/breakpoints";
// import fontWeights from "./foundations/fontWeights";
import Input from "./components/Input";
import Tabs from "./components/Tabs";
import Menu from "./components/Menu";
import List from "./components/List";
import Checkbox from "./components/Checkbox";

AvatarChakra.defaultProps = { ...AvatarChakra.defaultProps, translate: "no" };
Popover.popper = {...Popover.popper, zIndex: "44" }
AvatarChakra.container = { ...AvatarChakra.container, fontSize: "0.875rem" };

const overrides = {
    fonts,
    colors,
    //   fontSizes,
    //   fontWeights,
    //   breakpoints,
    components: {
        Input,
        Tabs,
        Menu,
        List,
        Checkbox,
    },
};

export default extendTheme(overrides);
