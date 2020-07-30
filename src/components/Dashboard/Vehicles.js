import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	numberSection: {
		display: "flex",
		flexDirection: "column",
		padding: "25px",
		alignItems: "left",
		height: "90%",
		justifyContent: "left",
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
		marginBottom: "20px",
	},

	vehicleTag: {
		color: "#676262",
		border: "1px solid #5f5e5e",
		display: "inline",
		fontSize: "12px",
		borderRadius: "25px",
		padding: "5px 15px",
		background: "#e2e2e2",
		width: "110px",
		margin: "5px 10px 5px 0",
	},
	vehiclesSection: {
		display: "flex",
		flexWrap: "wrap",
	},
});

class Vehicles extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.numberSection}>
				<div className={classes.numberTitle}>{this.props.data.total}</div>
				<div className={classes.vehiclesSection}>
					{this.props.data.vehicles.map((item) => {
						return (
							<div className={classes.vehicleTag}>
								{item.name} - {item.count}
							</div>
						);
					})}
				</div>

				{/* {this.props.data.map((item) => {
					return (
						<div className={classes.number}>
							<div className={classes.numberTitle}>{item.number}</div>
							<div className={classes.numberDescription}>
								{item.description}
							</div>
						</div>
					);
				})} */}
			</div>
		);
	}
}

export default withStyles(styles)(Vehicles);
