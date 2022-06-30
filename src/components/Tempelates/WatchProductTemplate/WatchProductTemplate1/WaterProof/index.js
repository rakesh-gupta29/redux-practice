import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    waterMain: {
        height: 'fit-content',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        verticalAlign: 'center',
        margin: '20% auto'
    },
    waterImage: {
        width: '100%',
    },
    waterTxtBox: {
        width: '100%',
        position: 'relative',
        bottom:'-15%',
        display:'flex',
        justifyContent:'center'
    },
    waterTxt: {
        font: 'normal normal bolder 18rem Gopher-Italic',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingRight: '2%',
        position: 'absolute',
        bottom: '0%',
        lineHeight: '1',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 15rem Gopher-Italic',
            lineHeight: '1',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 10rem Gopher-Italic',
            lineHeight: '1',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 5rem Gopher-Italic',
            lineHeight: '1',

        }
    },
    waterTxtShade: {
        font: 'normal normal bolder 18rem Gopher-Italic',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        bottom: '0%',
        lineHeight: '1',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: '#5d5d5d',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 15rem Gopher-Italic',
            lineHeight: '1',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 10rem Gopher-Italic',
            lineHeight: '1',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 5rem Gopher-Italic',
            lineHeight: '1',
        }
    }

}))

export function WaterProof() {
    const classes = useStyles()
    return (
        <Box className={classes.waterMain}>
            <Box>
                <img className={classes.waterImage} src='/images/Mask Group 15.png' alt='waterproof ' />
                <Box className={classes.waterTxtBox}>
                    <h1 className={classes.waterTxt}>3ATM / IP68<br /> <span>Waterproof</span> </h1>
                    <h1 className={classes.waterTxtShade}>3ATM / IP68 <br /> <span>Waterproof</span> </h1>
                </Box>
            </Box>
        </Box>
    )
}
