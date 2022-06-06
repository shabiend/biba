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
$("button").click(() => {
    let login = $("#login").val();
    let pass = $("#pass").val();
    if (login == "admin" && pass == "0407") {
        $("h1").css("color", "green").text("Вы вошли")
    } else if (login == "admin" && pass != "0407") {
        $("h1").css("color", "yellow").text("Пароль некорректный")
    } else (
        $("h1").css({ "color": "red", "font-weight": "300 " }).text("Ошибочка вышла")
    )
})

// let bt = document.querySelector("button");
// bt.addEventListener("click", () => {

// })