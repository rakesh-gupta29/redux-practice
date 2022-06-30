import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btns: {
        width: '100%',
        padding: '.6rem 0rem',
        background: '#FF4E00',
        border: 'none',
        borderRadius: '3rem',
        color: '#fff',
        cursor: 'pointer',
        fontWeight:'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    }

}))

export function Button({
    name,
    style,
    className,
    Link,
    ...props }
) {
    const classes = useStyles()
    return (
        <div className={className}>
            <button
                {...props}
                className={classes.btns}
                style={style}>

                <a href={Link} target='_blank'>
                    {name}
                </a></button>
        </div>
    )
}
