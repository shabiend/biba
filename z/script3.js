// DOM - Document Object Model
// let h = document.querySelector("h1");
// h.classList.add('red')
// h.innerText = "Antosha"

// написать страницу, в которой есть два поля, для логина и пароля
// если логин admin  а пароль 0407 то заголовок поменять на "Вы вошли" и покрасить в зеленый цвет
// Если пароль некорректный - так и написать и поставить желтый цвет
// если все не правильно, то написать "ошибочка вышла" красным цветом

// $("button").click(() => {
//     let color = $("#color").val();
//     let text = $("#text").val();
//     $("h1").css("color", color).text(text);
// })
// $("button").click(() => {
//     let login = $("#login").val();
//     let pass = $("#pass").val();
//     if (login == "admin" && pass == "0407") {
//         $("h1").css("color", "green").text("Вы вошли")
//     } else if (login == "admin" && pass != "0407") {
//         $("h1").css("color", "yellow").text("Пароль некорректный")
//     } else (
//         $("h1").css({ "color": "red", "font-weight": "300 " }).text("Ошибочка вышла")
//     )
// })

// let bt = document.querySelector("button");
// bt.addEventListener("click", () => {

// })
$("#button").click(() => {
    let a = $("#a").val();
    let b = $("#b").val();
    let c = $("#c").val();
    let d = (Math.pow(b, 2) - 4 * a * c)
    $("#disc").text(d);
    let x, y, z
    if (d < 0) {
        $("#answer").text("fuck off")
    } else if (d == 0) {
        x = (-1 * b) / (2 * a)
        $("#answer").text(x)
    } else {
        y = ((-b) + Math.sqrt(d)) / 2 * a
        z = ((-b) - Math.sqrt(d)) / 2 * a
        $("#answer").text("x1=", y, "x2=", z)
    }
})

// let k = 0
// let i = Number(prompt("числа"));
// while (i != 0) {
//     k = k + i;
//     i = Number(prompt("числа"))
// }
// console.log(k)
// const t = 5
// if (true) {
//     let x = 1
//     var x1 = 2
// }
// t = 5
// console.log(x1);
// console.log(x);

// let k = 0
// let x = 0
// let i = Number(prompt("числа"));
// while (i != 0) {
//     k = k + i
//     i = Number(prompt("числа"))
//     x++
// }
// let n = k/x
// console.log(n)

// let n = 0
// let x = 0
// let i = Number(prompt("числа"));
// let k = i
// while (i != 0) {
//     i = Number(prompt("числа")) 
//     n++
//     if (i > k) {
//         k = i
//         x = n
//     }

// }
// console.log(x)

// let b = 0;
// let i = Number(prompt("число1"));
// let k = Number(prompt("число2"));
// while (b != i && b != k) {
//     b++
//     if (i % b == 0 && k % b == 0) {
//         console.log(b)
//     };
// }

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(getRandomIntInclusive(0, 50))
// let x = getRandomIntInclusive(0, 50);
// let n = 0
// while (n != 10) {
//     n++
//     i = Number(prompt("угадайте число"))
//     // alert(x, n);
//     if (i == x) {
//         alert("поздравляем, вы угадали с "+ n+" попыток");
//         break
//     } else if (i < x) {
//         alert("загаданное число больше введенного")

//     } else {
//         alert("загаданное число меньше введенного")
//     }
// }
// if (n == 10) {
//     alert("В следующий раз повезет!")
// }

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(getRandomIntInclusive(0, 2))

// let x = 0

let b = 0;
let c = 0;
let d = 0;
$("#buttonSuEfA").click(() => {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    // console.log(getRandomIntInclusive(0, 2))

    let x = getRandomIntInclusive(0, 2)
    let a = $("#SuEfA").val();
    if (x == 0) {
        $("#cchoose").text("камень")
    } else if (x == 1) {
        $("#cchoose").text("ножницы")
    } else {
        $("#cchoose").text("бумага")
    }
    if (x == 0 && a == 0 || x == 1 && a == 1 || x == 2 && a == 2) {
        $("#bang").text("у вас ничья!");
        b++;
        $("#draw").text(b)
    }
    else if (x == 1 && a == 0 || x == 2 && a == 1 || x == 0 && a == 2) {
        $("#bang").text("вы победели!");
        c++;
        $("#win").text(c)
    }
    else if (x == 2 && a == 0 || x == 1 && a == 2 || x == 0 && a == 1) {
        $("#bang").text("вы проиграли!");
        d++
        $("#loose").text(d)
    } else {
        alert("введено неверное значение!")
    }
});
// console.log("введено неверное значение");

// x = prompt("")
//     alert(x[3]);
// let y = (x.length - 2)
//     alert(x[y])
//     alert(x.substr(0,5))
// let z = x.slice(0,y)
//     alert(z)
//     alert(x.length)

// let x = prompt("");
// let y, z, x1, x2
// // alert(x.length);
// y = Math.floor(x.length / 2) + x.length % 2;
// // alert(x[y])
// z = x.slice(0,y);
// alert(x.slice(y) + z)

// y = x.indexOf(" ");
// // alert(y)
// z = x.slice(0,y);
// alert(x.slice(y)+x[y]+z)

// y = x.indexOf("h");
// z = x.lastIndexOf("h");
// x1 = x.slice(0, y);
// x2 = x.slice(z+1);
// alert(x1 + x2)
// y = x.replace(/@/g, "");
// alert(y)
// let i = 0;
// for (let x = 1; x<=99; x+=2) {
//     i = i += x
// }console.log(i)

let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}