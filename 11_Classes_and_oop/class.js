// ES6
// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("testUser","t@t.com",123)
// console.log(newUser.encryptPassword())
// console.log(newUser.changeUsername())
// console.log(newUser)

// behind the scene

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const newUser = new User("shivam","s@s.com",123)
console.log(newUser)
console.log(newUser.encryptPassword())
console.log(newUser.changeUsername())