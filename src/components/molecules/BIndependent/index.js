import React from 'react'
import { makeStyles, Typography, Box } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        padding:'30% 0%',
        position: 'relative',
        border:'none',
        [theme.breakpoints.down('sm')]: {
            padding:'40% 0%',
        },
    },
    imgBack: {
        width: '70%',
        opacity: '0.12',
        position: 'absolute',
        bottom: '0%',
        left: '-8%',
        [theme.breakpoints.down('sm')]: {
            width:'100%'
        },
    },
    faqTextBox: {
        width: '60%',
        position: 'absolute',
        bottom: '9%',
        left: '30%',
        height: 'fit-content',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            // textAlign: 'center',
            left: '20%',
            padding:'2%',
            bottom: '0%',
            
        }
    },
    faqHead: {
        font: 'normal normal normal 8vw Gopher-heavyitalic',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position:'absolute',
        top:'-40%',
        left:'-2%',
        padding: '2rem',
        [theme.breakpoints.down('sm')]: {
            position:'static',
            fontSize: '8rem',
            padding: '0rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.5rem',
            lineHeight: '1',
        },
    },
    faqHeadShade: {
        font: 'normal normal normal 8vw Gopher-heavyitalic',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top:'-40%',
        left:'-3%',
        padding: '2rem',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: 'white',
        zIndex: '0',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    faqText: {
        font: 'normal normal bold 4vw Gopher-black',
        lineHeight: '1.5',
        [theme.breakpoints.down('md')]: {
            fontSize: '6rem',
            lineHeight: '1',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
            lineHeight: '1',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem',
            lineHeight: '1',
        },
    },
}))
export function BIndependent({
    brebelImg,
    title,
    titleShade,
}) {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <img className={classes.imgBack} src={brebelImg} />
            <Box className={classes.faqTextBox}>
                <Box>
                    <span className={classes.faqHeadShade}> {titleShade}</span>
                    <h1 className={classes.faqHead}> {title}</h1>
                </Box>
                <h1 className={classes.faqText}>WE ARE A INDEPENDENT BRANDING & 
                    <span style={{ color: '#FF4E00' }}> EXEPERIENCE DESIGN COMPANY WITH A FOCUS IN</span>
                </h1>
            </Box>
        </div>
    )
}
