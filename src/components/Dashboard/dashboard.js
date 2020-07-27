import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({});

class Dashboard extends React.Component {
	render() {
		const { classes } = this.props;

		return <div>Dashboard...</div>;
	}
}

export default withStyles(styles)(Dashboard);
