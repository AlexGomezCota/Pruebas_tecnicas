const arr2 = [1, 2, 4, 5]

function doubleIt(){
   return arr2.map( x => x * arr2.length);
    
};
console.log(`Given an array ${arr2} The output should be ${doubleIt (arr2)} `)