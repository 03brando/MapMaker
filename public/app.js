let currentTile = "mountain"
const newMap = () =>{
    //set selected tile back to default
    currentTile = "mountain"
    document.querySelector(".mountain").style.border = " 4px solid red"
    document.querySelector(".player").style.border = "1px dashed rgb(97, 96, 96)"
    document.querySelector(".water").style.border = "1px dashed rgb(97, 96, 96)"
    document.querySelector(".remove").style.border = "1px dashed rgb(97, 96, 96)"
    let tiles = document.querySelectorAll(".tile")
    //reset map
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove("mountain")
        tiles[i].classList.remove("player")
        tiles[i].classList.remove("water")
    }
}
const tileClicked = (evt) =>{
    //set current map tile
    if(evt.target.tagName.toLowerCase() === "button"){
        currentTile = evt.target.classList.value
        console.log(evt.target.classList)
    }
    //update UI
    if(currentTile === "mountain"){
        document.querySelector(".mountain").style.border = "4px solid red"
        document.querySelector(".player").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".water").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".remove").style.border = "1px dashed rgb(97, 96, 96)"
    }
    if(currentTile === "player"){
        document.querySelector(".player").style.border =  "4px solid red"
        document.querySelector(".mountain").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".water").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".remove").style.border = "1px dashed rgb(97, 96, 96)"
    }
    if(currentTile === "water"){
        document.querySelector(".water").style.border = "4px solid red"
        document.querySelector(".mountain").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".player").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".remove").style.border = "1px dashed rgb(97, 96, 96)"
    }
    if(currentTile === "remove"){
        document.querySelector(".remove").style.border = "4px solid red"
        document.querySelector(".mountain").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".player").style.border = "1px dashed rgb(97, 96, 96)"
        document.querySelector(".water").style.border = "1px dashed rgb(97, 96, 96)"
    }
}
const mapClicked= (evt) =>{
    //place map tiles on map, if remove is selected reset space to default
    if(currentTile){
        if (evt.target.classList.contains("tile")){
            if(currentTile === "remove"){
                evt.target.classList.remove("mountain")
                evt.target.classList.remove("player")
                evt.target.classList.remove("water")
            }
            else{
             evt.target.classList.add(currentTile)
            }
         }
    }
}
document.querySelector("#select-tile").addEventListener("click", tileClicked)
document.querySelector(".map").addEventListener("click", mapClicked)
document.querySelector("#create-new-btn").addEventListener("click", newMap)
document.addEventListener("DOMContentLoaded", newMap) 