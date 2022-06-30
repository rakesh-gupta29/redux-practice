import React from 'react';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { ButtonOutlined } from '../../../atoms';
import './carousel.css'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: '100vh',
        marginTop:'5%',
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
        }
    },
    carouselInBox: {
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    contentBox: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    image: {
        width: '30%',
        position: 'absolute',
        top: '0rem',
        left: '5%',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            top: '0rem',
        },
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            width: '40%',
            display: 'block',
        },
        [theme.breakpoints.down('xs')]: {
            width: '65%',
        }
    },
    text1: {
        font: 'normal normal bolder 15rem Gopher-black',
        textAlign: 'right',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            fontSize: '10rem',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    text2: {
        background: 'transparent',
        color: 'transparent',
        font: 'normal normal bolder 12rem Gopher-HeavyItalic',
        WebkitTextStrokeWidth: '.07rem',
        WebkitTextStrokeColor: 'rgb(255, 255, 255)',
        transition: "all 500ms ease-in-out",
        '&:hover': {
            WebkitTextStrokeColor: '#ff4e00',
            color: '#ff4e00',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '8rem',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    text3: {
        font: 'normal normal normal 4.5rem Gopher',
        color: '#CFFE00',
        textAlign: 'center',
        paddingLeft: '2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
        }
    },
    text4: {
        padding: '1rem',
        font: 'normal normal normal 3rem Ben',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem'
        }
    },
    btnBox: {
        display: 'flex',
        justifyContent: 'end',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
            width: '100%',
            marginTop:'2%'
        }
    },
    btn: {
        width: '22%',
        borderRadius: '3rem',
        background: 'transparent',
        color: '#FFFFFF',
        "& a":{
            font: 'normal normal normal 1.8rem Gopher',  
            [theme.breakpoints.down('sm')]: {
                fontSize:'1.5rem',
            } 
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            width: '40%',

        }
    }

}))

export function CarouselMolecule() {
    const history = useHistory()

    const classes = useStyles();

    return (
        <Carousel className={classes.carousel} pagination={false}>
            <Box className={classes.carouselInBox}>

                <Box className={classes.contentBox}>
                    <img src={'./images/Layer 0-1.gif'} className={classes.image} alt="Watch" />
                    <Typography variant="h1" className={classes.text3}>Watch 1.0</Typography>
                    {/*<Typography variant="h1" className={classes.text4}>From 4100 /- </Typography>*/}
                    <Typography variant="h1" className={classes.text1}> FITNESS </Typography>
                    <Typography variant="span" className={classes.text2}> ON YOUR WRIST</Typography>

                    <br/>
                    <Box className={classes.btnBox}>
                        <ButtonOutlined className={classes.btn} name='Explore' onClick={()=>history.push('/smartwatch')}>
                        </ButtonOutlined>
                        <ButtonOutlined className={classes.btn} style={{marginLeft:'10%'}} name='Buy Now'
                            Link="https://www.amazon.in/Watch-1-0-Menstrual-Waterproof-Multiple/dp/B09HV6W1B7/ref=sr_1_2?dchild=1&keywords=brebel&qid=1633610884&qsid=262-2742335-3902459&sr=8-2&sres=B075KHVJSM%2CB09HV6W1B7%2CB09HV5Q235%2CB09HV5H1CH%2C1943150281%2C2867449022%2C194315001X%2CB01IITGJG8%2CB08YYMTFDM">
                        </ButtonOutlined>
                    </Box>
                </Box >

            </Box>
        </Carousel>
    )
}
