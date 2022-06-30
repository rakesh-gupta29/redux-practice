import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btns: {
        width: '100%',
        // height: '100%',
        padding: '.5rem 0rem',
        background: 'transparent',
        border: '.2rem solid rgba(255, 78, 0, 0.46)',
        borderRadius: '3rem',
        color: '#fff',
        cursor: 'pointer',
        transition: "all 500ms ease-in-out",
        '&:hover': {
            backgroundColor: '#FF4E00'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        }
    },
}))

export function ButtonOutlined({
    name,
    className,
    Link,
    you,
    ...props }) {
    const classes = useStyles()
    return (
        <div className={className}>
            <button {...props} className={classes.btns}>
                <a href={Link} target='_blank'>
                    {name}
                </a>
            </button>
        </div>
    )
}
