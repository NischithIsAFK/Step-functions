exports.handler=async(event)=>{
  console.log("cutting veggies ");
  return{
    statusCode:200,
    body:"Bought vegetables and cut vegetables finished"
  }
  
}