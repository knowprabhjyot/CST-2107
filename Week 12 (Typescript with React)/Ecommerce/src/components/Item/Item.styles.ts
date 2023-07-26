import { Typography } from "@mui/material";
import { styled } from "styled-components";


export const Text = styled(Typography)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;