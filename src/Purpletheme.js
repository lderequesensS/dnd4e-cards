import {red} from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const PurpleTheme = createTheme({
    palette: {
        primary:{
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        },
        active:{
            main: '#50AA50'
        }

    }
})
