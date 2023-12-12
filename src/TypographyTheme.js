import vecna from "./fonts/Vecna-oppx.ttf"
import { createTheme } from "@mui/material";

export const typoTheme = createTheme({
	typography: {
		fontFamily: 'Vecna',
		allVariants: 'normal',
		fontSize: 20,
	},
	components: {
		MuiCssBaseline: {
		styleOverrides: `
		@font-face {
		  font-family: 'Vecna';
		  font-style: normal;
		  font-display: swap;
		  src: url(${vecna}) format('truetype');
		  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
		`,
		},
	},
	palette: {
        atWill:{
            main: '#649769'
        },
        encounter:{
            main: "#981332"
        },
        daily:{
            main: "#4c4c4e"
        },
	}
});
