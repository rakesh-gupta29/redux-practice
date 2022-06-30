import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../";
import { NewInput } from '../../atoms'
// import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {firestore} from '../../../utils/firebase'
import {
    TextField,
} from '@material-ui/core';




export function InputPra() {

    const [allData, setAllData] = useState({
        email: '',
        password: ''
    })

    let name, value

    const allUser = (event) => {
        name = event.target.name
        value = event.target.value

        setAllData({ ...allData, [name]: value })
    }

    // const resolveAfter1Sec = new Promise(resolve => setTimeout(resolve, 1000));

    const onSubmit = async (event) => {
        event.preventDefault()

        // const { email, password } = allData

        firestore.database().ref('userdata').push(allData);
    }

    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])

    return (
        <div>
            <Navbar />

            <div style={{ width: '100%', height: '100vh', border: '2px solid red' }}>
                <div style={{ width: '80%', height: '80%', margin: '5% auto', border: '2px solid red' }}>

                    <NewInput
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={allData.email}
                        onChange={allUser}
                    />
                    <NewInput
                        label="password"
                        placeholder="password"
                        name="password"
                        value={allData.password}
                        onChange={allUser}
                    />
                    <br />
                    <TextField placeholder="contact" variant="outlined"/>
                    <br />
                    <button onClick={onSubmit}>submit</button>
                    <br />
                    {/*<ToastContainer />*/}

                </div>
            </div>




            <Footer />
        </div>
    )
}
