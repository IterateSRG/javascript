// inheritance

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher('chai','chai@tea.com',123)
chai.addCourse()

const tea = new Teacher('tea')

console.log(chai instanceof Teacher)
