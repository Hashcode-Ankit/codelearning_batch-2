// CRUD Operation OF Mongo DB 
// C -> Creating the model or the collection or the table
// R -> Reading the data 
// U -> Updating the data 
// D -> Deleting the data
const { mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');
let Schema = mongoose.Schema;

let registeredUsers = new Schema({
    "password": String,
    "username": String,
});
// Connect to the MongoDB server
let User
function connect() {
    let client = mongoose.createConnection(`mongodb+srv://hashcode-ankit:ankitSharma@cluster0.my9kvko.mongodb.net/`);
    return new Promise((resolve, reject) => {
        client.on('error', (err) => {
            reject(Error("Db not Connected"));
        });
        client.once('open', () => {
            User = client.model("registeredUsers", registeredUsers);
            resolve("db1 success!");
        });
    })
}

function registerUser(userData) {
    userData = userData.formData
    console.log("called to save user",userData)
    return new Promise((resolve, reject) => {
        bcrypt.hash(userData.password, 10).then((hash) => {
            userData.password = hash;
             console.log("get to save user",userData)

            let newUser = new User(userData); // typecasting to User Format
            newUser.save()
        }).catch((err) => {
            reject("not able to decrypt pass") // Show any errors that occurred during the process
        });
    })
}
function getUserWithUsername(username){
    return new Promise((resolve, reject) => {
        User.find({ username: username })
            .exec().then((data) => {
                if (data.length == 0) {
                    reject("Unable to Find user" + username)
                }
                resolve(data)
            }).catch(function (error) {
                reject("unable to find the user : " + userData.email + error)
            });
    })
}
function deleteUser(username) {
    return new Promise((resolve, reject) => {
        User.findOneAndDelete({ username: username })
            .exec().then((deletedUser) => {
                if (!deletedUser) {
                    reject("Unable to find user " + username);
                }
                resolve(deletedUser);
            }).catch((error) => {
                reject("Unable to delete user " + username + ": " + error);
            });
    });
}
module.exports = {connect,registerUser,getUserWithUsername,deleteUser}