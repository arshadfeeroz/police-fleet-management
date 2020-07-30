import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { Container } from "@material-ui/core";
import VehicleList from "./vehicleList";
import VehicleAllotment from "./vehicleAllotment";
import VehicleAssignment from "./vehicleAssignment";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		height: "100vh",
		overflow: "auto",
		width: "100%",
		backgroundColor: 'rgba(0, 0, 0, 0.04)'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		height: "100%"
	},
}));

const App = () => {
	const [open, setOpen] = React.useState(true);

	const classes = useStyles();

	const handleDrawerToggle = () => {
		if (open) {
			setOpen(false);
			return;
		}
		setOpen(true);
	};

	return (
    <Link to={'/VehicleList'}>
      <ListItem button>
        <ListItemText primary='new' />
      </ListItem>
    </Link>
	);
};

export default App;
