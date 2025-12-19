// let buttonText = "Не корзина";

// document.querySelector(".container__cart").addEventListener("click", function() {
//     this.classList.toggle("active");
// });



// document.querySelector(".container__cart")

// let a;
// a = "Kana";
// if (a =="Kanat") {
//     alert (56465464566);
// } else {
//     alert ("false")
// }

// a = "321"

// let buttonText = "Корзина | 1";
// let buttonText2 = "Не корзина";
// document.querySelector(".container__cart").addEventListener("click",function(){
//     if(this.textContent == buttonText2) {
//         this.textContent = buttonText;
//     } else{
//         this.textContent = buttonText2
//     }
// })

let buttonText;
let buttonText2 = "Не корзина";
document.querySelector(".container__cart").addEventListener("click",function(){
        buttonText = this.textContent;
        this.textContent = buttonText2;
        buttonText2 = buttonText;
})


let buttonsHeader = [
       "Пицца",
       "Паста",
       "Супы",
       "Салаты",
        "Напитки",
       "Десерты",
       "Бакалея",
       "Антипасти",
       "Акции",
       "Комбо",
       "Контакты"
];

const list = document.querySelector('.filter-cont');
        if (list) {

        }