let carModel = "BMW"

let = result = `I have car with model ${carModel}`

console.log(result);

// ? Number

let a = 10;
let b = "qwertyu";

// ? value as a string

console.log(a+b);

// ? value as a number
console.log(a-b);
console.log(a/b);
console.log(a*b);

// ? from string to number
console.log(Number(a));

// ? From number to string

console.log("number converted to string"+ a.toString());

// ? toFixed

let num = 45.78439878483;

console.log(num);

document.write(num.toFixed(0))

// ? cheksiz

console.log(Infinity);

// ? Ildizdan chiqarish

console.log(Math.sqrt(num));


// ? =============================== Vazifa ===============================

let c = 2;
let d = 3;

console.log(Math.sqrt(Math.sqrt((c**3-d**3)+(c**3+d**3))));

// ? =============================== Vazifa 2 ===============================

let e = 8;
let f = 5;

console.log(Math.sqrt(Math.sqrt((e**3-f**3)+(e**3+f**3))));

// ? =============================== Vazifa 3  ===============================

let g = 4;
let h = 9;

console.log((1/6*Math.sqrt(g)+1/3*Math.sqrt(h))**2);


// ? =============================== Vazifa 4 ===============================

function sayHello(k) {
    result = k.toString()

    let m = result.slice(0,1);
    
    let n = result.slice(1,2);

    let o = result.slice(2,3);

    return o + n + m;
}

console.log(sayHello(231));

// ? =============================== Vazifa 5 ===============================

function sayHello2(r, n, a, b) {
    return (1+r/100)**n/Math.sqrt(a**2+b**2);
}

console.log(sayHello2(3, 2, 4, 5));

// ? =============================== Vazifa 6 ===============================

function sayHello3(xl, yl, x2, y2) {
    return Math.sqrt((x2-xl)**2+(y2-yl)**2)
}

console.log(sayHello3(-1.4, 7.9, 6.1, 9.9));