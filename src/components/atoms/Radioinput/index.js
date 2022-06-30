import React from 'react'
import './radio.css'

export function Radioinput({
    label,
    ...props
}) {


    return (
        <>
            <input
                {...props}
            />
            <label className='label' >{label}</label>
        </>
    )
}