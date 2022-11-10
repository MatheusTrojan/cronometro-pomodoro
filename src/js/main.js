const segundosPomodoro = 3000 //25 * 60 * 1000
const disparador = document.querySelector("#disparador")

disparador.addEventListener("click", () => {
    console.log("Disparador ativado")
    setTimeout(() => {
        console.log("Acabou o tempo");
    }, segundosPomodoro)
})

