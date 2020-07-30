import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    title: {
        fontSize: 14,
        paddingTop: 5
    },
    body: {
        fontSize: 12,
        paddingBottom: 5
    },
    connectorheight: {
        height: 50
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    card: {
        padding: '6px 16px',
        backgroundColor: "skyblue",
    }
}));

export default function ReportingCardComponent(props) {
    const classes = useStyles();
    let label = props.label;
    let length = props.length;
    
    return (
        <TimelineItem >
            <TimelineSeparator>
                <TimelineDot>
                    <Avatar className={classes.white}>{props.data.initials}</Avatar>
                </TimelineDot>
                {(label < length - 1) ? <TimelineConnector className={classes.connectorheight} /> : null}
            </TimelineSeparator>
            <TimelineContent >
                <Paper elevation={3} className={ label == length - 1  ? classes.card : classes.paper }>
                    <Typography variant="h7" component="h2" className={classes.title}>
                        {props.data.name}
                    </Typography>
                    <Typography variant="body2" component="h2"> {props.data.designation}</Typography>
                    <Typography color="textSecondary" className={classes.body}> {props.data.location}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}