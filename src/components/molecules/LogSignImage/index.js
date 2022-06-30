import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Header: {
        width: '80%',
        margin: '0 auto',
        marginBottom: '5%',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },

    Image: {
        width: '60%',
        borderRadius: '3%'
    }
}))

export function LogSignImage() {
    const classes = useStyles()
    return (

        <Container className={classes.Header}>
            <img className={classes.Image} src={'./images/young-pretty-woman.png'} />
        </Container>

    )
}