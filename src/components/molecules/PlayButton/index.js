import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import {
    Player,
    BigPlayButton,
    ControlBar
} from 'video-react';
import 'video-react/dist/video-react.css';

const useStyles = makeStyles((theme) => ({
    bgImg: {
        width: '100%',
        position: 'relative',
        height: '100vh',
        // border:'2px solid red'
    },
    PlayButton: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: "25rem",
        [theme.breakpoints.down('md')]: {
            width: '10rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '8rem',
        }
    }
}))

export function PlayButton({
    Video
}) {
    const classes = useStyles();

    return (
        <Box className={classes.bgImg}>

            <Player  >
                <BigPlayButton position="center" />
                <ControlBar autoHide={false} />
                <source src="https://firebasestorage.googleapis.com/v0/b/brebeltesting.appspot.com/o/Video%2FHome.mp4?alt=media&token=c7c8e2e0-70a6-45f9-a831-cd1e70bc2e9f" />
            </Player>

        </Box>
    )
}
