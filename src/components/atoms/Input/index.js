import React from 'react'
import {
    TextField,
} from '@material-ui/core';


export function Input({
    required,
    id,
    name,
    value,
    onChange,
    variant,
    label,
    secure,
    error,
    errorText,
    disabled,
    fullWidth,
    onFocus,
    style,
    InputProps,
    multiline,
    InputLabelProps,
    placeholder,
    className,
    margin,
    type,
    ...props }) {
    return (
        <div>
            <TextField
                {...props}
                variant={variant}
                margin={margin}
                required={required || false}
                fullWidth={fullWidth}
                onFocus={onFocus}
                id={id}
                className={className}
                placeholder={placeholder}
                InputProps={InputProps}
                InputLabelProps={InputLabelProps}
                label={label}
                multiline={multiline}
                name={name}
                style={style}
                error={error}
                disabled={disabled}
                helperText={errorText}
                value={value}
                type={type}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}
