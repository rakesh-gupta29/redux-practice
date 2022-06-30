import React from 'react'
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    girlBox:{
        // height:'80vh',
        position:'relative',
        padding:'10% 0%',
        [theme.breakpoints.down('sm')]:{
            // height:'50vh'
        }
    },
    girlImg:{
        width:'35%',
        position:'absolute',
        zIndex:'1',
        top:'0%',
        left:'-3%',
        [theme.breakpoints.down('sm')]:{
            // position:'static',
            // width:'100%',
            // padding:'10%'
        },
    },
    girlImgBack:{
        width:'25%',
        background:'rgb(207, 254, 0)',
        height:'10vh',
        position:'absolute',
        top:'-5%',
        left:'3%',
        zIndex:'0',
        [theme.breakpoints.down('sm')]:{
            // display:'none',
        },
    }

}))

export function GirlLeft({
    leftImage,

}) {

    const classes = useStyles();

    return (
        <div className={classes.girlBox}>
            <div className={classes.girlImgBack}></div>
            <img className={classes.girlImg} src={leftImage} />
        </div>
    )
}
