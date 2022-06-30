import React from 'react'
import {
    Box,
    makeStyles,
    Typography
} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import Roll from 'react-reveal/Roll';



const useStyles = makeStyles((theme) => ({

    feedbackDiv: {
        width: '100%',
        height: '100vh',
        marginBottom: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: '80vh'
        },
        [theme.breakpoints.down('sm')]: {
            height: '60vh'
        }
    },
    CarouselDiv: {
        width: '60%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: '70vh'
        },
        [theme.breakpoints.down('sm')]: {
            height: '50vh'
        }
    },
    leftArr: {
        marginBottom: '20%',
        [theme.breakpoints.down('md')]: {
            width: '25%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '20%'
        }
    },
    rightArr: {
        marginBottom: '20%',
        [theme.breakpoints.down('md')]: {
            width: '25%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '20%'
        }

    },
    userBox: {
        width: '80%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    userImg: {
        width: '50%',
        position: 'absolute',
        right: '20%',
        top: '20%',
        [theme.breakpoints.down('md')]: {
            // width:'20%'
        }
    },
    userBG: {
        width: '100%',
        [theme.breakpoints.down('md')]: {

        }
    },
    userName: {
        color: '#CFFE00',
        font: 'normal normal normal 2.2vw Ben',
        padding: '3%',

    },
    userSub: {
        font: 'normal normal normal 1.5vw Ben',
        lineHeight: '2',
        textAlign: 'center'

    }
}))


export function Feedback() {
    const classes = useStyles()
    return (
        <Box className={classes.feedbackDiv}>
            <Carousel>

                <Box className={classes.CarouselDiv} >
                    <img className={classes.leftArr} src={'./images/Group 6230.svg'} alt="arrow" />

                    <Box className={classes.userBox} >
                        <Box style={{ position: 'relative' }}>

                            <img className={classes.userBG} src={'./images/Group 7152.svg'} />

                            <img className={classes.userImg} src={'./images/Rectangle 58.png'} />
                        </Box>

                        <Typography className={classes.userName} variant="h1" >
                            UserName
                        </Typography>
                        <Typography className={classes.userSub} variant="h4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>

                    <img className={classes.rightArr} src={'./images/Group 6229.svg'} alt="arrow" style={{ marginBottom: '20%' }} />

                </Box>

            </Carousel>
        </Box>
    )
}
