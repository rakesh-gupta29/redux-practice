import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";



const useStyles = makeStyles((theme) => ({
    CutsAbove: {
        width: '100%',
        // height: '100vh',
        marginTop: '10%',
        [theme.breakpoints.down('md')]: {
            margin: '15% 0',
            height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '15% 0',
            height: '100%',
        }
    },
    cutsHeader: {
        width: '80%',
        margin: '0 auto'
    },
    txtGradient: {
        font: 'normal normal normal 8rem Gopher-Medium',
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
    lineHeight: {
        // lineHeight: '5'
    },
    subHead: {
        font: 'normal normal normal 4.2rem Gopher',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '1.5'

        }
    },
    ImgBoxCuts: {
        marginTop: '5%',
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        }
    },
    BoxWidth: {
        maxHeight: '400px',
        width: '30%',
        margin: "0 10px",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxHeight: '100%',
        }
    },
    BoxImages: {
        height: '80%',
        width: '90%',
        cursor: 'pointer',
        transition: "all 500ms ease-out",
        "&:hover": {
            transform: 'scale(.9)',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '80%',
        }
    }

}))


export function CutsAbove({data,title1,title2,subtitle}) {
    const classes = useStyles();

    const asd = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })
    const dsa = new Pagination({ type: 'scroll', bulletCount: 5 })

    const plugins = [asd];

    return (
        <Box className={classes.CutsAbove}>

            <Box className={classes.cutsHeader}>
                <Box className={classes.lineHeight}>
                    <h1 className={classes.txtGradient} data-aos="fade-up">{title1}<br />{title2}</h1>
                </Box>
                <h1 className={classes.subHead} data-aos="fade-up">{subtitle}</h1>
            </Box>

            <Box className={classes.ImgBoxCuts} data-aos="fade-up">
                <Flicking
                    plugins={plugins}
                    align="prev"
                    defaultIndex='2'
                    circular={true}
                >
                    {
                        data.map((item) => {
                            return (
                                <Box className={classes.BoxWidth}>
                                    <img className={classes.BoxImages} src={item.image} alt="Carousel Images" />
                                </Box>

                            )
                        })
                    }

                    <ViewportSlot>
                        <div styles={{ border: "20px solid red" }} className="flicking-pagination"></div>
                    </ViewportSlot>
                </Flicking>
            </Box>

        </Box>
    )
}
