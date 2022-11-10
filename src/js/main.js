const segundosPomodoro = 3000 //25 * 60 * 1000
const disparador = document.querySelector("#disparador")

disparador.addEventListener("click", () => {
    console.log("Disparador ativado")

    setTimeout(() => {
        console.log("Acabou o tempo");
        alert("O seu tempo de produção acabou!")

        clearInterval(contador)
    }, segundosPomodoro)

    let contador = setInterval("contadorDeSegundos()", 1000)
})

function contadorDeSegundos() {
    console.log("tick")
}

