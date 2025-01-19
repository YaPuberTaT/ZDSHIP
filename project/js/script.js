// Ввыодим проверку в консоль
console.log("Скрипт работает");

// Изменение текста , заголовка


// Обработка клика по кнопке
let button = document.querySelector("button");
button.addEventListener("click", function() {
    let heading = document.querySelector("h1");
    heading.textContent = "РАботает?";
} )

// При нажатии на кнопку менялся фон и текст
let whiteback = document.querySelector("#change_color");
whiteback.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black";  // Меняем фон на чёрный
        whiteback.textContent = "Белая тема";           // Меняем текст кнопки
    } else {
        document.body.style.backgroundColor = "white";  // Меняем фон на белый
        whiteback.textContent = "Тёмная тема";          // Меняем текст кнопки
    }
});

// Скрытие/Показание изображения
let hidenbuttonimg = document.querySelector("#hidenimg")
let hidimg = document.querySelector("img");
hidenbuttonimg.addEventListener("click", function(){
    if (hidimg.style.display == "none") {
        hidimg.style.display = "block";
    } else {
        hidimg.style.display = "none";
    }
});


