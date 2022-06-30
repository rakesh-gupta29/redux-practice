import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    mwlBox: {
        position: 'relative',
        // margin: '10% 0%',
        padding: '25% 0%',
        width:'80%',
        margin:'10% auto',
    },
    mwlImage: {
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'absolute',
        top: '0%',
        zIndex: '1'
    },
    mwlBackBox: {
        width: '106%',
        padding:'18% 0%',
        background: '#CFFE00',
        position: 'absolute',
        top: '5%',
        left: '-3%',
        zIndex: '0'
    }
}))

export function ManWithLights() {
    const classes = useStyles()
    return (
        <div className={classes.mwlBox}>

            <img className={classes.mwlImage} src={'./images/man-with-a-light- about.png'} />
            <div className={classes.mwlBackBox}></div>

        </div>
    )
}