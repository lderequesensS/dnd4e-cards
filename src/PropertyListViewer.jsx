import {Grid, Typography} from "@mui/material";

export const PropertyListViewer = ({properties, gradients}) => {
	return (
		<>
			{properties.map((element,index) => {
				const [title, content] = element.split(':');
				const baseStyle = {pl:1, boxDecorationBreak:'clone',whiteSpace:'break-spaces'}

				let styleGrid = {}
				if (gradients[index]) {
					styleGrid = {background:'linear-gradient(to right, #dcddcb, #ffffff)'}
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
