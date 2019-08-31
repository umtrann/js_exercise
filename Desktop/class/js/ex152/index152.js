const user = {
    username: null,
    password: null,
    greet: function(){
        if(this.username != null)
        {
            console.log(`Hello, I'm user ${this.username}`);
        }
        else    console.log("Please assign a username value");
    },
    updatePassword: function(value1){
        this.password = value1;
    },
    updateUsername: function(value){
        this.username = value;
    }
}

user.greet();
user.updatePassword(123456);
user.updateUsername("umtrann");
user.greet();