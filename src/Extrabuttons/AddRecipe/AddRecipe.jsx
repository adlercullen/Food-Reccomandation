import "./AddRecipe.css"
import React,{useState} from "react";



const AddRecipe=()=>{


const [AddRecipe,SetRecipe]=useState({Dish:"",Category:"",Time:"",Ingredients:"",Procedure:"",Description:""})

  const onChangeDish=(event)=>{
    SetRecipe({...AddRecipe,Dish:event.target.value});
  }
  const onChangeCategory=(event)=>{
    SetRecipe({...AddRecipe,Category:event.target.value});
  }
  const onChangeTime=(event)=>{
    SetRecipe({...AddRecipe,Time:event.target.value})
  }
  const onChangeInstructions=(event)=>{
    SetRecipe({...AddRecipe,Ingredients:event.target.value});
  }
  const onChangeProcedure=(event)=>{
    SetRecipe({...AddRecipe,Procedure:event.target.value})
  }
  const onChangeDescription=(event)=>{
    SetRecipe({...AddRecipe,Description:event.target.value});
  }
  

  const sendData=async(object)=>{
    try{
    const response =await fetch("http://localhost:8080/recipe", { method: 'POST',
    headers: new Headers(
    {'Content-Type': 'application/json'}),
    body: JSON.stringify(object)
    });
      
    return response;
      
    }
    catch(error){
      console.log(error)
      
    }

  }

  const onSubmitHandler=async (event)=>{
    event.preventDefault()
    const response=await sendData(AddRecipe);
    console.log(response)
    if(response){
        alert("database added successfully");
    }
    else{
      alert("Server is inactive");
    }

    
    
    SetRecipe({Dish:"",Category:"",Time:"",Ingredients:"",Procedure:"",Description:""})

  }
  
  return (
    <div className="AddRecipe-background">
      
      <form onSubmit={onSubmitHandler}>
        <div id="form">
          <div>
            <label>Dish</label>
            <input type="string" value={AddRecipe.Dish} onChange={onChangeDish}/>
          </div>
            
          <div>
            <label>Category</label>
            <input type="string" value={AddRecipe.Category} onChange={onChangeCategory}/>
          </div>  

          <div>
            <label>Time</label>
            <input type="string" value={AddRecipe.Time} ng-model="demoTime" onChange={onChangeTime}/>
          </div>
  
          <div>
            <label>Ingredients</label>
            <textarea cols="24" rows="5" value={AddRecipe.Ingredients} onChange={onChangeInstructions}/>
          </div>

          <div>
            <label>Procedure</label>
            <textarea cols="24" rows="5" value={AddRecipe.Procedure} onChange={onChangeProcedure}/>
          </div>
  
          <div>  
            <label>Description</label>
            <textarea type='text' cols="24" rows="5" value={AddRecipe.Description} onChange={onChangeDescription}/>
          </div>

          <button>Submit</button>
          
        </div>
        
      </form>
      
    </div>
  )
}

export default AddRecipe
