import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Header: {
        width: '80%',
        margin: '5% auto',
    },
    Head: {
        color:'#FFFFFF',
        font: 'normal normal bold 2.5rem Ben',
        lineHeight: '1.5',
        letterSpacing: 5,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            letterSpacing: 1,
        }
    }
}))

export function HeadLogin() {
    const classes = useStyles()
    return (

        <Container className={classes.Header}>
            <h1 className={classes.Head}>Get access to your Orders, <br />Wishlist and Recommendations</h1>
        </Container>

    )
}