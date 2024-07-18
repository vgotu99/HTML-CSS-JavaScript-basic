let we = [
    {name:"승건", age:25, house:'인계동'},
    {name:"채은", age:25, house:"망포동"},
    {name:"티거", age:2, house:"인계동"}
]
// undefined
we
// (3) [{…}, {…}, {…}]
we[0]
// {name: '승건', age: 25, house: '인계동'}
we[1]
// {name: '채은', age: 25, house: '망포동'}
we[3]
// undefined
we[2]
// {name: '티거', age: 2, house: '인계동'}
we[0].name
// '승건'
we[1].house
// '망포동'
we[2].age
// 2