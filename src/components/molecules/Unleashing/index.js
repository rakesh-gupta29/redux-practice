import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    main: {
        height: 'fit-content',
        position: 'relative',
        justifyContent: 'center',
        marginBottom:'15%'
    },
    mainImage: {
        width: '100%',
    },
    btmTextBox: {
        position: 'absolute',
        bottom: '12%',
        width: '70%',
        left: '15%'
    },
    btmText: {
        font: 'normal normal Bolder 10vw Gopher-HeavyItalic',
        [theme.breakpoints.down('md')]: {
            fontSize: '12rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4rem'
        }
    },
    btmTextShade: {
        font: 'normal normal bolder 10vw Gopher-HeavyItalic',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '2%',
        left: '-10px',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '12rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8rem',
            left: '-5px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4rem'
        }
    }
}))

export function Unleashing({
    backgroundImage,
    style,
}) {

    const classes = useStyles()
    return (
        <Box className={classes.main} style={style}>
            <img className={classes.mainImage} src={backgroundImage} alt="Unleashing Studio" />
            <Box className={classes.btmTextBox}>
                <h1 className={classes.btmText}>Unleashing the real you</h1>
                <h1 className={classes.btmTextShade}>Unleashing the real you</h1>
            </Box>
        </Box>
    )
}
