import {TextField} from "@mui/material";

export const PropertyList = ({properties, label, onChange}) => {

    const onChangeProperty = (event, index) =>{
        const newValue = [...properties];
        newValue[index] = event.target.value;
        onChange({target:{value:newValue, name:'properties'}})
    }

    return (
        <>
            {properties.map((property, index) =>{

                return(
                    <TextField
                        key={index}
                        value={property}
                        fullWidth
                        sx={{mb:2}}
                        type={"text"}
                        label={label}
                        onChange={(event) => onChangeProperty(event, index)}
                    />
                )
            }) }
        </>
    );
};
