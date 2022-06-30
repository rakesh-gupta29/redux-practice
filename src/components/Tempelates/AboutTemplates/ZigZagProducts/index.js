import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        flexWrap: 'wrap',
        position: 'relative',
        padding: '60% 0%',
        margin: '15% 0% 25% 0%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    row1: {
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '10%',
        left: '-5%',
        [theme.breakpoints.down('lg')]: {
            top: '10%',
            left: '-5%',
        }
    },
    row2: {
        display: 'flex',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '35%',
        left: '-10%',
    },
    row3: {
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '60%',
        left: '-10%'
    },
    row3_1: {
        display: 'flex',
        width: '100%',
        // transform: 'rotate(-45deg)',
        // flexWrap:'wrap',
        // position: 'absolute',
        // top: '60%',
        // left: '-15%'
    },
    bgBox: {
        width: '70rem',
        height: '55rem',
        marginRight: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            width: '50rem',
            height: '40rem',
        },
        [theme.breakpoints.down('md')]: {
            width: '40rem',
            height: '30rem',
        }
    },
    imageBox: {
        width: '60%',
        padding: '5%'
    },
    images: {
        width: '100%',
        maxHeight: '100%',
        transform: 'rotate(45deg)'

    },
    row4: {
        width: '90%',
        marginLeft: '10%',
        marginTop: '2%',
        // transform: 'rotate(-45deg)',
        // // border: '2px solid red',
        // position: 'absolute',
        // top: '70%',
        // // left: '20%',
        // [theme.breakpoints.down('lg')]: {
        //     top: '75%',
        // },
        // [theme.breakpoints.down('md')]: {
        //     // top: '60%',
        // },
    },
    outlineText: {
        lineHeight: '1',
        width: '100%',
        background: 'transparent',
        color: 'transparent',
        font: 'normal normal bolder 8vw Gopher-HeavyItalic',
        WebkitTextStrokeWidth: '.07rem',
        WebkitTextStrokeColor: 'rgb(255, 255, 255)',
        transition: "all 500ms ease-in-out",
        [theme.breakpoints.down('lg')]: {
            fontSize: '6vw',
        },
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '5rem',
        // },
    },
    whiteText: {
        lineHeight: '1',
        font: 'normal normal bolder 8vw Gopher-HeavyItalic',
        textAlign: 'right',
        color: 'white',
        [theme.breakpoints.down('lg')]: {
            fontSize: '6vw',
        },
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '5rem',
        // },

    }
}))

export function ZigZagProducts() {
    const classes = useStyles()
    return (
        <Box className={classes.mainBox}>
            <Box className={classes.row1}>

                <Box className={classes.bgBox} style={{ background: '#FBF272' }}>
                    <Box className={classes.imageBox}>
                        <img className={classes.images} src={'./images/Layer 0.png'} />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.row2}>
                <Box className={classes.bgBox} style={{ background: '#72F5FF' }}>
                    <Box className={classes.imageBox}>
                        <img className={classes.images} className={classes.images} src={'./images/Layer 0.png'} />
                    </Box>
                </Box>
                <Box className={classes.bgBox} style={{ background: '#7800FF' }}>
                    <Box className={classes.imageBox}>
                        <img className={classes.images} className={classes.images} src={'./images/Layer 0.png'} />
                    </Box>
                </Box>
            </Box>

            <Box className={classes.row3}>
                <Box className={classes.row3_1}>
                    <Box className={classes.bgBox} style={{ background: '#CFFE00' }}>
                        <Box className={classes.imageBox}>
                            <img className={classes.images} className={classes.images} src={'./images/Layer 0.png'} />
                        </Box>
                    </Box>
                    <Box className={classes.bgBox} style={{ background: '#FFB7E5' }}>
                        <Box className={classes.imageBox}>
                            <img className={classes.images} className={classes.images} src={'./images/Layer 0.png'} />
                        </Box>
                    </Box>
                    <Box className={classes.bgBox} style={{ background: '#7FFAA4' }}>
                        <Box className={classes.imageBox}>
                            <img className={classes.images} className={classes.images} src={'./images/Layer 0.png'} />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.row4}>
                    <Typography className={classes.outlineText}>DESIGN EXPERIENCE</Typography>
                    <Typography className={classes.whiteText}>DESIGN EXPERIENCE</Typography>
                </Box>
            </Box>


        </Box>
    )
}