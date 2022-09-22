//Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

let a = [111,2,0];
function evenCheck(arr){
    even = odd = j = 0;
    arr.forEach((element,index) => {
        if (typeof(element)=='number'){
            if (element == 0) {
                console.log("array["+index+"] = "+element);
                even=even+1;
            } else if (element%2 == 0)
            even=even+1 
            else 
            odd=odd+1
        }
    })
    return `even = ${even}, odd = ${odd}`;  
}

console.log(evenCheck(a));