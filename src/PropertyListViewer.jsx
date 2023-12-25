import {Grid, Typography} from "@mui/material";

export const PropertyListViewer = ({properties}) => {

	return (
		<>
			{properties.map((elemento,index) => {
				const [title, content] = elemento.split(':');
				let out = <Typography sx={{pl:1, boxDecorationBreak:'clone',whiteSpace:'break-spaces'}} display={'inline'}>{title}</Typography>
				if (content) {
					out = <Typography sx={{fontWeight: 'bold', pl:1}} display={'inline'}>{title}:</Typography>
					
				}
				return (
						<Grid key={index}>
							{out}
							<Typography sx={{ pl:1, boxDecorationBreak:'clone',whiteSpace:'break-spaces' }}display={'inline'}>{content?content:''}</Typography>
						</Grid>
				)})
			}
		</>
	);
};
