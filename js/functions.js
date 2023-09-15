import { player1, player2, plyReady, plyPoints, elements, winnerText } from "./index.js";

const setPlayerName = (idValue, ply, labelPly)=>{
    let nameValue = document.getElementById(idValue);
    ply.setName(nameValue.value)
    labelPly.textContent = `${ply.getName()}`
    nameValue.style.display = "none"
}

const selectElement = (e)=>{
    if(e.code === "KeyA"){
        player1.setChoice(elements[0])
        plyReady[0].textContent = `${player1.getName()} esta listo/a`
    }else if(e.code === "KeyW"){
        player1.setChoice(elements[1])
        plyReady[0].textContent = `${player1.getName()} esta listo/a`
    }else if(e.code === "KeyD"){
        player1.setChoice(elements[2])
        plyReady[0].textContent = `${player1.getName()} esta listo/a`
    }
    else if(e.code === "KeyS"){
        player1.setChoice(elements[Math.round(Math.random() * 2)])
        plyReady[0].textContent = `${player1.getName()} esta listo/a`
    }

    if(e.code === "ArrowLeft"){
        player2.setChoice(elements[0])
        plyReady[1].textContent = `${player2.getName()} esta listo/a`
    }else if(e.code === "ArrowUp"){
        player2.setChoice(elements[1])
        plyReady[1].textContent = `${player2.getName()} esta listo/a`
    }else if(e.code === "ArrowRight"){
        player2.setChoice(elements[2])
        plyReady[1].textContent = `${player2.getName()} esta listo/a`
    }
    else if(e.code === "ArrowDown"){
        player2.setChoice(elements[Math.round(Math.random() * 2)])
        plyReady[1].textContent = `${player2.getName()} esta listo/a`
    }
}

const checkWinner = (ply1, ply2)=>{
    if(ply1.getChoice() === "Piedra" && ply2.getChoice() === "Tijera"){
        return 0
    }else if(ply1.getChoice() === "Tijera" && ply2.getChoice() === "Papel"){
        return 0
    }else if(ply1.getChoice() === "Papel" && ply2.getChoice() === "Piedra"){
        return 0
    }else if(ply1.getChoice() === "Tijera" && ply2.getChoice() === "Piedra"){
        return 1
    }else if(ply1.getChoice() === "Papel" && ply2.getChoice() === "Tijera"){
        return 1
    }else if(ply1.getChoice() === "Piedra" && ply2.getChoice() === "Papel"){
        return 1
    }else if(ply1.getChoice() === ply2.getChoice()){
        return 2
    }     
}

const showWinner = (ply, indexPoints)=>{
    winnerText.textContent = `¡Ha ganado ${ply.getName()} con ${ply.getChoice()}!`
    ply.increasePoints()
    plyPoints[indexPoints].textContent = ply.getPoints()
}

export {setPlayerName, selectElement, checkWinner, showWinner}