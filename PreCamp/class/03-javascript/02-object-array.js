const fruits = [
    {number:1, name:"레드향"},
    {number:2, name:"샤인머스켓"},
    {number:3, name:"산청딸기"},
    {number:4, name:"한라봉"},
    {number:5, name:"사과"},
    {number:6, name:"애플망고"},
    {number:7, name:"딸기"},
    {number:8, name:"천혜향"},
    {number:9, name:"과일선물세트"},
    {number:10, name:"귤"}
]
// undefined
let fruits0 = fruits[0].number + " " + fruits[0].name
// undefined
fruits0
// '1 레드향'
let fruits1 = fruits[1].number + " " + fruits[1].name
// undefined
let fruits1 = fruits[2].number + " " + fruits[2].name
// undefined
let fruits3 = fruits[3].number + " " + fruits[3].name
// undefined
let fruits2 = fruits[2].number + " " + fruits[2].name
// undefined
let fruits4 = fruits[4].number + " " + fruits[4].name
// undefined
let fruits5 = fruits[5].number + " " + fruits[5].name
// undefined
let result = [
    {fruits0},
    {fruits1},
    {fruits2},
    {fruits3},
    {fruits4},
    {fruits5},
]
// undefined
result
// // (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {fruits0: '1 레드향'}
// 1
// : 
// {fruits1: '3 산청딸기'}
// 2
// : 
// {fruits2: '3 산청딸기'}
// 3
// : 
// {fruits3: '4 한라봉'}
// 4
// : 
// {fruits4: '5 사과'}
// 5
// : 
// {fruits5: '6 애플망고'}
// length
// : 
// 6
// [[Prototype]]
// : 
// Array(0)