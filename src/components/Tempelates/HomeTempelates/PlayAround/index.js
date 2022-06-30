import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    PlayAroundMain: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        marginBottom:"10%", 
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
        },
    },
    PlayAroundImg: {
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }
}))

export function PlayAround() {

    const classes = useStyles();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 50,
        });
    }, [])

    return (
        <div className={classes.PlayAroundMain} >
            <img src={'./images/Group 7144.png'} className={classes.PlayAroundImg} alt="So many features" data-aos="fade-left" />
        </div>
    )
}
