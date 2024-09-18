exports.handler=async(event)=>{
  console.log("cutting veggies ");
  return{
    statusCode:200,
    body:"Bought vegetables from the shops and cut vegetables finished"
  }
  
}