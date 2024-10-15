console.log("before async code");

function PromiseFunction(resolve:any,reject:any){

    if(true){
        resolve("successfully async code executed")
    }
    else{
        reject("something went wrong")
    }
}

const result = new Promise(PromiseFunction);

result.then((success)=>{
    console.log(success);
    

})
.catch((error)=>{
    console.log(error);
    

})

console.log("after async code");









