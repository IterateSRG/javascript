class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}123`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value
    }
}

const shivam = new User('s@s.com','abcd')
console.log(shivam.password)



// old way when no class is there

// function User2(email,password){
//     this.email = email
//     this.password = password

//     Object.defineProperty(this,'password',{ // here we can give any name
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }


// one more syntax object based
// const User = {
//     _email:'s@s.com',
//     _password:'123',

//     get email(){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email = value
//     }
// }

const tea = Object.create(User)
console.log(tea.email)

