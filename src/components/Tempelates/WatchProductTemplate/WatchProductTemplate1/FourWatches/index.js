import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import 'aos/dist/aos.css'
import AOS from 'aos';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: '10% 0rem'
    },
    main: {
        width: '70%',
        justifyContent: 'space-around',
    },
    watchBox1: {
        display: 'flex',
        justifyContent: 'center',
        margin: '4rem 0rem'
    },
    watchBox2: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '15% 0%',
    },
    watch1: {
        width: '30%',
        cursor:'pointer',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(1.2)',
        },
    },
    head: {
        font: 'normal normal normal 3.5rem Gopher-Medium',
        color: '#CFFE00',
        lineHeight: '1.2',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
    subHead: {
        font: 'normal normal normal 2rem Ben',
        lineHeight: '1.4',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
    },
    contentBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentInBox: {
        width: '60%',
        margin: '5%',
        padding: '5% 0%',
        [theme.breakpoints.down('md')]: {
            width: '70%',

            textAlign: 'left'
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%',
            textAlign: 'center',
            padding: '0%',
            margin: '5%',
        },

    }
}));

export function FourWatches() {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <div className={classes.root}>
            <Grid className={classes.main}>
                <Grid item xs={12} container direction="row">

                    <Grid item xs={12} sm={6} >
                        <Grid className={classes.watchBox1} item xs={12} sm={12}>

                            <img className={classes.watch1} src='/images/black_png.png' alt="First Watch" data-aos="fade-down" />

                        </Grid>

                        <Grid className={classes.watchBox2} item xs={12} sm={12}>

                            <img xs={3} sm={3} className={classes.watch1} src='/images/blue_png.png' alt="Second Watch" data-aos="fade-right" />


                            <img xs={3} sm={3} className={classes.watch1} src='/images/pink_png.png' alt="Third Watch" data-aos="fade-left" />

                        </Grid>

                        <Grid className={classes.watchBox1} item xs={12} sm={12}>

                            <img className={classes.watch1} src='/images/green_png.png' alt="Fourth Watch" data-aos="fade-up" />

                        </Grid>
                    </Grid>

                    <Grid className={classes.contentBox} item xs={12} sm={6} >

                        <Grid className={classes.contentInBox} item xs={12}>

                            <h1 className={classes.head} data-aos="zoom-in-down">Unleash the fitness freak in you!</h1>
                            <br />
                            <br />
                            <br />
                            <h1 className={classes.subHead} data-aos="zoom-in-up">11 different Sports Mode for every Workout Mood</h1>


                        </Grid>

                        <Grid className={classes.contentInBox} item xs={12}>

                            <h1 data-aos="zoom-in-down" className={classes.head} style={{ color: '#FF4E00' }}>Access to your daily drills</h1>
                            <br />
                            <br />
                            <br />
                            <h1 data-aos="zoom-in-up" className={classes.subHead}>Track Daily Steps and Calories ON-THE-GO</h1>

                        </Grid>
                        <Grid className={classes.contentInBox} item xs={12}>

                            <h1 data-aos="zoom-in-down" className={classes.head}>Health goals were never so close</h1>
                            <br />
                            <br />
                            <br />
                            <h1 data-aos="zoom-in-up" className={classes.subHead}>Now monitoring vitals or sleep patterns is just a strap away</h1>

                        </Grid>
                        <Grid className={classes.contentInBox} item xs={12}>

                            <h1 data-aos="zoom-in-down" className={classes.head} style={{ color: '#FF4E00' }}>B.Brave. B.You.</h1>
                            <br />
                            <br />
                            <br />
                            <h1 data-aos="zoom-in-up" className={classes.subHead}>Personalize your Watch Face as you like!</h1>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}


