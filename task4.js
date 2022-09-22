//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

function numOut(a,b){
    const delayPrint = setInterval(function (){
        console.log(a);
        a++;
        if(a > b) clearInterval(delayPrint);
    },1000);
}
numOut(5,15);