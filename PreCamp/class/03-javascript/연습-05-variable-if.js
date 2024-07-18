// 데이터 타입, 연산자 실습
1+1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false
false || false
// false


// [ 조건문 실습 1 ]

if(1+1 === 2) {
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM1060:2 정답입니다.
// undefined
if(true) {
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM1070:2 정답입니다.
// undefined
if(!true) {
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM1078:4 틀렸습니다.
// undefined
if(0) {
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM1085:4 틀렸습니다.
// undefined
if(12371237887124) {
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM1126:2 정답입니다.
// undefined
if("asdasdasd") {
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM1147:2 정답입니다.
// undefined


// [ 조건문 실습 2 ]


const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined @@-->프로필이라는 상수를 선언하기
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(8 <= profile.age <=19) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다")
}

// VM2465:4 학생입니다. @@-->내가 생각한 방법
// undefined
profile.age >=8 && profile.age <=19
// true
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >=8 && profile.age <=19) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다")
}

// VM2618:4 학생입니다. @@-->실무에서는 내가 생각한 방법처럼하지 않고 그리고(&&)라는 논리적 연산자로 두 조건을 연결해준다. but 최신 JS는 내가 생각한 방법으로도 연산 처리 가능.
// undefined
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >=8) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다")
}

// VM2649:4 학생입니다. @@-->20세 이상은 성인이라고 정의해 두었으니 19세 이하는 false이므로 19세 이상이라는 조건은 달아주지 않아도 된다.
// undefined
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >=8) {
    console.log("학생입니다.")
} else if (profile.age >0) {
    console.log("어린이입니다")
} else {
    console.log("잘 못 입력하셨습니다.")
}

// VM2818:4 학생입니다. @@--> -값을 입력하여 장난을 치거나 의도치않은 이득을 취하는 경우가 생길 수 있으니 반드시 음수를 입력하는 상황을 대비하기. ex)프메 코인선물하기 -값으로 뚫었던 거 경험
// undefined


