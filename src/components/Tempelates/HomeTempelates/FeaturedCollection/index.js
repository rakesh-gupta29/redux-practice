import React from 'react'
import {
    Box,
    makeStyles,
    Grid,
    Typography
} from '@material-ui/core';
import './feature.css';
import feature from './featureData.js'
import Slide from 'react-reveal/Slide';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    FeatureBox: {
        width: '100%',
        height: '100%',
        // margin: '10% 0%',
        // [theme.breakpoints.down('md')]: {
        //     height: '120vh',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     height: '1',
        // },
    },

    txtGradient: {
        font: 'normal normal normal 5vw Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        marginTop: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',
        },
    },

    lorem: {
        font: 'normal normal normal 2.5vw Ben',
        textAlign: 'center',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '5vw',
        },
    },

    gridContainer: {
        width: '80%',
        margin: 'auto',
        height: '90%',
        margin: '0 auto',
        margin: '5% 5% 5% 10%',
    },

    gridItem: {
        // border: '2px solid red',
        width: '80%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
    },

    gridTitle: {
        textAlign: 'left',
        // border: '2px solid blue',
        paddingLeft: '15%',
        font: 'normal normal normal 4rem Gopher',
        marginBottom: '3%',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: "4rem",
            paddingLeft: '0%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "3rem",
            textAlign: 'center',
            paddingLeft: '0%',
        }
    },

    gridDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    gridPrimeryImage: {
        maxWidth: '70%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '60%',
        }
    },

    gridSecondary: {
        maxWidth: '50%',
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            width: '50%',
            top: '0%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            top: '0%',
        }
    },
    HoverImg: {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(1.2)',
        }
    }
}))

export function FeaturedCollections() {

    const classes = useStyles();

    const history = useHistory();

    return (
        <Box className={classes.FeatureBox}>

            <h1 className={classes.txtGradient} > Featured Collection  </h1>
            <h1 className={classes.lorem}>The first and best of B.Rebel. Let’s move the world.</h1>

            <Grid container className={classes.gridContainer}>
                {
                    feature.map((item, index) => {
                        return (
                            <Grid item xs={12} sm={6} className={classes.gridItem} key={index}>
                                <Slide bottom>
                                    <Typography variant='h1' className={classes.gridTitle}>{item.title}</Typography>
                                    <div className={classes.gridDiv}>
                                        <Slide bottom>
                                            <img src={item.images1} alt="play Button" className={classes.gridPrimeryImage} />
                                        </Slide>
                                        <Box className={classes.gridSecondary}>
                                            <img className={classes.HoverImg} src={item.images2} alt="Airpods" onClick={() => history.push(`/${item.to}`)} />
                                        </Box>
                                    </div>
                                </Slide>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Box>
    )
}
