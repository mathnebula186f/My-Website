import React from 'react'
import { useState } from 'react'
import App from './App'
import { Route,Routes } from 'react-router-dom'
import AboutAuthor from './AboutAuthor'
import Academy from './Academy'
import SignUp from './SignUp'

function MainRouter() {
  const[first_name,SetFirstName]=useState("");
  function UpdateName(name){
    SetFirstName(name);
  }
  const [LoggedIn, SetLoggedIn] = useState(1);
  function UpdateLoggedIn(n){
    SetLoggedIn(n);
  }
  return (
    <Routes>
        <Route path='/' element={<App firstName={first_name}/>}/>
        <Route path='/aboutAuthor' element={<AboutAuthor/>}/>
        <Route path='/Academy' element={<Academy/>} />
        <Route path="/SignUp" element={<SignUp UpdateName={UpdateName} loggedIn={LoggedIn} UpdateLoggedIn={UpdateLoggedIn}/>} />
    </Routes>
  )
}

export default MainRouter
