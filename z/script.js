// let namePer = "1";
// let x = "Anton";

// alert("razdvatri"); // функция
// let y = prompt ("Сколько тебе лет?")
// alert(y)

// console.log(y, x, namePer);

// // + - * /
// let x2 = namePer + 10;
// console.log("2" + 2 - 2);
// let n = Number(prompt("Сколько прошло минут?"));
// let x = n%60 // 
// let y = (n - x)/60
// let z = y%24
// alert("так блэт =" +z  + ":" + x);
// let y = prompt("Введите ваше имя");
// alert("Hello, " + y + "!");
// let x = Number(prompt("Введите число"));
// let y = x - 1
// let z = x + 1
// alert("The next number for the number " + x + " is " + z);
// alert("The previous number for the number " + x + " is " + y);
// console.log("The next number for the number", x, "is", z, "The previous number for the number", x, "is", y);
let x = prompt("Введите кол-во учеников в классе A");
let y = prompt("Введите кол-во учеников в классе B");
let z = prompt("Введите кол-во учеников в классе C");
let e = x%2
let pA = (x - e)/2
let c = y%2
let pB = (y - c)/2
let d = z%2
let pC = (z - d)/2
let summ = pA + e + pB + c + pC + d
alert("покупаем " + summ + " парт")