import Navbar from "./Navbar"
import React,{useState,useEffect} from "react"
import  "./Login.css"




const Login =(props)=>{
  const [email,SetEmail]=useState("")
  const [pass,SetPass]=useState("")
  

  const onChangeEmail =(event)=>{
    SetEmail(event.target.value)
  }

  const onChangePass=(event)=>{
    SetPass(event.target.value)
  }

  useEffect(()=>{
  const Info={email:email,pass:pass}
  props.Information(Info)
  },[email,pass])

  // let clickCondition
  
  


  
  return (
    <>
      <body id="login-body">

      <div class="login-form">
        <form className="LoginForm">
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input id="logininput" type="email" placeholder="Email" autocomplete="nope" onChange={onChangeEmail}/>
            </div>
            <div class="input-field">
              <input id="logininput" type="password" placeholder="Password" autocomplete="new-password" onChange={onChangePass}/>
            </div>
          </div>
          <div class="action">
            <button type="submit" onClick={props.onClick}>sign in</button>
            <button onClick={props.signup}>Sign up</button>
          </div>
        </form>
      </div>

      </body>  
     
          </>
    
  )
}

export default Login