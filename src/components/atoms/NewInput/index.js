import React from 'react'
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    label: {
        font: 'normal normal normal 1.3rem Roboto',
        marginLeft: '0px',
        display: 'inline-block',
        padding: '1rem 0rem .8rem 0rem',
    },
    resInput: {
        width: '100%',
        padding: '1.3rem',
        border: ' 1px solid #2E2E2E',
        borderRadius: '.5rem',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'transparent',
        color: 'white',
        webkitAppearance: "none",
        outline: '1px solid #2E2E2E',
    },
}))

export function NewInput({
    label,
    requiredStar,
    className,
    ...props }
) {
    const classes = useStyles()
    return (
        <>
            <Box className={className} style={{
                "& input::placeholder": {
                    font: 'normal normal normal 1.3rem Gopher',
                }
            }}>
                <label className={classes.label}>{label}<span style={{ color: 'red', fontSize: '1.5rem' }}> {requiredStar} </span></label>
                <input
                    {...props}
                    className={classes.resInput}
                />
            </Box>
        </>
    )
}
