import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	content: {
		overflow: "auto",
		marginBottom: "10px",
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
		marginRight: "80px",
		height: "42px",
	},
	navbar: {
		display: "flex",
		flexDirection: "row",
	},
	navItem: {
		cursor: "pointer",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginRight: "40px",
	},
	navtext: {
		padding: "6px 10px 6px 10px",
	},
	navtextSelected: {
		background: "#3C3D41",
		color: "#fff",
		padding: "6px 10px 6px 10px",
		borderRadius: "25px",
	},
	navArrowActive: {
		height: "10px",
		width: "10px",
		background: "#3C3D41",
		transform: "rotate(45deg)",
		position: "relative",
		top: "-5px",
	},
	navArrowDisable: {
		height: "10px",
		width: "10px",
		background: "transparent",
		transform: "rotate(45deg)",
		position: "relative",
		top: "-5px",
	},
});

class DashboardNavBar extends React.Component {
	constructor(props) {
		super(props);
		const selectedNavId = this.props.data[0].key;
		this.state = {
			selectedNavItem: selectedNavId,
		};
	}

	onSelectNavItem = (e) => {
		const selectedNavId = e.currentTarget.id || "";
		this.setState({
			selectedNavItem: selectedNavId,
		});
		this.props.onClick(selectedNavId);
	};

	render() {
		const { classes } = this.props;
		const getRequriedClass = {
			forNavItem: (value) =>
				this.state.selectedNavItem === value
					? classes.navtextSelected
					: classes.navtext,
			forArrow: (value) =>
				this.state.selectedNavItem === value
					? classes.navArrowActive
					: classes.navArrowDisable,
		};

		return (
			<div className={classes.content}>
				<div className={classes.navSection}>
					<div className={classes.navLeftSection}>
						<div className={classes.title}>DASHBOARD</div>
						<div className={classes.navbar}>
							{this.props.data.map((item) => {
								return (
									<div
										id={item.key}
										className={classes.navItem}
										onClick={this.onSelectNavItem}
									>
										<div className={`${getRequriedClass.forNavItem(item.key)}`}>
											{item.text}
										</div>
										<div
											className={`${getRequriedClass.forArrow(item.key)}`}
										></div>
									</div>
								);
							})}
						</div>
					</div>
					<div className={classes.navRightSection}></div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(DashboardNavBar);
