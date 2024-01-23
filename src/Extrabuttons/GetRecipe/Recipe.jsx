import "./Recipe.css"
import React,{useState} from "react";
import Info from "./Info"
import Select from "./Select";

const Recipe=(props)=>{
  
  const [dish,Setdish]=useState("")
  const [recipes,Setrecipes]=useState([{}])
  const [clickCategory,Setcategory]=useState("")

  const onDishChange=async (event)=>{
    Setdish(event.target.value)
    

    const filterdata=props.Recipes.filter(values=>{
      console.log(values.Dish)
      if( (values.Dish &&  values.Dish.toLowerCase().includes(event.target.value.toLowerCase()))
         ||(values.Ingredients &&  values.Ingredients.toLowerCase().includes(event.target.value.toLowerCase())) ){
        // console.log(values.Dish.includes(event.target.value))
        return values
      }
    })
    Setrecipes(filterdata);
    // console.log(dish)
  }

  const categorySelect=(event)=>{
    Setcategory(event.target.value);
  }
  
  
  return (
    <div className="recipe-background">
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">#</span>
  <input type="text" class="form-control" placeholder="Mention The Dish/Ingredient Name" aria-label="Username" aria-describedby="addon-wrapping" onChange={onDishChange} />
</div><br/>
      
   <select onChange={categorySelect} className="select-button">
     <option>Select</option>
     <option>Veg</option>
    <option>Non-Veg</option>
   </select>

    <Select recipes={props.Recipes} select={clickCategory}/><br/>

  
      
      {recipes.length==0?<p>No items found</p>:recipes.map((data,index)=>
    <Info 
      key={index}
      image={`/images/${data.Dish}.png`}
      dish={data.Dish}
      category={data.Category}
      ingredients={data.Ingredients}
      description={data.Description}
      procedure={data.Procedure}
      time={data.Time}
      />
  )}
      </div>
  )
}

export default  Recipe