// 1 спосіб: Цикл
/*let n = Number(prompt('Enter n:'));

function fibonachi(n) {
    let number;
    if (n >= 2) {
        number = fibonachi(n - 1) + fibonachi(n - 2);
    }
    else if (n < 0) {
        return 'Entered incorrect data';
    }
    else {
        number = n;
    }
    return number;
}
document.write(fibonachi(n));*/

//2 спосіб: Вивід заданої к-сті чисел Фібоначчі з масиву

let n = Number(prompt('Enter n:'));

function fibonachi(n) {
    let number;
    if (n >= 2) {
        number = fibonachi(n - 1) + fibonachi(n - 2);
    }
    else {
        number = n;
    }
    return number;
}

var fibSaver = [];
for (var i = 0; i < n; i++) {
    fibSaver.push(fibonachi(i));
    document.write(fibSaver[i] + '; ');
}

// 3 спосіб: Рекурсія
/*let n = Number(prompt('Enter n:'));

function fibonachi(n){
    return n < 2? n: fibonachi(n-1) + fibonachi(n-2);
}
document.write(fibonachi(n));*/
