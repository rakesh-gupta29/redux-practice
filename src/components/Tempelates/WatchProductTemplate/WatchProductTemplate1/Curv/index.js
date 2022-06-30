import React, { useEffect } from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import 'aos/dist/aos.css'
import AOS from 'aos';


const useStyles = makeStyles((theme) => ({
    Curved: {
        width: '100%',
        position: 'relative'
    },
    curvImages: {
        width: '100%',
    },
    txtGradient: {
        font: 'normal normal normal 8rem Gopher-Medium',
        padding: '.8rem 0rem',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.5rem',
        }
    },
    lineHeight: {
        position: 'absolute',
        top: '10%',
        left: '10%'
    },
    lorem: {
        font: 'normal normal normal 3rem Ben',
        textAlign: 'left',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            lineHeight: '1',
        },
    },
    loremBox: {
        width: "40%",
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginTop: '0%',
            float: 'left',
            display: 'none'
        }
    },


}))


export function Curved() {
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
        <Box className={classes.Curved}>
            <Box className={classes.lineHeight}>
                <h1 className={classes.txtGradient} data-aos="fade-up">
                    Designed to 
                    <br />
                    thrill!
                </h1>
                <Box className={classes.loremBox}>
                    <h1 className={classes.lorem} data-aos="fade-down">
                        Experience outstanding design with 1.69 Inch TFT Display and Capacitive Full-Screen Feather Touch. </h1>
                </Box>
            </Box>
            <img className={classes.curvImages} src={'./images/EN_12@2x.png'} alt='curv' data-aos="fade-up" />
        </Box>
    )
}
