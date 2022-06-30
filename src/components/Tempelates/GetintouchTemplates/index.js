import React, { useEffect } from 'react'
import { GetintouchMolecules } from '../../molecules'
import { makeStyles } from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    getBox: {
        width: '100%',
        height: '100%',
        margin: '2% 0% 20% 0%',
    },
    imgBox: {
        width: '40%',
        [theme.breakpoints.down('md')]: {
            width: '40%',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    handImg: {
        height: '100vh',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            height: '80vh'
        }
    },
    getHead: {
        font: 'normal normal bolder 12vmin Gopher-HeavyItalic',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        texthadow: '2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'absolute',
        top: '2%',
        left: '28%',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            fontSize: '7rem',
            top: '2%',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    getHeadShade: {
        font: 'normal normal normal 12vmin Gopher-heavyitalic',
        background: 'transparent',
        color: 'transparent',
        WebkitTextStrokeWidth: '.03rem',
        WebkitTextStrokeColor: 'white',
        zIndex: '0',
        position: 'absolute',
        top: '2.5%',
        left: '28.3%',
        [theme.breakpoints.down('md')]: {
            fontSize: '7rem',
            top: '2%',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    getHeadres: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 5rem Gopher-HeavyItalic',
            background: '#FBF272',
            background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
            background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
            background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
            texthadow: '2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',

        },
    },
    formCont: {
        width: '60%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            height: '80vh'
        },
    },
    txtBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    txtBoxDown: {
        display: 'none',
        marginBottom: '10%',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
        },
    },
    txtInBox: {
        width: '25vw',
        display: 'flex',
        flexDirection: 'column',
        padding: '4rem',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
    },
    txtLabel: {
        font: 'normal normal bold 1.2rem Gopher-hairline',
        padding: '1rem 0rem',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 1rem Gopher-hairline'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
    txt: {
        font: 'normal normal bold 1.8rem Gopher',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 1.8rem Gopher',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 1.2rem Gopher',
            lineHeight: '2'
        },
    },
    geiStyleMolecule: {
        width: '45%',
        marginTop: '10%',
        [theme.breakpoints.down('md')]: {
            // marginBottom: '1%'
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0%',
            width: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '75%',
        },
    },
}))

export function GetintouchTemplates() {
    const classes = useStyles()
    return (
        <div className={classes.getBox}>

            <div style={{ display: 'flex',justifyContent:'center',alignItems:'center', position: 'relative' }}>

                <div className={classes.imgBox} >
                    <img className={classes.handImg} src="./images/Group 7139.png" alt="Get In Touch" />
                </div>

                <div className={classes.formCont}>

                    <h1 className={classes.getHeadres} >Get In Touch</h1>

                    <GetintouchMolecules className={classes.geiStyleMolecule} />

                    <div className={classes.txtBox} >

                        <div className={classes.txtInBox}>
                            <h6 className={classes.txtLabel}>Address</h6>
                            <h1 className={classes.txt}>No. 342 - London Oxford Street, 012 United Kingdom.</h1>
                        </div>

                        <div className={classes.txtInBox}>
                            <h6 className={classes.txtLabel}>Contact</h6>
                            <h1 className={classes.txt}>Email : Support@breble.in</h1>
                            <h1 className={classes.txt}>Phone : +91 83598 10101  </h1>
                        </div>
                    </div>
                </div>
                <h1 className={classes.getHead} >Get In Touch</h1>
                <h1 className={classes.getHeadShade} >Get In Touch</h1>
            </div>

            <div className={classes.txtBoxDown} >
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', padding: '4rem', }}>
                    <h6 className={classes.txtLabel}>Address</h6>
                    <h1 className={classes.txt}>No. 342 - London Oxford Street, 012 United Kingdom.</h1>
                </div>

                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', padding: '4rem' }}>
                    <h6 className={classes.txtLabel}>Contact</h6>
                    <h1 className={classes.txt}>Email : Support@breble.in</h1>
                    <h1 className={classes.txt}>Phone : +91 83598 10101  </h1>
                </div>
            </div>
        </div>

    )
}


