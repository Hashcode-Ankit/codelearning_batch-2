function storeDataInJsonFile(receivedData){
    data = require('./data.json')
    // var data = fs.readFileSync('./data.json');
    // var data = JSON.parse(data);
    console.log(data)
    const fs = require('fs')
    data.push(receivedData)
    err = fs.writeFile('data.json', JSON.stringify(data),()=>{})
    
}
function storeUser(data) {
    dbData = require('./data.json')
    console.log(data)
    const fs = require('fs')
    dbData.push(data)
    err = fs.writeFile('data.json', JSON.stringify(dbData),()=>{})
}
function authenticateUser(data){
    dbData = require('./data.json')
    for(let i=0;i<dbData.length;i++){
        if(dbData[i].name==data.name){
                console.log("username correct  ",dbData[i].password, data.password)

            if(dbData[i].password==data.password){
                return true
            }
        }
    }
    return false
}
module.exports = {storeDataInJsonFile,storeUser,authenticateUser}

// When we are creating request request from browser easy way to authenticate an API is COOKIE
// If the request is created from different server in that case token authentication is used