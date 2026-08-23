function setUsername(username){
    // complex db call 
    this.username = username;// is function ko bolna padega ki khud ke this mein store mat karo - jaha tum call hoge vaha tumhe mai apna this dunga
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this,username)// setUsername createUser ke andar call ho raha hai toh setUsrname ko toh username ka access hona chahiye - ye actually call ho hi nahi raha hai - call karke gayab ho jayege jab call stack se nikal jaayega tab likin hamin uska context hold karke rakhna hai
    // haemin lagta hai iska execution context iske andar aa jayega
    this.email = email
    this.password = password;
}

const chai = new createUser('chai','chai@fb.com','123')

console.log(chai)