import React from "react";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	tile: {
		boxShadow: "none",
		background: "#fff",
		display: "flex",
		flexDirection: "column",
	},
	small: {
		height: "200px",
	},
	medium: {
		height: "400px",
	},

	tileheader: {
		display: "flex",
		justifyContent: "space-between",
		padding: "20px",
		alignItems: "center",
		height: "10%",
	},
	title: {
		fontWeight: "bold",
	},
	link: {
		fontSize: "small",
	},
});

class Tile extends React.Component {
	onClickViewAllotments = (e) => {
		e.preventDefault();
		if (e.target.previousElementSibling.innerText === "ALLOTMENTS") {
			window.location.href = "/dashboard/vehicleAllotment";
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.tile} style={{ height: this.props.height }}>
				<div className={classes.tileheader}>
					<div className={classes.title}>{this.props.title}</div>
					<Link
						color="primary"
						href="#"
						onClick={this.onClickViewAllotments}
						className={classes.link}
					>
						View All
					</Link>
				</div>

				{this.props.body}
			</div>
		);
	}
}

export default withStyles(styles)(Tile);
