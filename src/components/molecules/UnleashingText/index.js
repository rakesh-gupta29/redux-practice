import React, { useEffect } from 'react'
import {
    makeStyles,
} from '@material-ui/core';
import 'aos/dist/aos.css'
import AOS from 'aos';

const useStyles = makeStyles((theme) => ({

    unlshMargin: {
        width: '100%',
        padding:'25% 0%',
        position: 'relative',
        margin: '15% 0%',
       
    },

    unlshImg: {
        width: '75%',
        opacity: '0.1',
        position: 'absolute',
        bottom: '0%',
    },
    unlshTxt: {
        width: '80%',
        font: 'normal bold normal 11.5vw Ben-Italic',
        position: 'absolute',
        bottom: '20%',
        left: '10%',
      
    },
    bottomTxt: {
        width: '40%',
        font: 'normal normal normal 2.5vw Ben',
        position: 'absolute',
        bottom: '-23%',
        left: '25%',
        lineHeight: '1.5',
      

    }
}))


export function UnleashingText({
    brebelImgBG,
    textonImg1,
    textonImg2,
    style,  
    bottomPara,
    br

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
        <div className={classes.unlshMargin}>
            <img className={classes.unlshImg} src={'./images/Path 6362.svg'} alt="classes" />
            <h1 className={classes.unlshTxt} data-aos="fade-up">{textonImg1} {br}<span style={style} data-aos="zome-out">{textonImg2}</span></h1>
            <h1 className={classes.bottomTxt} data-aos="fade-down">{bottomPara}</h1>
        </div>
    )
}
