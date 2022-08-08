const contador = document.getElementById("contar")
const sumar = document.getElementById("incr")
const restar = document.getElementById("decr")
const reset = document.getElementById("reset")

let numero = 0;

sumar.addEventListener("click", () => {
    numero++
    contador.innerHTML = numero;
    if (numero > 0) {
        document.getElementById("contar").style.color = "green";
    }
    else if (numero == 0) {
        document.getElementById("contar").style.color = "black";
    }

});

restar.addEventListener("click", () => {
    numero--
    contador.innerHTML = numero;
    if (numero < 0) {
        document.getElementById("contar").style.color = "red";
    }
    else if (numero == 0) {
        document.getElementById("contar").style.color = "black";
    }
})

reset.addEventListener("click", () => {
    numero = 0;
    contador.innerHTML = numero;
    document.getElementById("contar").style.color = "black"
})