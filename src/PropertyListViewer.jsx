import {Grid, Typography} from "@mui/material";

export const PropertyListViewer = ({properties}) => {
	return (
		<>
			{properties.map(({text,gradient},index) => {
				const [title, content] = text.split(':');
				const baseStyle = {pl:1, boxDecorationBreak:'clone',whiteSpace:'break-spaces'}

				let styleGrid = {minWidth: '100%'}
				if (gradient) {
					styleGrid = {...styleGrid, background:'linear-gradient(to right, #dcddcb, #ffffff)'}
				}

				let out = <Typography sx={baseStyle} display={'inline'}>{title}</Typography>
				if (content) {
					out = <Typography sx={{fontWeight: 'bold', pl:1}} display={'inline'}>{title}:</Typography>
				}

				return (
						<Grid key={index} sx={styleGrid}>
							{out}
							<Typography sx={baseStyle}display={'inline'}>{content?content:''}</Typography>
						</Grid>
				)})
			}
		</>
	);
};
