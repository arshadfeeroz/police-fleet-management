import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	appBar: {
		zIndex: 1,
	},
	menuButton: {
		marginRight: "10px",
	},
	title: {
		flexGrow: 1,
	},
});

class Header extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Fleet Management System
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(Header);
