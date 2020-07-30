import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
        backgroundColor: "#f1f5f7",
        width: "600px",
        padding : "10px 0",
        height : "100%"
	},
	header: {
        backgroundColor: "#ffffff",
        height: "38px",
        padding : 23
	},
	headerText: {
        fontSize : 20,
        fontWeight : 600,
        color : "#263245",
    },
    saveButton: {
        position: "absolute",
        right: 24,
        width : 150

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width : "100%",
        margin: "8px 0"
    },
    formWrapper: {
        padding : "10px 60px",
        backgroundColor : "#fff",
        marginTop : 20
    },
    flexWrapper: {
        display : "flex"
    }
}));

const handleSubmit = () => {

}

export default function AssignVehicle() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
            <div className={classes.header}>
                <span className={classes.headerText}>Assign Vehicle</span>
                <Button className={classes.saveButton} variant="contained" color="primary">SAVE</Button>     
            </div>
            <div>
            <form className = {classes.formWrapper} >
            <InputLabel> Vehicle*</InputLabel>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                //value={state.age}
                //onChange={handleChange}
                label="Age"
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>KA 01 AB 1234</option>
                <option value={20}>KA 01 AB 2345</option>
                <option value={30}>KA 01 AB 3456</option>
                </Select>
            </FormControl>
            <InputLabel> Assign To*</InputLabel>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                //value={state.age}
                //onChange={handleChange}
                label="Age"
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Veer S</option>
                <option value={20}>Sumant V</option>
                <option value={30}>Kailash K</option>
                </Select>
            </FormControl>
            <InputLabel> Select Assignment Type</InputLabel>
            <FormControl variant="outlined" className={classes.formControl}>
                
                <Select
                //value={state.age}
                //onChange={handleChange}
                label="Age"
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Permanent</option>
                <option value={20}>Temporary</option>
                </Select>
            </FormControl>
            {/* <FormControl variant="outlined" className={classes.formControl}>
                <TextField id="outlined-basic" label="Start Location" variant="outlined" />
            </FormControl>
            <div className={ classes.flexWrapper}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <TextField id="outlined-basic" label="Start Date" variant="outlined" />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <TextField id="outlined-basic" label="Start Odometer" variant="outlined" />
                </FormControl>
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
                <TextField id="outlined-basic" label="End Location" variant="outlined" />
            </FormControl>
            <div className={ classes.flexWrapper}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <TextField id="outlined-basic" label="End Date" variant="outlined" />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <TextField id="outlined-basic" label="End Odometer" variant="outlined" />
                </FormControl>
            </div> */}
            <InputLabel> Comments </InputLabel>
            <FormControl variant="outlined" className={classes.formControl}>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Add Your Comments Here" />
            </FormControl>
            </form>
            </div>
        </div>
	);
}
