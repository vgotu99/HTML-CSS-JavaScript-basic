let people = [
    {name: "철수", age: 17},
    {name: "짱구", age: 22},
    {name: "도날드", age: 5},
    {name: "그루트", age: 65},
    {name: "해리", age: 30}
]
// undefined
for(let count = 0; count < people.length; count++) {
    if(people[count].age >= 20) {
        console.log(people[count].name + "님은 성인입니다.")
    } else {
        console.log(people[count].name + "님은 미성년자입니다.")
    }
}
// VM2928:5 철수님은 미성년자입니다.
// VM2928:3 짱구님은 성인입니다.
// VM2928:5 도날드님은 미성년자입니다.
// VM2928:3 그루트님은 성인입니다.
// VM2928:3 해리님은 성인입니다.
// undefined