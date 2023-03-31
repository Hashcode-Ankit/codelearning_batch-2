

// // arrow function specification and this keyword
// obj = {
//     name : "codes",
//     batch : 2,
//     printBatch : ()=>{
//         console.log("this is batch ",this.name,"  ",this.batch)
//     }
// }

// obj.printBatch()

// class electronicDevice {
//     constructor(batteryPower,name){
//         this.batteryPower = batteryPower
//         this.name = name
//         console.log("constructer called",this.batteryPower,this.name)
//     }
//     howmuchbatteryruns() {
//         return this.batteryPower/10
//     }
// }

// class mobile extends electronicDevice {
//     constructor(batteryPower,name){
//         super(batteryPower,name)  
//     }
//     howmuchbatteryruns(){
//         return this.howmuchbatteryruns()
//     }
// }

// obj = Object.

// console.log(mobile.howmuchbatteryruns())



var a = 10;
var obj = {
	b : 20 ,
	fun : function(){
 		console.log(this.b)
	},
    run : ()=>{
        console.log(this.a)
    }
} 
obj.fun()
obj.run()

function hi(){
    console.log("here is the value : ",this.a)
}
function hello(){
    let a  = 10
    hi()
}
hello()