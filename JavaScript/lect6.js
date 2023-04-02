

// // // arrow function specification and this keyword
// // obj = {
// //     name : "codes",
// //     batch : 2,
// //     printBatch : ()=>{
// //         console.log("this is batch ",this.name,"  ",this.batch)
// //     }
// // }

// // obj.printBatch()

// // class electronicDevice {
// //     constructor(batteryPower,name){
// //         this.batteryPower = batteryPower
// //         this.name = name
// //         console.log("constructer called",this.batteryPower,this.name)
// //     }
// //     howmuchbatteryruns() {
// //         return this.batteryPower/10
// //     }
// // }

// // class mobile extends electronicDevice {
// //     constructor(batteryPower,name){
// //         super(batteryPower,name)  
// //     }
// //     howmuchbatteryruns(){
// //         return this.howmuchbatteryruns()
// //     }
// // }

// // obj = Object.

// // console.log(mobile.howmuchbatteryruns())



// var a = 10;
// var obj = {
// 	b : 20 ,
// 	fun : function(){
//  		console.log(this.b)
// 	},
//     run : ()=>{
//         console.log(this.a)
//     }
// } 
// obj.fun()
// obj.run()

// function hi(){
//     console.log("here is the value : ",this.a)
// }
// function hello(){
//     let a  = 10
//     hi()
// }
// hello()


// obj = {
//     name: "codeslearning",
//     batch : "2",
//     "printDetails" : function(){
//         console.log(`Here is the batch name  ${this.name} and batch ${this.batch}`)
//     }
// }
// obj.printDetails.bind({name : "mobile",batch:"2"})()


// class electronicDevice {
//     constructor(nameOfDevice, batchID){
//         this.name = nameOfDevice
//         this.batchID = batchID
//     }

//     print(){
//         console.log(`Here is the Name ${this.name} and batch id  ${this.batchID}`)
//     }
// }



// eldevice1 = new electronicDevice("mobile","2")
// eldevice2 = new electronicDevice("celphone","5")

// eldevice2.print()


// console.log(typeof(a))

// var  a = 10

// console.log(a)

 //currying concept
function hi (a){
    return function (b){
        console.log("hi")
        return function p(c){
            console.log("hi")
            return function(d){
                 console.log(a+b+c+d)
            }
        }
    }
}

hi(1)(2)(3)(4)