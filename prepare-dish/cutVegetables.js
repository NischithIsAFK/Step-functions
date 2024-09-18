exports.handler=async(event)=>{
  console.log("cutting veggies ");
  return{
    statusCode:200,
    body:"cutting vegetables finished"
  }
  
}