import React, { useEffect, useState } from 'react'
//Material ui
import { makeStyles, Box } from '@material-ui/core';
//Atoms
import { Button, NewInput } from '../../../atoms'
//Routes
import { useHistory } from 'react-router-dom'
//Redux
import { signUpUserStart } from '../../../../Redux/Action'
import { useDispatch } from 'react-redux';

//Material Ui Style
const useStyles = makeStyles((theme) => ({
    MainBox: {
        width: '30%',
        backgroundColor: '#fff',
        color: 'black',
        padding: '2%',
        borderRadius: '5%',
        position: 'absolute',
        top: '35%',
        right: "20%",
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            margin: 'auto',
            marginBottom: '5%',
            position: 'relative',
            top: '0%',
            right: "0%",
        }
    },
    Head: {
        font: 'normal normal 24px/48px Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            textAlign: 'center'
        }
    },
    forgot: {
        float: "right",
        font: 'normal normal 15px Gopher',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        }
    }
}))

export const Signup = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch();

    //State
    const [userProfile, setUserProfile] = useState({
        displayName: '',
        Email: '',
        Password: '',
        confirmPAssword: '',
    })

    // Distructure
    const { displayName, Email, Password, confirmPAssword } = userProfile

    let name, value

    //Onchange Function
    const handleOnChange = (event) => {
        name = event.target.name
        value = event.target.value
        setUserProfile({ ...userProfile, [name]: value })
    }

    //SignUp Submit Function
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(signUpUserStart({ displayName, Email, Password, confirmPAssword }));
    }

    return (
        <Box className={classes.MainBox}>
            <h1 className={classes.Head}>Register account now</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <NewInput
                    style={{ color: 'black' }}
                    placeholder="User Name"
                    type='text'
                    required
                    name="displayName"
                    value={userProfile.displayName}
                    onChange={(handleOnChange)}
                />
                <NewInput
                    style={{ color: 'black' }}
                    placeholder="Email"
                    type='text'
                    required
                    name="Email"
                    value={userProfile.Email}
                    onChange={handleOnChange}
                />
                <NewInput
                    style={{ color: 'black' }}
                    placeholder="Password"
                    type='password'
                    required
                    name="Password"
                    value={userProfile.Password}
                    onChange={handleOnChange}
                />
                <NewInput
                    style={{ color: 'black' }}
                    placeholder="Confirm Password"
                    type='password'
                    required
                    name="confirmPAssword"
                    value={userProfile.confirmPAssword}
                    onChange={handleOnChange}
                />

                <br /><br />
                <br /><br />
                <h1 className={classes.forgot} onClick={() => history.push('/login')}>Already have an Account</h1>
                <br /><br />
                <br /><br />
                <Button name="Sign Up" type="submit" />
            </form>
        </Box>
    )

}
