import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    textArea:{
        width: '100%',
        padding: '1.3rem',
        outline: '1px solid #2E2E2E',
        borderRadius: '.5rem',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'transparent',
        color: 'white',
        mozPlaceholder:{
            fontFamily: 'Ben'  
         }
    },
    label: {
        font: 'normal normal normal 1.3rem Roboto',
        marginLeft: '0px',
        display: 'inline-block',
        padding: '1rem 0rem .8rem 0rem',
    }

}))


export function TextArea({
    style,
    autofocus,
    cols,
    rows,
    required,
    disabled,
    maxlength,
    name,
    placeholder,
    readonly,
    label,
    className,
    ...props
}) {
    const classes = useStyles()
    return (
        <div style={style} className={className}>
            <label className={classes.label}>{label}</label>
            <textarea
                {...props}
                style={style}
                autofocus={autofocus}
                cols={cols}
                rows={rows}
                required={required}
                disabled={disabled}
                maxlength={maxlength}
                name={name}
                placeholder={placeholder}
                readonly={readonly}
                className={classes.textArea}
            ></textarea>
        </div >
    )
}
