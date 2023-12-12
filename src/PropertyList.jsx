import {Grid, IconButton, TextField, Checkbox} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export const PropertyList = ({properties, label, onChange, language}) => {

	const onChangeProperty = (event, index) =>{
		const newValue = [...properties];
		newValue[index] = event.target.value;
		onChange({target:{value:newValue, name:'properties'}})
	}

	const onDeleteProperty = (index) => {
		const newValue = [...properties];
		newValue.splice(index,1);
		onChange({target:{value:newValue, name:'properties'}})
	}

	const onAddGradient = (index) => {
	}

	return (
		<>
			{properties.map((property, index) =>{
				return(
					<Grid key={index} container>
						{/* Todo?: After adding the font for the title this checkbox started to use the font that the viewer uses and that is used in another file
							Why?, is important? */}
						<Grid item xs={2} sx={{alignSelf:'center', align:'left', fontFamily:'arial', fontSize:{xs:'15px'}}}>
							{language.gradient}
							<Checkbox/>
						</Grid>
						<Grid item xs={9}>
							<TextField
								value={property}
								fullWidth
								sx={{mb:2}}
								type={"text"}
								label={label}
								onChange={(event) => onChangeProperty(event, index)}
							/>
						</Grid>
						<Grid item xs={1} alignSelf={'center'} align='center'>
							<IconButton onClick={() => onDeleteProperty(index)}>
								<DeleteForeverIcon sx={{color:'red'}}/>
							</IconButton>
						</Grid>
					</Grid>
				)
			}) }
		</>
	);
};
