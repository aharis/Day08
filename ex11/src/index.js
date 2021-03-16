function mathTest(x, y) {

    if(x < 0 ||  y < 0) {

        return;
    }
}
return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));

mathTest(2, 2);
console.log(mathTest(2, 2));
console.log(mathTest(-2, 2));
console.log(mathTest(2, -2));
console.log(mathTest(2, 8));
console.log(mathTest(3, 3));
console.log(mathTest(0, 0));
console.log(mathTest());




module.expors = mathTest;