function Factorial(n) {

    let result = 1;

    for(let i=1; i<=n; i++){

        result = result * i;

    };



    return result; 
};

console.log(Factorial(3));

/* 두번째 방법 */

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

  alert( factorial(5) ); // 120