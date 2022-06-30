import React from 'react'
import {
    makeStyles,
    Box,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    BoxGrid: {
        display: 'flex',
        alignItems: 'center',
        height: 'fit-content',
        position: 'relative',
        marginBottom: '20%',
    },
    imgBG: {
        width: '33%'
    },
    imgSM: {
        width: '30%',
    },
    text11: {
        font: 'italic normal bolder 9.5vw Gopher-black',
        width: '60%',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'absolute',
        top: '30%',
        left: "38%",
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('sm')]: {
        }
    },
    nxtBtn: {
        width: '10%',
        position: 'absolute',
        top: '-1%',
        right: '10%',
    }
}))

export function ImatagramCarousel() {
    const classes = useStyles();

    return (
        <Box className={classes.BoxGrid}>

            <h1 className={classes.text11}>INSTAGRAM</h1>
            <img className={classes.nxtBtn} src="/images/Group 6224.svg" alt="button" />
            <Grid style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', zIndex: '0', }} >
                <img className={classes.imgBG} src={'./images/mask_group_27.png'}
                />
                <Grid style={{ width: '60%', height: 'fit-content', display: 'flex', justifyContent: 'space-between' }} >

                    <img className={classes.imgSM} src={'./images/Mask Group 28.png'}
                    />
                    <img className={classes.imgSM} src={'./images/Mask Group 29.png'}
                    />
                    <img className={classes.imgSM} src={'./images/Mask Group 30.png'}
                    />
                </Grid>
            </Grid>
        </Box>


    )
}
