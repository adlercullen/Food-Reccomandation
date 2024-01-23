import "./Signup.css"
import React,{useState} from "react";

const Signup=(props)=>{
  
  const [userDetails,SetDetails]=useState({Name:"",Email:"",Pass:""})
  
  function onNameChange(event){
    SetDetails({...userDetails,Name:event.target.value})
  }
  
  function onEmailChange(event){
    SetDetails({...userDetails,Email:event.target.value})
  }

  function onPassChange(event){
    SetDetails({...userDetails,Pass:event.target.value})
  }

  props.userInformation(userDetails);
  
  return (
    <>
      <body id="signup-body">

      <div class="signup-form">
        <form className="signupForm" onSubmit={props.Signup}>
          <h1>Sign up</h1>
          <div class="content">
            <div class="input-field">
              <input  type="string" placeholder="User Name" autocomplete="new-password" onChange={onNameChange}/>
            </div>
            <div class="input-field">
              <input  type="email" placeholder="Email" autocomplete="nope" onChange={onEmailChange}/>
            </div>
            <div class="input-field">
              <input  type="password" placeholder="Password" autocomplete="new-password" onChange={onPassChange}/>
            </div>
          </div>
          <div class="action">
            <button >Sign up</button>
          </div>
        </form>
      </div>

      </body> 
      <h1>hello</h1>
    </>
  )
}

export default Signup