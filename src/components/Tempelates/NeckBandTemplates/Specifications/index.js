import React from 'react'
import {
    makeStyles,
    Grid,
    Box
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10% 0rem'
    },
    main: {
        width: '70%',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0 auto'
        }
    },
    watchBox1: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: '4rem 0rem',
    },
    watchInsideBox: {
        position: 'relative',
        width: '100%',
    },

    watch1: {
        width: '100%',
        position: 'relative',
        top: '-100%',
    },
    watch1BG: {
        width: '80%',
        height: '80%',
        zIndex: '1',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto'
        }
    },
    head: {
        font: 'normal normal bold 4rem Gopher',
        color: '#CFFE00',
        lineHeight: '1.5',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
    subHead: {
        font: 'normal normal normal 2rem Ben',
        lineHeight: '1.5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
    },
    contentBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0%',
        },
    },
    contentInBox: {
        width: '50%',
        margin: '10%',
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },

    }
}));

export function Specifications() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.main}>
                <Grid item xs={12} container direction="row" >

                    <Grid item xs={12} sm={6} >
                        <Grid className={classes.watchBox1} item xs={12} sm={12} >
                            <Box className={classes.watchInsideBox}>
                                <Box className={classes.watch1BG}></Box>
                                <img className={classes.watch1} src={'./images/neckband/546x546.png'} alt="NeckBand" />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid className={classes.contentBox} item xs={12} sm={6} >

                        <Grid className={classes.contentInBox} item xs={12}>
                            <h1 className={classes.head} >Engage Rebelliously </h1>
                            <h1 className={classes.subHead}>Enjoy 15 to 16 hours of non-stop playtime and up to 14 hours of talk time</h1>
                        </Grid>


                        <Grid className={classes.contentInBox} style={{ opacity: '0.3' }} item xs={12}>
                            <h1 className={classes.head} style={{ color: '#FF4E00' }}>Recharge at the Speed of Light</h1>
                            <h1 className={classes.subHead}>Plug-in for 10 minutes to last 6 hours in a go</h1>
                        </Grid>
                        <Grid className={classes.contentInBox} style={{ opacity: '0.3' }} item xs={12}>
                            <h1 className={classes.head}>Dual Pairing</h1>
                            <h1 className={classes.subHead}>Enjoy high-end functionalities with easy dual pairing capability</h1>
                        </Grid>

                        <Grid className={classes.contentInBox} style={{ opacity: '0.3' }} item xs={12}>
                        <h1 className={classes.head} style={{ color: '#FF4E00' }}>Command On-The-go</h1>
                        <h1 className={classes.subHead}>Move fast and groove faster with a range of functionalities on your fingertips</h1>
                    </Grid>

                    <Grid className={classes.contentInBox} style={{ opacity: '0.3' }} item xs={12}>
                        <h1 className={classes.head}>B.Rugged. B.Raw</h1>
                        <h1 className={classes.subHead}>Explore IPX4 Waterproofing for an all-weather use

                        </h1>
                    </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}


