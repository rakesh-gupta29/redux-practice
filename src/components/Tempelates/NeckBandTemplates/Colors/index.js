import React from 'react'
import { makeStyles,Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: '50vh',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    mainInBox: {
        // width:'80%'
    },
    // neckBandBox: {
    //     width: '80%',
    //     height: '130%',
    //     background: 'transparent',
    //     display: 'flex',
    //     justifyContent: 'left',
    //     alignItems: 'center',
    //     position: 'relative',
    //     [theme.breakpoints.down('md')]: {
    //         height: '100%',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         height: '100%',
    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         height: '70%',
    //         flexWrap: 'wrap'
    //     },
    // },
    colors: {
        font: 'normal normal bolder 20vw Gopher-heavyitalic',
        background: '-webkit-linear-gradient(to top, #FBF272 20%, #7FFAA4 80%)',
        background: '-moz-linear-gradient(to top, #FBF272 20%, #7FFAA4 80%)',
        background: 'linear-gradient(to top, #FBF272 20%, #7FFAA4 80%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'absolute',
        bottom: '75%',
        left: '11%',
        paddingRight: '2%',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 18rem Gopher-heavyitalic',
            bottom: '75%',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 15rem Gopher-heavyitalic',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    colorsShade: {
        font: 'Italic normal bolder 20vw Gopher-heavyitalic',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        bottom: '72%',
        left: '10%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.16rem',
        WebkitTextStrokeColor: '#000000',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 18rem Gopher-heavyitalic',
            bottom: '70%',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 15rem Gopher-heavyitalic',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 8rem Gopher-heavyitalic',
            left: '9%',
            display: 'none'
        },
    },
    neckBandImg: {
        width: '25%',
        [theme.breakpoints.down('xs')]: {
            width: '50%',
        },
    },
    imgBox: {
        position: 'absolute',
        width: '80%',
        top: '20%'
    },
    bgWhiteDiv: {
        height: '70vh',
        width: '50%',
        position: 'absolute',
        background: 'white',
        [theme.breakpoints.down('md')]: {
            height: '50vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '40vh',
        },

    }
}))

export function Colors() {
    const classes = useStyles()
    return (

        <Box className={classes.main}>
            <h1 className={classes.colorsShade}> Colors </h1>
            <h1 className={classes.colors}> Colors </h1>
            <Box className={classes.mainInBox}>
                <Box className={classes.bgWhiteDiv} style={{ top: '10%', left: '0%' }}>1</Box>
                <Box className={classes.bgWhiteDiv} style={{ top: '0%', left: '50%' }}>2</Box>
            </Box>
            <Box className={classes.imgBox}>
                <img className={classes.neckBandImg} src={'./images/Mask Group 16.png'} alt='images' />
                <img className={classes.neckBandImg} src={'./images/Mask Group 19.png'} alt='images' />
                <img className={classes.neckBandImg} src={'./images/Mask Group 17.png'} alt='images' />
                <img className={classes.neckBandImg} src={'./images/Mask Group 18.png'} alt='images' />
            </Box>
        </Box>
    )
}




{/* <Box className={classes.colorsBoxXS}>
                    <h1 className={classes.colorsShadeXS}> Colors </h1>
                    <h1 className={classes.colorsXS}> Colors </h1>
                </Box> */}

{/* <Box className={classes.neckBandBox}> */ }

{/* <h1 className={classes.colorsShade}> Colors </h1>
                <h1 className={classes.colors}> Colors </h1> */}

{/* <img className={classes.neckBandImg} src={'./images/Mask Group 16.png'} alt='images' />
                <img className={classes.neckBandImg} src={'./images/Mask Group 19.png'} alt='images' />
                <img className={classes.neckBandImg} src={'./images/Mask Group 17.png'} alt='images' />
                <img className={classes.neckBandImg} src={'./images/Mask Group 18.png'} alt='images' /> */}


{/* </Box> */ }