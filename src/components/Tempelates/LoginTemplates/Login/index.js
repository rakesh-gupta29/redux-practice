import React, { useState, useEffect } from 'react'
import { makeStyles, Box } from '@material-ui/core';
import { Button, NewInput } from '../../../atoms'
import { useHistory } from 'react-router-dom'
// Import Firebase 
import { auth } from '../../../../utils/firebase'

//Redux
import { useDispatch } from 'react-redux';
import { emailSignInStart,googleSignInStart } from '../../../../Redux/Action'

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
        font: 'normal normal 15px/36px Gopher',
        margin: '5% 0%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        }
    }
}))



export const Login = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

    const [userProfile, setUserProfile] = useState({
        Email: '',
        Password: '',
    })

    const { Email, Password } = userProfile


    let name, value

    const handleOnChamge = (event) => {
        name = event.target.name
        value = event.target.value
        setUserProfile({ ...userProfile, [name]: value })
    }

    const handlesignWithGoogle = async() => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(emailSignInStart({ Email, Password }))
    }

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                history.push('/myaccount')
            }
        })
        return
    }, [userProfile])


    return (
        <Box className={classes.MainBox}>
            <h1 className={classes.Head}>Login your account</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <NewInput style={{ color: 'black' }}
                    placeholder="Email"
                    type='text'
                    required
                    name="Email"
                    value={userProfile.Email}
                    onChange={handleOnChamge}

                />
                <NewInput style={{ color: 'black' }}
                    placeholder="Password"
                    type='password'
                    required
                    name="Password"
                    value={userProfile.Password}
                    onChange={handleOnChamge}
                />
                <br/>
                <br/>
                <br/>
                {/*<h1 className={classes.forgot} onClick={() => history.push('/forgotpassword')}>Forgot Password</h1>*/}
                <Button name="Login" type="submit" />
            </form>
            <h1 style={{ textAlign: 'center', margin: '5% 0%' }}>or</h1>
            <Button name="Sign Up" onClick={() => history.push('/signup')} />
            <br />
            <Button name="Sign in With Google" onClick={handlesignWithGoogle} />
        </Box>
    )
}
