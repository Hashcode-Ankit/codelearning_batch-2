

// function sum(){
//     return 5+3
// }
// setTimeout(()=>{
//     console.log("hi")
// },0.000000000001)
// async function hello(){
//         return new Promise((resolve, reject) => {
//             let a = sum()  // parse the collection -> save in db 
//             if(a == 7)
//             resolve(a)
//             else
//             reject("a is not equal to 7")
//         })
// } 

// hello().then((data)=>{
//     console.log("Data :",data)
// }).catch((error)=>{
//  console.log("Error : ",error)
// })


// async function buyWatch(userBudget) {
//     return new Promise((resolve, reject) => {
//         if(userBudget>200) {
//             resolve("we can give watch")
//         }else{
//             reject("budge is low")
//         }
//     })
// }

// buyWatch(100).then((data)=>{
//     console.log("complete the transaction :",data)
// }).catch((error)=>{
//     console.log("err : ",error)
// })
// try {
//     console.log(a)
//     let a = 10
//     console.log("try")
// }
// catch(err) {
//     console.log("error here in the catch  :")
// }
// finally {
//     let a = 10
//     console.log(a)
//     console.log("finaly executed")
// }


// console.log("hi")
var a = () => {
   
    function hi(){
        let b = 10
            console.log(`Hello, my name is ${this.b}`);
    }
    hi()
}
a()