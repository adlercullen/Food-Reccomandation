import "./Info.css"

const para="adarsh" 
  
function Info(props){
  // const newString=props.ingredients.replace(' ',<br></br>)
  // const string=props.ingredients
  // console.log(string);
  // const originalString = props.ingredients;
  // const stringWithBreaks = originalString.replace('  ', '<br/>');
  
    
  return(
    <>
      <br/>
      <br/>
       <div className="image">
        <img src={props.image}/>
      </div>
    <div id="Info">
      <div className="column upperBox">
        <div className="box-1">
          <h1>Dish :{props.dish}</h1>
        </div>
        
        <div className="box-2">
          <h2>Type :{props.category}</h2>
        </div>

        <div className="box-1">
          <h2>{props.dish} Time: {props.time}</h2>
        </div>
       </div> 

      <br/>
            
      <div className="column steps">
        
        <div className="procedure">
          <h2>Procedure </h2>
        {/* <h1>Procedure</h1> */}
          
          <h3 style={{fontSize:"24px"}}>{props.procedure}</h3>
          </div>
      </div>

      <br/>
      
      <div className="column lowerBox">
        <div className="box-3">
          <h3>Ingredients :{props.ingredients}</h3>
        </div>
        <div className="box-4">
          <h3>Description :{props.description}</h3>
        </div>    
       </div> 
    </div>
    </>
  )
}

export default Info;