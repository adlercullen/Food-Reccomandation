import React,{useState} from "react"
import Navbar from "./Navbar"
import Data from "../Extrabuttons/Home/Data"
import Recipe from "../Extrabuttons/GetRecipe/Recipe"
import AddRecipe from "../Extrabuttons/AddRecipe/AddRecipe"

const Handler =(props)=>{
  const [click,Setclick]=useState({})
  const [recipes,Setrecipes]=useState([{}])
  
  const conditionHandler=(State)=>{
    Setclick(State)
  }

  const onClickRecipe=(recipe)=>{
    Setrecipes(recipe)
  }
  
  return (
    
    <>
      <Navbar States={conditionHandler} onSignout={props.signout} recipeInfo={onClickRecipe}/>
      {click.home && <Data />}
      {click.recipe && <Recipe  Recipes={recipes}  />}
      {click.contact && <AddRecipe/>}
      
    </>
  )
}

export default Handler