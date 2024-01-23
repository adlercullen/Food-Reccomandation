import React,{useEffect, useState} from "react"
import Login from "./components/Login"
import Handler from "./components/Handler"
import Signup from "./components/Signup"
import './App.css'


const sendData=async(object)=>{
  try{
  const response =await fetch("http://localhost:8080/form",{
  method: "Post",
  body: JSON.stringify(object),      
  headers:{
  "Content-Type":"application/json"}});
  const data=await response.json()
  return data;    
  }
  catch(error){
    console.log(error+"has ocuured")
  }

}


export default function App() {

  const [page,Setvalid]=useState({loginpage:true,signin:false,signup:false})
  const [form,Setform]=useState({})
  const [loginData,SetLoginData] =useState([{}])
  const [userDetails,SetDetails]=useState([{}])

  useEffect(()=>{
    fetch("http://localhost:8080/form").then(response=>{
      return response.json()
    }).then(data=>{
      SetLoginData(data)
    })
    
  },[])

  function LoginOnclick(event){
    event.preventDefault()
    console.log(loginData)
    console.log(form)
    if(form.email=="adarsh@gmail.com" && form.pass=="adarsh555"){
        Setvalid({loginpage:false,signin:true,signup:false});
    }                       
    // this upper if  is to use when the server is inactive
    
    let secure=false;
    const security=loginData.filter(values=>{
      if(values.Email==form.email && values.Pass==form.pass){
        Setvalid({loginpage:false,signin:true,signup:false});
        alert(`Welcome ${values.Name}`)
        secure=true;
        return values;
      }
    })
    if(secure==false){
      alert("ID or Password invalid")
    }
    

  }
  const formdata=(event)=>{
    Setform(event)
  }
  // console.log(form)

  function onSignOut(){
    Setvalid({loginpage:true,signin:false,signup:false})
  }
  
  function onLoginPageSignup(event){
    event.preventDefault()
    Setvalid({loginpage:false,signin:false,signup:true})
  }

  const userInfo=(userData)=>{
    SetDetails(userData)
  }


  
  async function  onSignup(event){
    event.preventDefault();
    // alert("Yours Credientials Has been Updated")
    if(userDetails.Name.length>0 && userDetails.Email.length>0 && userDetails.Pass.length>0){
      sendData(userDetails)
      Setvalid({loginpage:true,signin:false,signup:false})
       alert("Yours Credientials Has been Updated")
    }
    else{
      alert("Please Fill The Complete Form")
    }
  
  }
  
  // console.log(page)
  
  
  return (
      <>
        {page.loginpage && < Login onClick={LoginOnclick} Information={formdata} signup={onLoginPageSignup}/> }
        {page.signin && < Handler signout={onSignOut}/>}
        {page.signup && <Signup Signup={onSignup} userInformation={userInfo}/>}
      </>
  )
}
