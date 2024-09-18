exports.handler=async(event)=>{
  console.log("cutting veggies ");
  return{
    statusCode:200,
    body:"Bought vegetables from the shop and cut vegetables finished"
  }
  
}