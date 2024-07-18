const button = () => {
    document.getElementById("number").innerText = 
    String (Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("number").style.color = 
    "#" + String (Math.floor(Math.random()*1000000)).padStart(6,"0")
}