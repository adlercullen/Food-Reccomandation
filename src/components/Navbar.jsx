import React,{useState} from "react"
import "./Navbar.css"

const Navbar =(props)=>{

  const [current,Setcurrent]=useState({home:true,recipe:false,contact:false})
  const [recipes,Setrecipes]=useState([{}])

  const onChangeHome=()=>{
    Setcurrent({home:true,recipe:false,contact:false})
  }
  
    const onChangerecipe=async ()=>{
    Setcurrent({home:false,recipe:true,contact:false})
    const response=await fetch("http://localhost:8080/recipe");
    const data=await response.json();
    props.recipeInfo(data);
  }

  
  
    const onChangecontact=()=>{
      Setcurrent({home:false,recipe:false,contact:true})
  }

  props.States(current)
  
  
  return (
<div className="navbar">
  <a href="#" onClick={onChangeHome}>Home</a>
  <a href="#" onClick={onChangerecipe}>Get Recipe</a>
  {/* <a href="#">Services</a> */}
  <a href="#" onClick={onChangecontact}>Add Recipe</a>
  <a href="#" class="signout" onClick={props.onSignout}>Sign Out</a>
</div>
  )

}

export default Navbar