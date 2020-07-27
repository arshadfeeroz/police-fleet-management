import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	link: {
		textDecoration: "none",
		color: "initial",
	},
});

class NavItem extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Link className={classes.link} to={this.props.route}>
				<ListItem button>
					<ListItemIcon>
						<this.props.Icon />
					</ListItemIcon>
					<ListItemText primary={this.props.name} />
				</ListItem>
			</Link>
		);
	}
}

export default withStyles(styles)(NavItem);
