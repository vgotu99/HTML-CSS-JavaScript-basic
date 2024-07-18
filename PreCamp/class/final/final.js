const PN_focus1 = () => {

    let PN1 = document.getElementById("PN1").value
    let PN2 = document.getElementById("PN2").value
    let PN3 = document.getElementById("PN3").value


    if(PN1.length === 3) {
        document.getElementById("PN2").focus()
    }

}

const PN_focus2 = () => {

    let PN1 = document.getElementById("PN1").value
    let PN2 = document.getElementById("PN2").value
    let PN3 = document.getElementById("PN3").value

    if(PN2.length === 4) {
        document.getElementById("PN3").focus()
    }

}


const PN_focus3 = () => {

    let PN1 = document.getElementById("PN1").value
    let PN2 = document.getElementById("PN2").value
    let PN3 = document.getElementById("PN3").value

    if(PN3.length === 4) {
        document.getElementById("certify_start").removeAttribute("disabled")
        document.getElementById("certify_start").style = "background-color:#0068ff; color:white; cursor:pointer;"
    }

}



const button1 = () => {
        document.getElementById("number").innerText =
        String (Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("certify_start").style = "background-color:white; color:#0068ff;"
        document.getElementById("certify_ok").style = "background-color:#0068ff; color:white; cursor:pointer;"
        document.getElementById("certify_ok").removeAttribute("disabled")
        document.getElementById("certify_start").setAttribute("disabled","true")
        certifyTimer()
}

let interval;
function certifyTimer(){
    let time = 179
    interval = setInterval(() => {
        if(time >= 0){
            const minutes = Math.floor(time / 60)
            const seconds = time % 60

            document.getElementById("timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            time = time-1
        } else {
            document.getElementById("number").innerText = "000000"
            document.getElementById("certify_start").style = ""
            document.getElementById("certify_start").setAttribute("disabled", "true")

            document.getElementById("timer").innerText = "3:00"
            document.getElementById("certify_ok").style = ""
            document.getElementById("certify_ok").setAttribute("disabled", "true")

            clearInterval(interval)
        }
    }, 1000)
}


const button2 = () => {
    clearInterval(interval)
    document.getElementById("certify_ok").innerText="인증완료"
    document.getElementById("certify_ok").style = "background-color:white; color:#0068ff;"
    alert("인증이 완료되었습니다")
    document.getElementById("certify_ok").setAttribute("disabled","true")
    document.getElementById("number").innerText="000000"
    document.getElementById("timer").innerText="3:00"
    document.getElementById("registerButton").removeAttribute("disabled")
    document.getElementById("registerButton").style = "background-color:#0068ff; color:white; cursor:pointer;"
}

const register = () => {

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let region = document.getElementById("region").value
    let genderWomen = document.getElementById("gender_women").checked
    let genderMan = document.getElementById("gender_man").checked

    let isValid = true
    
    if(email.includes("@") === false ) {
        document.getElementById("error_email").innerText = "* 옳지 않은 이메일 형식입니다."
        isValid = false
    } else {
        document.getElementById("error_email").innerText = ""
    }

    if(name === "" ) {
        document.getElementById("error_name").innerText = "* 이름을 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error_name").innerText = ""
    }

    if(pw1 === "" ) {
        document.getElementById("error_pw1").innerText = "* 비밀번호를 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error_pw1").innerText = ""
    }

    if(pw2 === "" ) {
        document.getElementById("error_pw2").innerText = "* 비밀번호를 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error_pw2").innerText = ""
    }

    if(pw1 !== pw2) {
        document.getElementById("error_pw1").innerText = "* 비밀번호가 다릅니다."
        document.getElementById("error_pw2").innerText = "* 비밀번호가 다릅니다."
        isValid = false
    } else {
        document.getElementById("error_pw1").innerText = ""
        document.getElementById("error_pw2").innerText = ""
    }

    if(region === "지역을 선택하세요." ) {
        document.getElementById("error_region").innerText = "* 지역을 선택해주세요."
        isValid = false
    } else {
        document.getElementById("error_region").innerText = ""
    }

    if(genderWomen === false && genderMan === false) {
        document.getElementById("error_gender").innerText = "* 성별을 선택해주세요."
        isValid = false
    } else {
        document.getElementById("error_gender").innerText = ""
    }

    if(isValid === true){
        alert(name +"님 회원가입을 환영합니다.")
    }



}