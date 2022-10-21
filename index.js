// concerned about writing the test cases first,creating/actual coding

function sum(...args){

    if(arguments.length===0)
    {
        return "Sum function should needs invoked with atleast 2 arguments"
    }
    else if(arguments.length===1){
        return "Sum function needs one arguments"
    }

    // a= Number(a)
    // b=Number(b)
    // return a+b

    const sumValue = [...args].reduce((a,c)=>a+Number(c),0)
    return sumValue
}
module.exports=sum;