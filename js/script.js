let bod = document.getElementById("bod")
let round = document.getElementById("round")
// let Light = document.getElementById("Light")
let Dark = document.getElementById("Dark")

bod.addEventListener("click", () => {
    round.classList.toggle("active")

    if (round.classList.contains("active")) {
        document.body.style.background = "black"
        Dark.classList.remove("fa-moon")
        Dark.classList.add("fa-lightbulb")


    }

    else {
        document.body.style.background = "white"
        Dark.classList.add("fa-moon")
        Dark.classList.remove("fa-lightbulb")
    }


})

