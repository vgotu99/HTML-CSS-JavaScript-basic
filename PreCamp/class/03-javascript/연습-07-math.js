Math.floor(Math.random()*1000000)
// @@--> Math.floor로 묶어주고 시작하는 이유는 수가 너무 많아지기 때문에 반올림 해주는 것이다. / *1000000 하는 이유는 Math.random()하면 0.xxxxxxxxxx이런 식으로 소수점으로 나오기 때문
// 915676
String (Math.floor (Math.random()*1000000))
// @@--> String으로 묶어주는 이유는 상수를 문자열로 바꿔주기 위함이다.
// '775628'
String (Math.floor (Math.random()*1000000))
// '994761'
String (Math.floor (Math.random()*1000000))
// '685986'
String (Math.floor (Math.random()*1000000))
// '520265'
String (Math.floor (Math.random()*1000000))
// '713837'
String (Math.floor (Math.random()*1000000))
// '1057'
String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// @@--> 뒤에 붙여주는 .padStart(n,"m") 의 의미는 n자리수가 되지않으면(예를들어 '001234'=>'1234'로 표기) 앞에서부터 문자열 "m"을 채워줘라 그렇기 떄문에 .padStart(n,"0") 을 사용하면 n자리수가 되지않으면(앞에 0이 들어가는 수가 랜덤으로 나왔다면) 앞에 "0"을 채워줘라.
// '555369'
String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// '138710'
String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// '826505'
String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// '127414'
String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// '909256'
String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// '027104'
let result = String (Math.floor (Math.random()*1000000)).padStart(6,"0")
// undefined
result
// '433411'
result
// '433411'
result
// '433411'
// @@--> 여기서 result를 했을때 계속 랜덤한 수가 나오지 않는 이유는 DOM 강의에서 배우기로 했음