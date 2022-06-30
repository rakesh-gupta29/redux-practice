import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay ,Fade} from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

const useStyles = makeStyles((theme) => ({

    qltyUpSection: {
        display: 'flex',
        justifyContent: 'right',
        position: 'relative',
        margin: '5% 0%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'right',
        },
    },
    bgImg: {
        width: '70%',
        opacity: '0.2',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    box: {
        width: '90%',
        [theme.breakpoints.down('sm')]: {
        width: '80%',
            margin: '0 auto',
        },
    },
    qlty: {
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
    // qltySubBox: {
    //     display: 'flex',
    //     [theme.breakpoints.down('sm')]: {
    //         flexDirection: 'column',
    //     },
    // },
    // qltySub: {
    //     font: 'normal normal normal 3rem Ben',
    //     width: '35%',
    //     lineHeight: '1.5',
    //     [theme.breakpoints.down('md')]: {
    //         fontSize: '2rem',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         display: 'none'
    //     },
    // },
    // qltyTop: {
    //     font: 'normal normal normal 3rem Gopher',
    //     textAlign: 'center',
    //     width: '40%',
    //     [theme.breakpoints.down('md')]: {
    //         fontSize: '2.2rem',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         width: '100%',
    //         fontSize: '1.6rem',
    //         textAlign: 'left',
    //     },
    // },
    qltyMidSection: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '20% 0%',
        }

    },


    // brImages: {
    //     width: '25%',
    //     transition: "all 500ms ease-in-out",
    //     "&:hover": {
    //         transform: 'scale(1.2)',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         width: '50%',
    //     },
    // },

    // qltyDownSection: {
    //     display: 'flex',
    //     justifyContent: 'right',
    //     width: '80%',
    //     marginTop: '5%',
    //     marginBottom: '5%',
    //     margin: '0 auto',
    //     [theme.breakpoints.down('sm')]: {
    //         justifyContent: 'right',
    //     }
    // },
    // qltySubText: {
    //     height: 'fit-content',
    //     border:'2px solid yellow',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     width: '85%',
    //     [theme.breakpoints.down('xs')]: {
    //         flexDirection: 'column'
    //     }
    // },



    // Carousel CSS
    brImagesBox: {
        width: '100%',
        maxHeight: '100%',
        position: 'absolute',
        top: '8%',
        left: '0%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            top: '8%',
        }
    },
    ImgBoxCuts: {
        marginTop: '8%',
        width: '100%',
        // margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        }
    },
    BoxWidth: {
        height: 'fit-content',
        width: '23%',
        margin: "0 3%",
        transition: "all 500ms ease-out",
        "&:hover": {
            transform: 'scale(.9)',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    BoxImages: {
        maxWidth: '100%',
        maxHeight: '100%',      
        [theme.breakpoints.down('sm')]: {
            width: '60%',
        }
    },
    specs: {
        width: '100%',
        font: 'normal normal normal 3rem Gopher',
        paddingTop: '10%',
        color: '#cffe00',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem',
            paddingTop: '3%',
            width: '60%',
        }
    },

}))

export function Quality({
    data,
}) {
    const classes = useStyles();
    // const palyAuto = 
    // const fadeCenter =
    const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }), new Fade()];

    return (
        <Box className={classes.main}>
            <Box className={classes.qltyUpSection}>
                <Box className={classes.box}>
                    <Typography className={classes.qlty}> Designed to be Sassy! </Typography>

                    {/* <Box className={classes.qltySubBox} >
                        <Typography className={classes.qltySub}> Our products go through rigorous testing to craft the perfect product for you. </Typography>
                        <Typography className={classes.qltyTop}>Top-Class &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Engineering</Typography>
                    </Box> */}
                </Box>
            </Box>

            <Box className={classes.qltyMidSection}>
                <img className={classes.bgImg} src={'./images/Path 6392.svg'} alt='B Rebel' />
                <Box className={classes.brImagesBox}>
                    {/*<img className={classes.brImages} src={qualityImageMain} alt='B Rebel' />
                    <Typography className={classes.specs}> {headMain}</Typography>*/}

                    {/* <Flicking
                        plugins={plugins}
                        align="prev"
                        defaultIndex='2'
                        circular={true}
                    >
                        {
                            data.map((item) => {
                                return (
                                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <img className={classes.brImages} src={item.image} alt={item.title} />
                                        <Typography className={classes.specs}> {item.para}</Typography>
                                    </Box>
                                )
                            })
                        }

                    </Flicking> */}


                    <Box className={classes.ImgBoxCuts} data-aos="fade-up">
                        <Flicking
                            plugins={plugins}
                            align="center"
                            defaultIndex='2'
                            circular={true}
                        >
                            {
                                data.map((item) => {
                                    return (
                                        <Box className={classes.BoxWidth}>
                                            <img className={classes.BoxImages} src={item.image} alt="Carousel Images" />
                                            <Typography className={classes.specs}> {item.para}</Typography>
                                        </Box>

                                    )
                                })
                            }
                        </Flicking>
                    </Box>

                </Box>

                {/* <Box className={classes.brImagesBox}>
                    <img className={classes.brImages} src={qualityImageSecondary} alt='B Rebel' />
                    <Typography className={classes.specs}> {headSecond}</Typography>
                </Box> */}
            </Box>

        </Box>
    )
}