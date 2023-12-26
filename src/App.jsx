import {Button, Grid, Typography, InputLabel, MenuItem, Select, TextField, OutlinedInput, FormControl, Box, CssBaseline} from "@mui/material";
import {useRef, useState} from "react";
import {fieldLabel} from "./language.js";
import {useForm} from "./useForm.js";
import {PropertyList} from "./PropertyList.jsx";
import { Viewer } from "./Viewer.jsx";


const fieldStyle = {
	mb:1
}


const initData = {
	name:'',
	level:'',
	type:'0',
	keywords:'',
	description:'',
	properties:[{text:'', gradient: false}],
	action:'0',
	range: '',
	icon1:'',
	icon2:''
}


export const App = () => {
	const [language, setLanguage] = useState(fieldLabel.spanish);
	const [languageNumber, setLanguageNumber] = useState(0);
	const [barColor, setBarColor] = useState('atWill.main');
	const {name, level, type, keywords, description, properties, action, range, icon1, icon2, onInputChange, formState} = useForm(initData);

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

	const onAddProperty = async () =>{
		const newValue = [...properties, {text:'', gradient:false}];
		await onInputChange({target:{value:newValue, name:'properties'}})
	}
	const onChangeLanguage = (event) =>{
		const newValue = event.target.value;
		setLanguageNumber(newValue)

		switch (newValue) {
			case 0:
				setLanguage(fieldLabel.spanish);
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
				break
			case 1: // red
				setBarColor("encounter.main");
				break
			case 2: // grey
				setBarColor("daily.main");
				break
			default:
				setBarColor('white');
		}
	}


	return (
		<>

			{/*<Button variant={'contained'} componet={'label'} onClick={()=>fileInputRef.current.click()}>*/}
			{/*    {'Cargar'}*/}
			{/*    <Input inputRef={fileInputRef} type="file" sx={{display:'none'}} onChange={(e) => showFile(e)} />*/}
			{/*</Button>*/}
			<CssBaseline/>

			<Grid container
					alignItems="center"
					sx={{
						justifyContent:{xs:'center', sm:'center', md:'left'}
				}}
			>
				<Grid item xs={8} sm={8} md={4}>
					<Box
						// Todo: make this nicer with good dimensions, also the image is with white background
						component="img"
						sx={{
							width: {xs:'100%',sm:'100%', md:'100%'},
						}}
						alt="DnD 4e logo"
						src="dnd_4e_logo.jpg"
						ml={{xs: 1, sm: 3, md:10}}
					/>
				</Grid>
				<CssBaseline/>
				<Grid item sm={6} md={6}>
						<Typography ml={{xs: 2, sm: 3, md:10, lg:12}} sx={{fontSize:{xs:'40px',sm:'50px',md:'60px',lg:'90px'}}} variant='h1'>Simple card generator</Typography>
				</Grid>

				<FormControl>
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

			<Grid container sx={{mt:10}} justifyContent={'center'}>
				<Grid container item xs={12} sm={10} md={5} justifyContent={'center'}>

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

					<Grid item>
						<Grid item xs={2}></Grid>
						<Grid item xs={4} sm={4} md={4}>
							<FormControl>
								<InputLabel id="testing">{language.icon}</InputLabel>
								<Select
									sx={fieldStyle}
									labelId="testing"
									value={icon1}
									onChange={onChangeLanguage}
									input={<OutlinedInput label={language.icon} />}
									>
								<MenuItem value={0} default>Español</MenuItem>
								<MenuItem value={1}>English</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<FormControl>
								<InputLabel id="test">{language.icon}</InputLabel>
								<Select
									sx={fieldStyle}
									labelId="test"
									value={icon2}
									onChange={onChangeLanguage}
									input={<OutlinedInput label={language.icon} />}
									>
								<MenuItem value={0} default>Español</MenuItem>
								<MenuItem value={1}>English</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={2}></Grid>
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<FormControl fullWidth>
							<InputLabel id={'type-label'}>{language.type}</InputLabel>
							<Select
								defaultValue={0}
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
								defaultValue={0}
								labelId={'action-label'}
								sx={fieldStyle}
								value={action}
								name={'action'}
								onChange={onInputChange}
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
						<PropertyList properties={properties} label={language.property} language={language} onChange={onInputChange}/>
					</Grid>
					<Grid item sm={6} mb={{xs:5,sm:5, md: 0}}>
						<Button variant={'contained'} fullWidth onClick={onAddProperty}>{language.add}</Button>
					</Grid>

				</Grid>
				<Grid  item xs={12} sm={10} md={5} sx={{ ml:{sm:0,md:4} }}>
					<Viewer
						barColor={barColor}
						formState={formState}
						language={language}
					/>
				</Grid>
			</Grid>
		</>
	);
};
