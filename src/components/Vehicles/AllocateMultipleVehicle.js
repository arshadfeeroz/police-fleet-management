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
    flexWrapper: {
        display : "flex"
    },
    uploadText: {
        textAlign: "center",
        padding: 40,
        color: "#263245",
        fontSize: 13
    },
    dragAndDropWrapper: {
        borderRadius : 4,
        border: "dashed 1px #dddedf",
        margin: "0 40px",
        padding: 20,
        textAlign : "center"
    }
}));

const handleSubmit = () => {

}

export default function AssignVehicle() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
            <div className={classes.header}>
                <span className={classes.headerText}>Allocate Multiple Vehicle</span>
                <Button className={classes.saveButton} variant="contained" color="primary">UPLOAD & SAVE</Button>     
            </div>
            <div className = { classes.formWrapper}>
                <div className={classes.uploadText}>Allocate multiple vehicles using CSV file.</div>
                <div className={classes.dragAndDropWrapper}>
                    <div>Drag and drop file here</div>
                    <div>Or <a> Browser File</a></div>
                </div>
            </div>
        </div>
	);
}
