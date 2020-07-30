import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 2px",
		display: "flex",
		alignItems: "center",
		width: "40%",
		borderRadius: "30px",
		margin: "0 5px 0 5px",
		height: "30px",
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		fontSize: "12px",
	},
	iconButton: {
		padding: 10,
	},
}));

export default function CustomizedInputBase() {
	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Search for vehicles, drivers, service requests and more.."
				inputProps={{ "aria-label": "search google maps" }}
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
