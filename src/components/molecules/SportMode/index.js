import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    main: {
        width: '100%',
        height: 'fit-content',
        margin:'10% 0%'
    },
    cutsHeader: {
        width: '60%',
        margin:'3% 0%',
        float: 'right',
    },
    txtGradient: {
        font: 'normal normal normal 10rem Gopher-Medium',
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

    lorem: {
        width: '60%',
        font: 'normal normal normal 3rem Ben',
        lineHeight: '1.5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '1.5',
            width: '100%',
            marginTop: '5%',
        },
    },

    imgBoneBox: {
        overflow: 'hidden',
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        margin: '5% 0%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            marginTop: '10%',           
        },
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        },
    },
    imgBone: {
        width: '65%',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            right: '0%',
            top: '0%',
        },
    },
    imgBonePosition: {
        width: '30%',
        position: 'absolute',
        right: '45%',
        top: '5%',
        [theme.breakpoints.down('sm')]: {
            top: '1%',
        },
    }

}))

export function SportMode({
    title,
    paragraph,
    backgroundImage,
    productImage,
    style,
}) {
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
        <Box className={classes.main}>
            <Box className={classes.cutsHeader}>
                    <h1 className={classes.txtGradient} data-aos="fade-down">{title} </h1>
                    <h1 className={classes.lorem} data-aos="fade-up"> {paragraph}</h1>
            </Box>
            <Box className={classes.imgBoneBox}>
                <img src={backgroundImage} className={classes.imgBone} alt='Mask' data-aos="fade-left" />
                <img src={productImage} alt='Layer' className={classes.imgBonePosition} data-aos="fade-right" />
            </Box>
        </Box>
    )
}
