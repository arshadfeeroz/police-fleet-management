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

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment = (e) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
	render() {
		const { classes } = this.props;
    const { counter } = this.state;
		return (
			<div className={classes.numberSection}>
				<div className={classes.number}>
          <div className={classes.numberDescription}>The Local Count is</div>
          <div className={classes.numberTitle}>
            {counter}
          </div>
          <button onClick={this.increment}>Increment Local Count</button>
        </div>
			</div>
		);
	}
}

export default withStyles(styles)(Counter);
