const digits = [1, 2, 3, 4];
function addMultiply (newArr){
    let add = 0, multiply=1;
    for(let i=0; i<newArr.length; i++){
        add += newArr[i];
        multiply *= newArr[i];
    }
    console.log(` Given an array ${newArr} The sum is ${add} . The product is ${multiply}`)
}

addMultiply (digits)