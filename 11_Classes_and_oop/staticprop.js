class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }

// dont want to give access of creating new id each time
    static createId(){
        return '123'
    }
}


const shivam = new User('shivam')
// console.log(shivam.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','iphone@i.com')
iphone.logMe()
// console.log(iphone.createId())