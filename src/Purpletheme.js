import {red} from "@mui/material/colors";
import {createTheme, responsiveFontSizes} from "@mui/material";

import DnDC from "./fonts/DnDCartoon.ttf";

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
		},
		atWill:{
			main: '#649769'
		},
		encounter:{
			main: "#981332"
		},
		daily:{
			main: "#4c4c4e"
		},
	},
	typography: {
		fontFamily: 'arial',
		h1: {
			fontFamily: 'DnDC',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `@font-face {
				font-family: 'DnDC';
				font-style: normal;
				font-display: swap;
				src: url(${DnDC}) format('truetype');
			}`
		}
	}
})


