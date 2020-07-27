import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import PrimaryNav from "./PrimaryNav";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		zIndex: 0,
		width: "240px",
	},
	navList: {
		marginTop: "4em",
		width: "240px",
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
				>
					<List className={classes.navList}>
						<PrimaryNav />
					</List>
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(Navigation);
