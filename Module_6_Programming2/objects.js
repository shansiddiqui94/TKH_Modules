// obj1
//this is the constructor, it is a template for making new objects 
//Constructor
function garage(year, color, model, engine, doortype, ) {
    this.year = year;
    this.color = color;
    this.model = model;
    this.engine = engine;
    this.doortype = doortype;
}

let car = {
    year: 2020,
    color: "Silver",
    model: "Honda Civic",
    engine: "V4",
    doortype: [2, 4, 5],
    newcar: function() {
        console.log("Congratulations on your " + this.year + " " + this.color + " " + this.model + " " + this.doortype[1] + " door  " + this.engine + " engine car!")
    },

    get years() {
        return this.year;
    },

    set doors(doors) {
        this.doortype = doors;
    }

};


//car.newcar()
// -----------------------------

//obj2 

function team(name, state, players, colors, scoreBoard) {
    this.name = name;
    this.state = state;
    this.players = players;
    this.colors = colors;
    this.scoreBoard = scoreBoard;
}

let sportsTeams = {
    state: "New York",
    players: 40,
    scoreBoard: [2, 0, 0, 2, 0, 4, 3, 0, "x"],
    colors: ["white", "Gray", "Blue"],
    name: "The Yankees",
    newTeam: function() {
        console.log("Welcome to the 2019 Playoffs, this year we have the " + this.name + " all the way from  " + this.state + ", they currently have" + this.players + " and their colors are " + this.colors + "")

    },

    get score() {
        return this.scoreBoard;
    },

    set newScore(newScore) {
        this.scoreBoard = newScore
    }
};

sportsTeams.newTeam()



// obj3 
function animal(name, location, color, food) {
    this.name = name
    this.location = location;
    this.color = color;
    this.food = food;

}

let animals = {
    name: "Koala",
    location: "Austrailia",
    color: "Gray",
    food: "eucalyptus leaves",
    newAnimal: function() {
        console.log("Here we have the  " + this.name + " they are native to " + this.location + " they have a " + this.color + " fur. Lastly they eat" + this.food + " ")
    },
    get taste() {
        return this.food
    },

    set newlocal(local) {
        this.location = whatLocation
    }

}

animals.newAnimal()