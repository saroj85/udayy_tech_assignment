import React, { useState, useEffect } from 'react';
import LoginScreen from './component/login';
import { getFromSession, saveInSession, removeFromSession, staticUsers } from './utils'
import Home from './component/home'

const App = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [errors, setErrors] = useState(undefined)

  const onLogin = (email, password) => {

    let userFound = undefined;
    let isPassFound = undefined;

    staticUsers.forEach(user => {
      if (user.email === email) {
        userFound = true;
        if (user.password === password) {
          isPassFound = true;
          setIsLoggedIn(user);
          saveInSession('_user_', user)
        }
      }
    })

    let cloneErrors = errors ? Object.assign({}, errors) : {};
    if (!userFound) {
      cloneErrors['email'] = 'User Not Found'
    }
    if (!isPassFound) {
      cloneErrors['password'] = 'Password Not Found'

    }
    setErrors(cloneErrors)
  }


  const logOut = () => {
    removeFromSession('_user_')
    setIsLoggedIn(undefined)
    setErrors(undefined)
  }


  useEffect(() => {

    const userFromSession = getFromSession('_user_')
    if (userFromSession) {
      setIsLoggedIn(userFromSession)
    }
  }, []);


  return (
    <div>
      {!isLoggedIn ? <LoginScreen errors={errors} onLogin={onLogin} /> :

        <Home logOut={logOut} />}
    </div>
  )
}

export default App;
