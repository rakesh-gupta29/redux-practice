import React from 'react'
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    girlBox:{
        width:'100%',
        padding:'10% 0%',
        // height:'60vh',
        position:'relative',
        [theme.breakpoints.down('md')]:{
            // height:'40vh',
        },
        [theme.breakpoints.down('sm')]:{
            // position:'static',
            // marginTop:'20% 0%',
        },
    },
    girlImg:{
        width:'35%',
        position:'absolute',
        top:'0%',
        right:'-4%',
        [theme.breakpoints.down('sm')]:{
            // position:'static',
            // width:'100%',
            // display:'none',
        },
    },
    girlImgBack:{
        width:'25%',
        background:'#FF4E00',
        height:'10vh',
        position:'absolute',
        top:'-5%',
        right:'3%',
        [theme.breakpoints.down('sm')]:{
            // position:'static',
            // display:'none',
        },
    }

}))

export function GirlRight({
    rightImage,

}) {

    const classes = useStyles();

    return (
        <div className={classes.girlBox}>
            <div className={classes.girlImgBack}></div>
            <img className={classes.girlImg} src={rightImage} />
        </div>
    )
}
