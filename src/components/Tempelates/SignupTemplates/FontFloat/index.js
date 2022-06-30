import React from 'react'
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    position: {
        width: '10%',
        position: 'absolute',
        bottom: '0%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    textBox: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    watchHead: {
        font: 'normal normal bolder 5rem Gopher-black',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        zIndex: '1',
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '5rem',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4.5rem',
        }
    },

    watchHeadShade: {
        font: 'normal normal bolder 5rem Gopher-black',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '3%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: '#5d5d5d',
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '5rem',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4.5rem',
        }
    },
}))

export const FontFloat = () => {
    const classes = useStyles()
    return (
        <Box className={classes.position}>
            <Box className={classes.textBox}>
                <h1 className={classes.watchHead}>Professional Audio and team debugging sound</h1>
                <span className={classes.watchHeadShade} >Professional Audio and team debugging sound</span>
            </Box>
        </Box>
    )
}
