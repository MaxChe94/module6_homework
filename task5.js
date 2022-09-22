//Hапишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n

const pow = (x,n) => {
    let result = x;
    for (let i = 1; i < n; i++){
        result*=x;
    }
    return result;
}
console.log(pow(2,3));