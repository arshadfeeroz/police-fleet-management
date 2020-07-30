import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ReportingHierarchy from './ReportingHierarchy';

const useStyles = makeStyles((theme) => ({    
    mainContainer: {
        width: "300px",
      },
}));
export default function ReportingLineComponent(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" >
                <Paper>
                    <Typography varient="h3" style={{ padding: '20px' }}>Reporting Line</Typography>
                    <Divider />
                    <ReportingHierarchy hierarchy={props.hierarchy} />
                </Paper>
            </Container>
        </React.Fragment>
    );
}