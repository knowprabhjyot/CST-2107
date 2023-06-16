import { createTheme } from "@mui/material"
import { amber, purple } from "@mui/material/colors"


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: purple[400]
        }
    }
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: amber[400]
        }
    }
})