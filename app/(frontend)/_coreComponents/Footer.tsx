import { Typography } from "@mui/material";
import React from "react";

function Footer() {
    return <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} variant="h3">@ Copyright Bootcamp 2023</Typography>
}

export default React.memo(Footer)