let bod = document.getElementById("bod")
let round = document.getElementById("round")


bod.addEventListener("click", () => {

    round.classList.toggle("actives")

    if (round.classList.contains("actives")) {
        document.body.style.background = "black"
        round.style.background= "green"

    }
    else {

        document.body.style.background = "white"
         round.style.background= "red"

    }
})

