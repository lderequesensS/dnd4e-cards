import { Grid, ThemeProvider, Typography, CssBaseline } from "@mui/material";
import { PropertyListViewer } from "./PropertyListViewer";
import { typoTheme } from "./TypographyTheme";

export const Viewer = ({barColor, formState, language}) => {
	return (
		<>
			<ThemeProvider theme={typoTheme}>
			<CssBaseline/>
			<Grid container item sx={{border:1}}>
				<Grid container sx={{height:'50px', backgroundColor:barColor, color:'white'}} justifyContent={'space-between'} alignItems={'center'}>
					<Grid item ml={2}>
						{formState.icon}
					</Grid>
					<Typography sx={{fontWeight: 'bold', fontFamily: 'Vecna'}}>{formState.name}</Typography>
					<Grid item mr={2}>
						<Typography sx={{fontWeight: 'bold'}}>{formState.level}</Typography>
					</Grid>
				</Grid>
				<Grid container direction="column" justifyContent="space-between" alignItems="flex-start" height={'calc(100% - 50px)'} sx={{minHeight:'200px'}}	>
					<Grid item >
						<Typography sx={{fontWeight: 'bold', pl:1}} >{language.types[formState.type]} ♦ {formState.keywords}</Typography>
						<Typography sx={{fontWeight: 'bold', pl:1}} display={'inline'}>{language.actions[formState.action]}</Typography>
						<Typography sx={{fontWeight: 'bold', pl:5}} display={'inline'}>{formState.range}</Typography>
						<PropertyListViewer properties={formState.properties} gradients={formState.gradients}/>
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
