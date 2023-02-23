// import { Link } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import  {Link}  from 'react-router-dom';
function SignUp(props) {
  const [state,setState]=useState({
    fname:"",
    lname:"",
    email:"",
  })
  // const [LoggedIn,SetLoggedIn]=useState(1);
  function HandleSubmit(event){
    event.preventDefault();
    let {fname,lname,email}=state;
    console.log(fname,lname,email);
    fetch("http://localhost:5000/SignUp",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname:fname,
        lname:lname,
        email:email,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister");
      if(data.status==="ok"){
        props.UpdateLoggedIn(0);
        props.UpdateName(fname);
      }
    });
  }

  return (props.loggedIn)?
    (<div className="text-center">
      <main class="form-signin w-100 m-auto">
        <form action="/SignUp" method="post" onSubmit={HandleSubmit}>
          <img
            class="mb-4"
            src="images/signin.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">SignUp to flavourly</h1>
          <div class="form-floating">
            <input
              type="text"
              class="form-control top"
              id="floatingFirstName"
              placeholder="name"
              name="first_name"
              autoComplete='off'
              onChange={(event) => setState({ fname: event.target.value,
              lname:state.lname,
              email:state.email, })}
            />
            <label for="floatingFirstName">First name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control middle"
              id="floatingLastName"
              placeholder="name"
              name="last_name"
              autoComplete='off'
              onChange={(event) => setState({ lname: event.target.value,
              fname:state.fname,
              email:state.email})}
            />
            <label for="floatingLastName">Last name</label>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control bottom"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              autoComplete='off'
              onChange={(event) => setState({ email: event.target.value,
              fname:state.fname,
              lname:state.lname, })}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign Me Up
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; flavourly</p>
        </form>
      </main>
    </div>):(
      <div>
        <h1>Signed In Successfully!</h1>
        <Link to="/">Website</Link>
      </div>
    );
}

export default SignUp
