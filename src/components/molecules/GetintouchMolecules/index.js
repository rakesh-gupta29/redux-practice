import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { NewInput, Button, TextArea } from "../../atoms";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import {collection,addDoc} from 'firebase/firestore'
import { firestore, firebase } from '../../../utils/firebase'

const useStyles = makeStyles((theme) => ({
    getInForm: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '0rem 4rem',
        [theme.breakpoints.down('md')]: {
        },
    },
    sndButton: {
        width: '50%',
        marginTop: '10%',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    }
}))

export function GetintouchMolecules({ ...props }) {
    const classes = useStyles()
    // const getintouchData = collection(db,"getintouch")


    const [getintouch, setGetintouch] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    let name, value

    const onChangeGet = (event) => {
        name = event.target.name
        value = event.target.value
        setGetintouch({ ...getintouch, [name]: value })
    }

    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

    const sumbitHandle = async (event) => {
        event.preventDefault()

        const {
            name,
            email,
            subject,
            message
        } = getintouch

        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {
            toast.error("Please fill in all the required fields !");
        }
        else {

            return new Promise((resolve, reject) => {
                firestore
                    .collection('getintouch')
                    .doc()
                    .set(getintouch)
                    .then((solve) => {
                        toast.promise(
                            resolveAfter3Sec,
                            {
                                pending: 'Please Wait',
                                success: 'Success Full 👌',
                                error: 'Somthing Went Wrong 🤯'
                            }
                        )
                        resolve();
                        setGetintouch({
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        })
                    })
                    .catch(err => {
                        reject(err);
                    })
            });
        }
    }

    return (
        <div {...props}>
            <form className={classes.getInForm} onSubmit={(event) => sumbitHandle(event)}>
                <NewInput
                    type="text"
                    placeholder='Name'
                    name="name"
                    value={getintouch.name}
                    onChange={onChangeGet}
                />
                <NewInput
                    type="email"
                    placeholder='Email'
                    name="email"
                    value={getintouch.email}
                    onChange={onChangeGet}
                />
                <NewInput
                    type="text"
                    placeholder='Subject'
                    name="subject"
                    value={getintouch.subject}
                    onChange={onChangeGet}
                />
                <TextArea
                    type="text"
                    placeholder='Your message area'
                    type="text"
                    rows='5'
                    name="message"
                    value={getintouch.message}
                    onChange={onChangeGet}
                />
                <Button name='Send to us' className={classes.sndButton} type='submit' />
            </form>
            <ToastContainer />
        </div>
    )
}

