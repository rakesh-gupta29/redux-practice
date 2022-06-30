import React, { useEffect, useState } from 'react';
// Css
import './App.css';
//Import Routes
import { Switch, Route } from 'react-router-dom'
import { Routes } from "./Routes";
//Animation
import { AnimatePresence } from 'framer-motion'
//Firebase
import { auth, firestore } from './utils/firebase';
import { storeUserProfile } from './utils/AuthConfig';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { SetCurrentUser, checkUserSession, rahul } from './Redux/Action'
//React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const dispatch = useDispatch();
  const [state, setstate] = useState(1)
  const selector = useSelector((state) => state.userReducer);


  const AuthListner = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await storeUserProfile(userAuth)
        userRef.onSnapshot(async (snapshot) => {

          dispatch(SetCurrentUser({ id: snapshot.id, ...snapshot.data() }))
          dispatch(rahul({ id: snapshot.id, ...snapshot.data() }))

        })
      }
      dispatch(SetCurrentUser(userAuth))

    })
  }

  useEffect(async () => {
    await AuthListner()
    dispatch(checkUserSession())
    return
  }, [0])


  return (
    <div className='App'>
      <ToastContainer />
      <AnimatePresence exitBeforeEnter>

        <Switch>
          {
            Routes.map((item, index) =>
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            )
          }
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
