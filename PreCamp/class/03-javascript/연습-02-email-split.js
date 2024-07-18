let eamil = "kakaru852@naver.com"
// undefined
email.includes("@")
// true
eamil.split("@")
// (2) ['kakaru852', 'naver.com']
let userMail = email.split("@")[0]
// undefined
userMail
// 'kakaru852'
// undefined
let company = email.split("@")[1]
// undefined
company
// 'naver.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail
// ['k']
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail.push(userMail[4])
// 5
maskingMail.push(userMail[5])
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail.push("*")
// 9
maskingMail.push("*")
// 10
maskingMail
// (10) ['k', 'a', 'k', 'a', 'r', 'u', '*', '*', '*', '*']
maskingMail.pop()
// '*'
maskingMail
// (9) ['k', 'a', 'k', 'a', 'r', 'u', '*', '*', '*']
maskingMail.join("")
// 'kakaru***'
maskingMail.join("-")
// 'k-a-k-a-r-u-*-*-*'
maskingMail.join("") + "@" + company
// 'kakaru***@naver.com'
let result = maskingMail.join("") + "@" + company
// undefined
result
// 'kakaru***@naver.com'
result
// 'kakaru***@naver.com'