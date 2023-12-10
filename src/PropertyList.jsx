import {Grid, IconButton, TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export const PropertyList = ({properties, label, onChange}) => {

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


    return (
        <>
            {properties.map((property, index) =>{
                return(
                    <Grid key={index} container>
                        <Grid item xs={11}>
                            <TextField
                                value={property}
                                fullWidth
                                sx={{mb:2}}
                                type={"text"}
                                label={label}
                                onChange={(event) => onChangeProperty(event, index)}
                            />
                        </Grid>
                        <Grid item xs={1}>
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
