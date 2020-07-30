import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { reportingLine } from './TestData';
import ReportingCard from './ReportingCard';
import Timeline from '@material-ui/lab/Timeline';


export default function ReportingHierarchyComponent({ hierarchy }) {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <Timeline align="alternate">
            {
                    hierarchy && Object.keys(hierarchy).map((label) => {
                        return label != -1 ? <ReportingCard
                            data={hierarchy[label]}
                            length={Object.keys(hierarchy).length}
                            label={label}
                        />
                            : null
                    })
                }
            </Timeline>
            </Container>
        </React.Fragment>
    );
}