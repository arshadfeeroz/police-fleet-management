import React from 'react';
import { withStyles } from '@material-ui/styles'

const styles = (theme) => ({});

class Expenses extends React.Component {
    render() {
        const { classes } = this.props;

        return <div>Expenses...</div>;
    }
}

export default withStyles(styles)(Expenses);
