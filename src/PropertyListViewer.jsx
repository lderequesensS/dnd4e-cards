import {Grid, Typography} from "@mui/material";

export const PropertyListViewer = ({properties}) => {

    return (
        <>
            {properties.map((elemento,index) => {
                const [title, content] = elemento.split(':');
                return(
                <Grid key={index}>
                    <Typography sx={{fontWeight: 'bold', pl:1 }} display={'inline'}>{title + (title?":":'')}</Typography>
                    <Typography sx={{ pl:1 }}display={'inline'}>{content?content:''}</Typography>
                </Grid>
                )})
            }
        </>
    );
};
