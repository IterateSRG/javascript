// const user = {
//     username:'shivam',
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("Got user details from database")
//         // console.log(`${this.username}`)
//         console.log(this)
//     }
// }

// // console.log(user.username)
// user.getUserDetails()
// console.log(this)// currently global context not have the context


// new keyword ka use isliye kar pate hai kyo ki constructor function hota hai javascript mein ye kya karta hai ek hi literal object se multiple instance create karne mein help karta hai


// const promiseOne = new Promise()
// const date = new Date()


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this - return karne ki jarurat nahi implicitly ruturn hota hai
}

const userOne = new User("shivam",12,true)
console.log(userOne)
userOne.greetings()

const userTwo = new User("hitesh",11,false)
console.log(userTwo)
userTwo.greetings()

console.log(userOne.constructor)


// step  - 1 : new object create hota hai
// step - 2: constructor function call hota hai due to new keyword
// step - 3 : all (args) values inject inside that this keyword
// step - 4 : finally mil jate hai function ke andar is liye hum return(this) nhi bhi kare too bhi kaam chla jata hai 