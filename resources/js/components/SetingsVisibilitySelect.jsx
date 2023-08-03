import React from 'react'
import { Box, Select } from "@chakra-ui/react";

export default function SettingVisibilitySelect() {
    return (
        <Select maxWidth="106px" size="xs" textTransform="capitalize">
            <Box as="option" value="everyone">
                everyone
            </Box>
            <Box as="option" value="selected">
                selected
            </Box>
            <Box as="option" value="nobody">
                nobody
            </Box>
        </Select>
    );
}
