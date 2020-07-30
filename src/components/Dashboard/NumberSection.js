import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	numberSection: {
		display: "flex",
		flexDirection: "row",
		padding: "5px",
		alignItems: "center",
		height: "90%",
		justifyContent: "space-around",
	},
	number: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	numberTitle: {
		fontSize: "30px",
		color: "#5f5e5e",
	},
	numberDescription: {
		color: "#676262",
	},
});

class NumberSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.numberSection}>
				{this.props.data.map((item) => {
					return (
						<div className={classes.number}>
							<div className={classes.numberTitle}>{item.number}</div>
							<div className={classes.numberDescription}>
								{item.description}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default withStyles(styles)(NumberSection);
