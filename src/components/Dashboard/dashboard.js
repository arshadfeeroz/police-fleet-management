import React from "react";
import Allotments from "./Allotments";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	title: {
		fontSize: "20px",
		fontWeight: "bold",
		marginRight: "80px",
		height: "42px",
	},
});

class Dashboard extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.title}>DASHBOARD</div>
				<Allotments />
			</div>
		);
	}
}

export default withStyles(styles)(Dashboard);
