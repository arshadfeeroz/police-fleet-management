import React from "react";
import Drawer from "@material-ui/core/Drawer";
import PrimaryNav from "./PrimaryNav";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		zIndex: 0,
	},
});

class Navigation extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Drawer
					variant="persistent"
					anchor="left"
					open={true}
					className={classes.drawerPaper}
				></Drawer>
				<PrimaryNav />
			</div>
		);
	}
}

export default withStyles(styles)(Navigation);
