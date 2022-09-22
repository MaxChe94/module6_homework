
// определить простое число или нет

function primeNum(n){
    n = Math.abs(n);
    result = -1;
    str ="";
    i = 2;
    if (n > 1000){
        result = 1
        } else if (n > 1){
            while (i <= Math.sqrt(n) && result != 2){
                result = (n % i === 0)? 2 : 0
                i++;
            }
        }
            
    switch(result){
        case -1: str ="введен 0 или 1";
        break;
        case 0: str ="число простое";
        break;
        case 1: str ="данные неверны";
        break;
        case 2: str ="число составное";
        break;
        default: str = "";
    }
    return str;
}
console.log(primeNum(5));