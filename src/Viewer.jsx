import { Grid, ThemeProvider, Typography, CssBaseline } from "@mui/material";
import { PropertyListViewer } from "./PropertyListViewer";
import { typoTheme } from "./TypographyTheme";

export const Viewer = ({barColor, formState, language}) => {
	return (
		<>
			<ThemeProvider theme={typoTheme}>
			<CssBaseline/>
			<Grid item xs={12} sm={10} md={5} sx={{border:1, ml:{sm:0,md:4}, mb:{xs:20,sm:20,md:0}, minHeight:{sm:'500px',md:0}, height:(200 + formState.properties.length * 20) + 'px'}} >
				<Grid container sx={{height:'50px', backgroundColor:barColor, color:'white'}} justifyContent={'space-between'} alignItems={'center'}>
					<Grid item ml={2}>
						{/*Todo change icon*/}
						{'icono'}
					</Grid>
					<Typography sx={{fontWeight: 'bold', fontFamily: 'Vecna'}}>{formState.name}</Typography>
					<Grid item mr={2}>
						<Typography sx={{fontWeight: 'bold'}}>{formState.level}</Typography>
					</Grid>
				</Grid>
				<Grid container direction="column" justifyContent="space-between" alignItems="flex-start" height={'calc(100% - 50px)'}	>
					<Grid item sx={{width:'98%'}} >
						<Typography sx={{fontWeight: 'bold', pl:1}} >{language.types[formState.type]} ♦ {formState.keywords}</Typography>
						<Typography sx={{fontWeight: 'bold', pl:1}} display={'inline'}>{language.actions[formState.action]}</Typography>
						<Typography sx={{fontWeight: 'bold', pl:5}} display={'inline'}>{formState.range}</Typography>
						<PropertyListViewer properties={formState.properties}/>
					</Grid>
					<Grid container item justifyContent={'center'}>
						<Typography align={'justify'} pl={4} pr={4}>
							{formState.description}
						</Typography>
					</Grid>
				</Grid>

			</Grid>
			</ThemeProvider>
		</>
	);
};
