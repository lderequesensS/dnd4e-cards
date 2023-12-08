import {Button, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, OutlinedInput,FormControl} from "@mui/material";
import {useRef, useState} from "react";


const fieldLabel = {
    spanish:{
        language:'Lenguaje',
        name: 'Nombre',
        level:'Nivel',
        type:'Tipo',
        keywords:'Palabras clave',
        action:'Acción',
        range:'Rango',
        description:'Descripcion',
        icon:'Icono',
        add:'Agregar',
        types:{
            0:'A-voluntad',
            1:'Encuentro',
            2:'Diario'
        }
    },
    english:{
        language:'Language',
        name: 'Name',
        level:'Level',
        type:'Type',
        keywords:'Keywords',
        action:'Action',
        range:'Range',
        description:'Description',
        icon:'Icon',
        add:'Add',
        types:{
            0:'At-Will',
            1:'Encounter',
            2:'Daily'
        }
    },

}

const fieldStyle = {
    mb:1
}



export const App = () => {
    const [language, setLanguage] = useState(fieldLabel.spanish);
    const [languageNumber, setLanguageNumber] = useState(0);
    const [typeSelected, setTypeSelected] = useState(null)

    const fileInputRef = useRef();

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            console.log(text)
        };
        reader.readAsText(e.target.files[0])
    }

    const onChangeLanguage = (event) =>{
        const newValue = event.target.value;
        console.log(event)
        setLanguageNumber(newValue)

        switch (newValue) {
            case 0:
                console.log('entro 0')
                setLanguage(fieldLabel.spanish);
                break;
            case 1:
                console.log('entro 1')
                setLanguage(fieldLabel.english);
                break;
        }
    }

    return (
        <>
            {/*<Typography variant={'h1'}> TEST TEXT FILE</Typography>*/}

            <Grid container sx={{ml:10, mr:20, mt:10}} >
                <Grid container item sm={4} justifyContent={'center'}>

                    <Grid item sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="language-label">{language.language}</InputLabel>
                        <Select
                            sx={fieldStyle}
                            labelId="language-label"
                            value={languageNumber}
                            onChange={onChangeLanguage}
                        >
                            <MenuItem value={0} default>Español</MenuItem>
                            <MenuItem value={1}>English</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>

                    <Grid item sm={6}>
                        <TextField fullWidth type={"text"} sx={fieldStyle} label={language.name}></TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField fullWidth type={"text"} sx={fieldStyle} label={language.level}></TextField>
                    </Grid>
                    <Grid item sm={12}>
                        <FormControl fullWidth>
                            <InputLabel id={'type-label'}>{language.type}</InputLabel>
                            <Select
                                labelId={'type-label'}
                                sx={fieldStyle}
                                valu={typeSelected}
                                onChange={setTypeSelected}
                            >
                                <MenuItem value={0}>{language.types[0]}</MenuItem>
                                <MenuItem value={1}>{language.types[1]}</MenuItem>
                                <MenuItem value={2}>{language.types[2]}</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                        <Grid item sm={12}>
                            <TextField fullWidth type={"text"} sx={fieldStyle} label={language.keywords}></TextField>
                        </Grid>
                    <Grid item sm={12}>
                        <TextField fullWidth multiline sx={fieldStyle} type={"text"} label={language.description}></TextField>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField fullWidth multiline sx={fieldStyle} type={"text"} label={language.description}></TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <Button variant={'contained'} fullWidth>{language.add}</Button>
                    </Grid>
                </Grid>

                <Grid item sm={5}  sx={{height:200}}>

                </Grid>
            </Grid>


            {/*<Button variant={'contained'} componet={'label'} onClick={()=>fileInputRef.current.click()}>*/}
            {/*    {'Cargar'}*/}
            {/*    <Input inputRef={fileInputRef} type="file" sx={{display:'none'}} onChange={(e) => showFile(e)} />*/}
            {/*</Button>*/}
        </>
    );
};
