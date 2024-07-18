let time = 10
// undefined
setInterval(function(){

    if(time >=0) {
        console.log(time)
        time = time - 1
    }
},1000)
// 10
// 9
// 8
// 6
// 5
// 4
// 3
// 2
// 1
// 0


let timer = 180
undefined
setInterval(function(){
    if(time >= 0){
        let min = Math.floor(timer / 60)
        let sec = String(timer % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)
3
// 3:00
// 2:59
// 2:58
// 2:57
// 2:56
// 2:54
// 2:53
// 2:52
// 2:51
// 2:50
// 2:49
// 2:48
// 2:47
// 2:46