import {Button, Grid, Typography, InputLabel, MenuItem, Select, TextField, OutlinedInput, FormControl, Box} from "@mui/material";
import {useRef, useState} from "react";
import {fieldLabel} from "./language.js";
import {useForm} from "./useForm.js";
import {PropertyList} from "./PropertyList.jsx";


const fieldStyle = {
	mb:1
}

const initData = {
	name:'',
	level:'',
	type:'0',
	keywords:'',
	description:'',
	properties:[''],
	action:'0',
	range: ''
}


export const App = () => {
	const [language, setLanguage] = useState(fieldLabel.spanish);
	const [languageNumber, setLanguageNumber] = useState(0);
	const [powerType, setPowerType] = useState(fieldLabel.spanish.types[0]);
	const [barColor, setBarColor] = useState('atWill.main');
	const [powerAction, setPowerAction] = useState(fieldLabel.spanish.actions[0]);
	const {name, level, type, keywords, description, properties, action, range, onInputChange} = useForm(initData);


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

	const onAddProperty = () =>{
		const newValue = [...properties, ''];
		onInputChange({target:{value:newValue, name:'properties'}})
	}
	const onChangeLanguage = (event) =>{
		const newValue = event.target.value;
		setLanguageNumber(newValue)

		switch (newValue) {
			case 0:
				setLanguage(fieldLabel.spanish);
				// Todo: when changing language chango also the power type to thta language
				break;
			case 1:
				setLanguage(fieldLabel.english);
				break;
		}
	}

	const typeChange = (event) => {
		onInputChange(event);
		const {value} = event.target;

		switch(value) {
			case 0: // green
				setBarColor("atWill.main");
				setPowerType(language.types[0])
				break
			case 1: // red
				setBarColor("encounter.main");
				setPowerType(language.types[1])
				break
			case 2: // grey
				setBarColor("daily.main");
				setPowerType(language.types[2])
				break
			default:
				setBarColor('white');
		}
	}

	const changeAction = (event) => {
		onInputChange(event)
		const {value} = event.target;

		setPowerAction(language.actions[value])
	}

	return (
		<>

			{/*<Button variant={'contained'} componet={'label'} onClick={()=>fileInputRef.current.click()}>*/}
			{/*    {'Cargar'}*/}
			{/*    <Input inputRef={fileInputRef} type="file" sx={{display:'none'}} onChange={(e) => showFile(e)} />*/}
			{/*</Button>*/}

			<Grid container
					alignItems="center"
					justifyContent="left"
			>
				<Grid item sm={12} md={6} >
					<Box
						// Todo: make this nicer with good dimensions, also the image is with white background
						component="img"
						sx={{
							width: {xs:'70%',sm:'70%', md:'100%'},
						}}
						alt="DnD 4e logo"
						src="dnd_4e_logo.jpg"
						ml={{xs: 0, sm: 0, md:10}}
					/>
				</Grid>
				<Grid item sm={12} md={6}>
					<Typography ml={{xs: 0, sm: 0, md:10}} sx={{fontWeight: 'bold', fontSize:{xs:'30px',sm:'30px',md:'36px'}}} variant='h2'>Simple card generator</Typography>
				</Grid>
				{/* Todo: make this with another font to be nicer */}
			</Grid>

			<Grid container sx={{mt:10}} justifyContent={'center'}>
				<Grid container item xs={12} sm={10} md={5} justifyContent={'center'}>

					<Grid item xs={12} sm={12}>
					<FormControl fullWidth>
						<InputLabel id="language-label">{language.language}</InputLabel>
						<Select
							sx={fieldStyle}
							labelId="language-label"
							value={languageNumber}
							onChange={onChangeLanguage}
							input={<OutlinedInput label={language.language} />}
						>
							<MenuItem value={0} default>Español</MenuItem>
							<MenuItem value={1}>English</MenuItem>
						</Select>
					</FormControl>
					</Grid>

					<Grid item xs={12} sm={12} md={6}>
						<TextField fullWidth
									value={name}
									name={'name'}
									onChange={onInputChange}
									type={"text"} sx={fieldStyle} label={language.name}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TextField fullWidth
									value={level}
									name={'level'}
									onChange={onInputChange}
									type={"text"} sx={fieldStyle} label={language.level}></TextField>
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<FormControl fullWidth>
							<InputLabel id={'type-label'}>{language.type}</InputLabel>
							<Select
								labelId={'type-label'}
								sx={fieldStyle}
								value={type}
								name={'type'}
								onChange={typeChange}
								input={<OutlinedInput label={language.type} />}
							>
								<MenuItem value={0}>{language.types[0]}</MenuItem>
								<MenuItem value={1}>{language.types[1]}</MenuItem>
								<MenuItem value={2}>{language.types[2]}</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} sm={12}>
						<TextField fullWidth
									value={keywords}
									name={'keywords'}
									onChange={onInputChange}
									type={"text"} sx={fieldStyle} label={language.keywords}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id={'action-label'}>{language.action}</InputLabel>
							<Select
								labelId={'action-label'}
								sx={fieldStyle}
								value={action}
								name={'action'}
								onChange={changeAction}
								input={<OutlinedInput label={language.action} />}
							>
								<MenuItem value={0}>{language.actions[0]}</MenuItem>
								<MenuItem value={1}>{language.actions[1]}</MenuItem>
								<MenuItem value={2}>{language.actions[2]}</MenuItem>
								<MenuItem value={3}>{language.actions[3]}</MenuItem>
								<MenuItem value={4}>{language.actions[4]}</MenuItem>
								<MenuItem value={5}>{language.actions[5]}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TextField fullWidth
									value={range}
									name={'range'}
									onChange={onInputChange}
									type={"text"} sx={fieldStyle} label={language.range}
						/>
					</Grid>

					<Grid item xs={12} sm={12}>
						<TextField fullWidth
									value={description}
									name={'description'}
									multiline sx={fieldStyle} type={"text"}
									onChange={onInputChange}
									label={language.description}
						/>
					</Grid>

					<Grid item xs={12} sm={12}>
						<PropertyList properties={properties} label={language.property} onChange={onInputChange}/>
					</Grid>
					<Grid item sm={6} mb={{xs:5,sm:5, md: 0}}>
						<Button variant={'contained'} fullWidth onClick={onAddProperty}>{language.add}</Button>
					</Grid>

				</Grid>

				{/* Viewer */}

				<Grid item xs={12} sm={10} md={5} sx={{border:1, ml:{sm:0,md:4}, mb:{xs:20,sm:20,md:0}, minHeight:{sm:'500px',md:0} }} >
					<Grid container sx={{height:'50px', backgroundColor:barColor, color:'white'}} justifyContent={'space-between'} alignItems={'center'}>
						<Grid item ml={2}>
							{'icono'}
						</Grid>
						<Typography sx={{fontWeight: 'bold'}}>{name}</Typography>
						<Grid item mr={2}>
							<Typography sx={{fontWeight: 'bold'}}>{level}</Typography>
						</Grid>
					</Grid>
					{/* Todo: change rhombus to other font */}
					<Grid container direction="column" justifyContent="space-between" alignItems="flex-start" height={'calc(100% - 50px)'}	>
						<Grid item >
								<Typography ml={1} sx={{fontWeight: 'bold'}}>{powerType} ♦ {keywords}</Typography>
								<Typography ml={1} sx={{fontWeight: 'bold'}} display={'inline'}>{powerAction}</Typography>
								<Typography ml={1} sx={{fontWeight: 'bold'}} display={'inline'}>{range}</Typography>
						</Grid>
						<Grid item >
							{description}
						</Grid>
					</Grid>

				</Grid>
			</Grid>

		</>
	);
};
