 function getapi(){
    return new Promise(function(resolve,reject){
        reject("sunny");
    })
}



getapi()
.then((data)=>{
    console.log(`weather is ${data}`)
})
.catch((data)=>{
    console.log(`ERROR : for ${data}`)
})