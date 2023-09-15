import { setPlayerName, checkWinner, selectElement, showWinner } from "./functions.js";

let labelPly = document.getElementsByTagName("label")
let plyPoints = document.getElementsByTagName("p")
let plyReady = document.getElementsByTagName("span")

let btnSetName1 = document.getElementById("btnply1")
let btnSetName2 = document.getElementById("btnply2")
let btnInit = document.getElementById("initGame");

const elements = ["Piedra", "Papel", "Tijera"]

let winner;
let winnerText = document.getElementById("winnerText")

class Player {
    #name;
    #points;
    #choice;

    constructor(name, points, choice) {
        this.#name = name;
        this.#points = points;
        this.#choice = choice;
    }

    setName(name){
        this.#name = name
    }

    setPoints(points){
        this.#points = points
    }

    setChoice(choice){
        this.#choice = choice
    }

    getName(){
        return this.#name
    }

    getPoints(){
        return this.#points
    }

    getChoice(){
        return this.#choice
    }

    increasePoints(){
        this.#points++
    }
}

let player1 = new Player("", 0, null);
let player2 = new Player("", 0, null);


btnSetName1.addEventListener("click", ()=>{
    setPlayerName("ply1Name", player1, labelPly[0])
    btnSetName1.style.display = "none"
});

btnSetName2.addEventListener("click", ()=>{
    setPlayerName("ply2Name", player2, labelPly[1])
    btnSetName2.style.display = "none"
});

const checkNames = ()=>{
    if(player1.getName() !== "" && player2.getName() !== ""){
        btnInit.style.display = "block"
        clearInterval(intervalCheck)
    }
}

const intervalCheck = setInterval(checkNames, 1000)

btnInit.addEventListener("click", ()=>{
    player1.setChoice(null)
    player2.setChoice(null)
    plyReady[0].textContent = ""
    plyReady[1].textContent = ""
    winnerText.textContent = ""

    plyPoints[0].textContent = player1.getPoints()
    plyPoints[1].textContent = player2.getPoints()

    btnInit.style.display = "none"
    
    window.addEventListener("keydown", selectElement)

    const setWinner = ()=>{
        if(player1.getChoice() !== null && player2.getChoice() !== null){
            removeEventListener("keydown", selectElement)
            clearInterval(intervalSetWinner)
            winner = checkWinner(player1, player2)
            console.log(`Seleccion de ${player1.getName()} = ${player1.getChoice()}`)
            console.log(`Seleccion de ${player2.getName()} = ${player2.getChoice()}`)
            console.log("NUMERO GANADOR ES: " + winner)
            if(winner === 0){
                showWinner(player1, 0)
            }else if(winner === 1){
                showWinner(player2, 1)
            }else{
                winnerText.textContent = `¡Empate!`
            }
            btnInit.style.display = "block"
            btnInit.textContent = "Continuar"
        }
    }
    
    const intervalSetWinner = setInterval(setWinner, 500)

})

export {player1, player2, elements, plyReady, plyPoints, winnerText}
