import React from 'react'
import { makeStyles,Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    proMain: {
        width: '100%',
        margin: '20% 0',
        display: 'flex',
        justifyContent: 'center',   
    },
    proInBox:{
        width:'80%'
    },
    proImg:{
        width:'100%'
    },
    proTextBox: {
        position: 'relative',
        height:'30vh',
        width: '100%',
        lineHeight:'1',
        [theme.breakpoints.down('sm')]: {
            height:'20vh',
        },
    },
    proText: {
        font: 'normal normal bolder 8vw Gopher-HeavyItalic',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'absolute',
        top:'-60%',
        left: '0%',
        zIndex: '1',
        padding:'2%',
        lineHeight:'1',
        [theme.breakpoints.down('md')]: {
            top:'-40%', 
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 3rem Gopher-HeavyItalic',
            top:'-22%', 
        },
    },
    proTextShade: {
        font: 'normal normal bolder 8vw Gopher-HeavyItalic',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top:'-54%',
        left:'0%',
        zIndex: '1',
        WebkitTextStrokeWidth: '.07rem',
        WebkitTextStrokeColor: 'grey',
        zIndex: '0',
        padding:'2%',
        lineHeight:'1',
        [theme.breakpoints.down('md')]: {
            top:'-34%', 
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 3rem Gopher-HeavyItalic',
            top:'-20%', 
        },

    },
}))

export function Professional() {
    const classes = useStyles()
    return (
        <Box className={classes.proMain}>
            <Box className={classes.proInBox}>
                <img className={classes.proImg} src={'./images/Mask Group 150.png'} alt="Professional Audio" />

                <Box className={classes.proTextBox}>
                    <h1 className={classes.proTextShade}>
                    Immersive Bass <br />for an Ultimate <br />Audio Experiences
                    </h1>
                    <h1 className={classes.proText}>
                    Immersive Bass <br />for an Ultimate <br />Audio Experiences</h1>
                </Box>
            </Box>
        </Box>
    )
}
