

// // Declarative function

// function hello(){
//     console.log("hello")
// }
// // function Expressiom

// var a = function(){
//     console.log(10)
// }
// // arrow function

// var a = ()=> {
//     console.log(10)
// }

// // callback function (anonymous function)

// (function(){
//     console.log("hello")
// })()

function hello(){
    let a = 10
    function hello(){
        console.log("hello")
    }
    return function (){
        console.log(a)
        hello()
    }
}
function hello(){
    console.log("hello")
}

hello()
// Design a mailing service using javascript in which you have to send mails on 3rd 5th and 10th day of user registration (only weekdays(mon to fri) allowed).