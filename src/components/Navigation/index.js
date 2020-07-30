import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import PrimaryNav from "./PrimaryNav";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: "0 8px",
		...theme.mixins.toolbar,
		// color: "#fff",
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		// background: "#676767",
		// color: "#fff",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: "hidden",
		// background: "#676767",
		// color: "#fff",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9),
		},
	},
}));

export default function Navigation({ open, handleDrawerClose }) {
	const classes = useStyles();

	return (
		<Drawer
			variant="persistent"
			anchor="left"
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={true}
		>
			<div className={classes.toolbarIcon}></div>
			<List>
				<PrimaryNav />
			</List>
		</Drawer>
	);
}
