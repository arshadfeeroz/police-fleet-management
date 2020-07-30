import React from "react";
import { withStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import OrgChart from "../CommonComponents/OrgChart/OrgChart";
import data from "../CommonComponents/OrgChart/data/data";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = (theme) => ({
	content: {
		overflow: "auto",
		height: "100%",
	},
	navSection: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	navLeftSection: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "80%",
	},
	navRightSection: {
		width: "20%",
	},
	title: {
		fontSize: "20px",
		fontWeight: "bold",
	},
});

class VehicleAllotment extends React.Component {
	onPressBackButton = (e) => {
		window.location.href = "/";
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.content}>
				<div className={classes.navSection}>
					<div className={classes.navLeftSection}>
						<IconButton
							aria-label="back button"
							component="span"
							onClick={this.onPressBackButton}
						>
							<ArrowBackIcon style={{ color: "#000" }} />
						</IconButton>
						<div className={classes.title}>Vehicle Allocation</div>
					</div>
					<div className={classes.navRightSection}></div>
				</div>
				<OrgChart data={data.data} />
			</div>
		);
	}
}

export default withStyles(styles)(VehicleAllotment);
