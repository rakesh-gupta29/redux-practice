import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    ImgBox: {
        width: '100%',
        height: '180vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: '120vh',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            height: "fit-content",
        },
        [theme.breakpoints.down('xs')]: {
            height: 'fit-content',
            display: 'flex',
            flex: 'wrap'
        },
    },
    imageLeft: {
        width: "35%",
        position: "absolute",
        top: '20%',
        left: '-10%',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(.8)',
        },
        [theme.breakpoints.down('md')]: {
            width: '35%'
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "45%",
            top: "5%",
            zIndex: '1',
            left: '-5%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '110%'
        },
    },
    imageUp: {
        width: "32%",
        maxHeight: '30%',
        position: "absolute",
        top: '3%',
        left: '35%',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(.8)',
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "55%",
            left: '0%',
            zIndex: '0',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    imageDown: {
        width: "28%",
        maxHeight: '35%',
        position: "absolute",
        bottom: '8%',
        left: '30%',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(.8)',
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "55%",
            left: '0%',
            zIndex: '0',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    imageRight: {
        width: '35%',
        position: "absolute",
        bottom: '15%',
        right: '-13%',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(.8)',
        },
        [theme.breakpoints.down('md')]: {
            width: '35%',
            bottom: '15%',
            right: '-12%',
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "45%",
            bottom: "10%",
            right: '-5%',
            zIndex: '1',
        },
        [theme.breakpoints.down('xs')]: {
            width: '110%',
            right: '0%',
        },
    },
    txtCenter: {
        width: "80%",
        float: 'right',
        font: "normal normal bolder 15rem Gopher-HeavyItalic",
        lineHeight: '0.9',
        opacity: "0.33",
        [theme.breakpoints.down('md')]: {
            fontSize: "13rem",
            top: '0%',
            lineHeight: '0.9',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10rem",
            lineHeight: '0.9',
            marginBottom: '2rem',
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize: "10rem",
            margin: '15% 0 0 5% ',
            lineHeight: '0.9',
        },
    },
    txtCenterSM: {
        display: 'none',
        [theme.breakpoints.down('lg')]: {
            display: 'none'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            font: "normal normal normal 10vw Gopher-HeavyItalic",
            lineHeight: '0.9',
            margin: '10%',
            opacity: '0.33'
        }
    },
    images: {
        width: '100%',
        maxHeight: '100%'
    }

}))

export function Static4Images() {

    const classes = useStyles();

    return (
        <Box className={classes.ImgBox}>

            <Box className={classes.imgInbox}>
                <h1 className={classes.txtCenter}>BOLD FEARLESS</h1>

                <Box className={classes.imageLeft} >
                    <img className={classes.images}
                        src="/images/Mask Group 34.png" alt="ImageLeft" />
                </Box>

                <Box className={classes.imageUp}>
                    <img className={classes.images}
                        src="/images/female-urban-runner-training-in-the-city-center-SSX2HWT.png"
                        alt="ImageTop"
                    />
                </Box>

                <h1 className={classes.txtCenterSM}>BOLD FEARLESS</h1>

                <Box className={classes.imageDown}>
                    <img className={classes.images}
                        src="/images/Mask Group 356.png"
                        alt="ImageDown"
                    />
                </Box>


                <Box className={classes.imageRight}>
                    <img className={classes.images}
                        src="/images/close-up-of-woman-with-smartwatch-and-towel-in-gym-P5W5FU9.png"
                        alt="ImageRight"
                    />
                </Box>




            </Box>
        </Box>
    )
}
