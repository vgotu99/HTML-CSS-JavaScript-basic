const checkValidation = function() {

    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if(email && pw1 && pw2) {
        //└─> 모든 input이 비어있지 않을때(빈칸이 아닐때)
        document.getElementById("submit").disabled = false

    } else {
        //└─> 모든 input이 하나라도 비어있을때
        document.getElementById("submit").disabled = true
    }

}