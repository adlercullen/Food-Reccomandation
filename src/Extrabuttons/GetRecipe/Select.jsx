import "./Select.css"
import React from "react"


const Select =(props)=>{
  
  const category_array =props.recipes.filter((element)=>{
    console.log(element)
    if(props.select==element.Category){
      return element
    }
  })
  return(
   <div className="select-output">
     <h3>Menu: </h3> 
      {category_array.map((item,index)=>
          <span className="menu" key={index}>{item.Dish}</span>
        
  )}
   </div> 
  )
}

export default Select;