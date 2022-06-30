import React from 'react'
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    label: {
        display: 'inline-block',
        marginTop:'10%',
        font: 'normal normal normal 1.6rem Ben',
    },
    inputBox:{
        marginTop:'2%',
        border: '.2rem solid rgba(255, 78, 0, 0.46)',
        borderRadius: '3rem',
        padding:'3% 0% 3% 5%',
        "& input::placeholder": {
            font:'normal normal normal 1.6rem Ben',
            color:'white'
          }
    },
    resInput: {
        width: '80%',
        border:'none',
        outline: 'none',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'transparent',
        color: 'white',
        webkitAppearance: "none",
        "& ::-moz-placeholder": {
            fontFamily: 'Ben', 
         }
    },
    check: {
        font: 'normal normal normal 2rem Ben',
        cursor: 'pointer',
        alignSelf:'right'
    }
}))

export function InputOutlined({
    label,
    required,
    checkbtn,
    ...props }
) {
    const classes = useStyles()
    return (
        <>
            <label className={classes.label}>{label}<span style={{ color: 'red', fontSize: '1.5rem' }}> {required} </span></label>
            <Box className={classes.inputBox} style={{display:'flex'}}>
                <input
                    {...props}
                    className={classes.resInput}
                />
                <h1 className={classes.check}>{checkbtn}</h1>
            </Box>
        </>
    )
}
