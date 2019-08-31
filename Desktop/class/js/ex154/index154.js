const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy = this.energy-damage;
        if(this.energy <0 || this.energy>100)
        {
            console.log("player energy can't be negative or more than 100 and will lose a life.RESET energy and lose 1 life")
            this.energy =100;
            this.lives = this.lives-1;
            console.log(`The ${this.name} has ${this.energy} and ${this.lives}`);

        }
        else{
            console.log(`The ${this.name} has ${this.energy} and ${this.lives}`);

        }

    },
    recoverEnergy: function(energyUp){
        this.energy= this.energy+energyUp;
        console.log(`The ${this.name} has ${this.energy} and ${this.lives}`);

    },
    loseLife: function(){
        this.lives = this.lives -1;
        console.log(`The ${this.name} has ${this.energy} and ${this.lives}`);

    },
    recoverLife: function(){
        this.lives = this.lives+1;
        if(this.lives >99)
        {
            console.log("player life can't be more than 99")

        }
        else{
            console.log(`The ${this.name} has ${this.energy} and ${this.lives}`);

        }
    },
}
player.name = 'Neil';
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();