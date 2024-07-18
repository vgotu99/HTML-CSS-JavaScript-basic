const fruits = [
    {number:1 , name: "레드향"},
    {number:2 , name: "샤인머스켓"},
    {number:3 , name: "산청딸기"},
    {number:4 , name: "한라봉"},
    {number:5 , name: "사과"},
    {number:6 , name: "애플망고"},
    {number:7 , name: "딸기"},
    {number:8 , name: "천혜향"},
    {number:9 , name: "과일선물세트"},
    {number:10 , name: "귤"},
]
// undefined
fruits
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, name: '레드향'}1: {number: 2, name: '샤인머스켓'}2: {number: 3, name: '산청딸기'}3: {number: 4, name: '한라봉'}4: {number: 5, name: '사과'}5: {number: 6, name: '애플망고'}6: {number: 7, name: '딸기'}7: {number: 8, name: '천혜향'}8: {number: 9, name: '과일선물세트'}9: {number: 10, name: '귤'}length: 10[[Prototype]]: Array(0)
for(let count = 0; count < fruits.length; count++) {
    console.log(fruits[count].number + " " + fruits[count].name)
}
// VM3544:2 1 레드향
// VM3544:2 2 샤인머스켓
// VM3544:2 3 산청딸기
// VM3544:2 4 한라봉
// VM3544:2 5 사과
// VM3544:2 6 애플망고
// VM3544:2 7 딸기
// VM3544:2 8 천혜향
// VM3544:2 9 과일선물세트
// VM3544:2 10 귤
// undefined
for(let count = 0; count < fruits.length; count++) {
    console.log(`${fruits[count].number} ${fruits[count].name}`)
}
// @@--> 변수인 fruits[count].~~~~ 와 문자열인 (띄어쓰기)를 반전하기 위하여 전체에 `(백틱 빽틱)을 걸어주고 변수에게만 ${변수}를 씌워주고 문자열은 그냥 입력하면 된다. 이러는 이유는 변수와 문자열이 굉장히 많이 섞여있을때 더 편하기 때문이라고 함.
// VM3601:2 1 레드향
// VM3601:2 2 샤인머스켓
// VM3601:2 3 산청딸기
// VM3601:2 4 한라봉
// VM3601:2 5 사과
// VM3601:2 6 애플망고
// VM3601:2 7 딸기
// VM3601:2 8 천혜향
// VM3601:2 9 과일선물세트
// VM3601:2 10 귤
// undefined
for(let count = 0; count < fruits.length; count++) {
    console.log(`${fruits[count].number}순위에 랭크되어있는 과일은 ${fruits[count].name}입니다`)
}
// VM3664:2 1순위에 랭크되어있는 과일은 레드향입니다
// VM3664:2 2순위에 랭크되어있는 과일은 샤인머스켓입니다
// VM3664:2 3순위에 랭크되어있는 과일은 산청딸기입니다
// VM3664:2 4순위에 랭크되어있는 과일은 한라봉입니다
// VM3664:2 5순위에 랭크되어있는 과일은 사과입니다
// VM3664:2 6순위에 랭크되어있는 과일은 애플망고입니다
// VM3664:2 7순위에 랭크되어있는 과일은 딸기입니다
// VM3664:2 8순위에 랭크되어있는 과일은 천혜향입니다
// VM3664:2 9순위에 랭크되어있는 과일은 과일선물세트입니다
// VM3664:2 10순위에 랭크되어있는 과일은 귤입니다
// undefined
for(let count = 0; count < fruits.length; count++) {
    console.log(fruits[count].number + "순위에 랭크되어있는 과일은" + " " + fruits[count].name + "입니다")
}
// VM3707:2 1순위에 랭크되어있는 과일은 레드향입니다
// VM3707:2 2순위에 랭크되어있는 과일은 샤인머스켓입니다
// VM3707:2 3순위에 랭크되어있는 과일은 산청딸기입니다
// VM3707:2 4순위에 랭크되어있는 과일은 한라봉입니다
// VM3707:2 5순위에 랭크되어있는 과일은 사과입니다
// VM3707:2 6순위에 랭크되어있는 과일은 애플망고입니다
// VM3707:2 7순위에 랭크되어있는 과일은 딸기입니다
// VM3707:2 8순위에 랭크되어있는 과일은 천혜향입니다
// VM3707:2 9순위에 랭크되어있는 과일은 과일선물세트입니다
// VM3707:2 10순위에 랭크되어있는 과일은 귤입니다
// undefined