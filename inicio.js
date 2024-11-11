var productos = document.querySelectorAll(".producto")
var modal = document.querySelector(".modal")
productos.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        modal.style.display = "grid"
        modal.classList.add("mostrar")
    })
})

var close = document.querySelector(".close")
close.addEventListener("click", function () {
    modal.style.display = "none"
})