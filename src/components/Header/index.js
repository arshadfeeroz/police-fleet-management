import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchInput from "../CommonComponents/SearchInput/SearchInput";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		// background: "#3C3D41",
	},
	menuButton: {
		marginRight: 36,
	},
	title: {
		flexGrow: 1,
	},
	button: {
		background: "transparent",
		color: "#fff",
		boxShadow: "none",
	},
}));

export default function Header({ open, handleDrawerOpen }) {
	const classes = useStyles();
	return (
		<AppBar position="absolute" className={clsx(classes.appBar)} title="img">
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					className={clsx(classes.menuButton)}
				>
					<MenuIcon />
				</IconButton>

				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					className={classes.title}
				>
					FMS
				</Typography>
				<SearchInput />
				<IconButton color="inherit">
					<Badge color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<Button
					variant="contained"
					className={classes.button}
					startIcon={<AccountCircleIcon />}
					endIcon={<ExpandMoreIcon />}
				>
					ADGP
				</Button>
			</Toolbar>
		</AppBar>
	);
}
