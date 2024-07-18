const menuHome = () => {

    document.getElementById("contentFrame").setAttribute("src","home.html")
        // setAttribute는 무엇이냐면 .setAttribute(A,B) = A를 B라는 속성으로 셋팅하겠다.
        // index.html에 있는 <iframe src="@">에 home.html을 대입하겠다.
    document.getElementById("menu_home").style = "color: black; background-color: white;"
    document.getElementById("menu_jukebox").style = "color: white; background-color: #298eb5;"
    document.getElementById("menu_game").style = "color: white; background-color: #298eb5;"
}

const menuJukebox = () => {
    
    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
    document.getElementById("menu_jukebox").style = "color:black; background-color:white;"
    document.getElementById("menu_home").style = "color: white; background-color: #298eb5;"
    document.getElementById("menu_game").style = "color: white; background-color: #298eb5;"


}

const menuGame = () => {
    
    document.getElementById("contentFrame").setAttribute("src","game.html")
    document.getElementById("menu_game").style = "color: black; background-color: white;"
    document.getElementById("menu_jukebox").style = "color: white; background-color: #298eb5;"
    document.getElementById("menu_home").style = "color: white; background-color: #298eb5;"


}