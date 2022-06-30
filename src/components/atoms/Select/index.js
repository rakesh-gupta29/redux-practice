import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    resSelect: {
        width: '100%',
        padding: '1.3rem',
        border: ' 1px solid #2E2E2E',
        borderRadius: '2px',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'transparent',
        color: '#b1b1b1',
    },
    label: {
        font: 'normal normal normal 1.3rem Roboto',
        marginLeft: '0px',
        display: 'inline-block',
        padding: '1rem 0rem .8rem 0rem',
    }

}))

export function Select({
    value,
    onChange,
    label,
    required,
    options,
    name,
    ...props }
) {
    const classes = useStyles()
    return (
        <>
            <label className={classes.label}>
                {label}
                <span style={{ color: 'red', fontSize: '1.5rem' }}> {required} </span>
            </label>

            <select
                {...props}
                value={value}
                onChange={onchange}
                name={name}
                className={classes.resSelect}>
                <option disabled selected>
                    Please Select
                </option>

                {
                    options.map((obj) => {
                        return (<option value={obj.val}>{obj.item}</option>);
                    })
                }

            </select>
        </>
    )
}