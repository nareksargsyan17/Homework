//Arrays
const arr = ["Apple", "Orange", "Banana", ["Hello", [1, [2]]]];

const [a, b, c, d] = arr;
console.log(a, b, c, d); //1

const arr1 = ["1", "2", "3", [".....10", ".....20"]];

const [a1, b1, c1, [da, db]] = arr1;
console.log(a1, b1, c1, da, db); //2

const arr2 = ["John", "Mari", "Alex", "Henry"];

const [john, mari, alex, henry] = arr2;
console.log(john, mari, alex, henry); //3

const arr3 = [[[[[[[1]]]]]], 2, 3, 4];

const [[[[[[[a2]]]]]], b2, c2, d2] = arr3;
console.log(a2, b2, c2, d2); //4

const arr4 = ["ab", "cd", "ef", "gh"];

const [aB, cD, eF, gH] = arr4;
console.log(aB, cD, eF, gH); //5

const arr5 = [{ a: 5 }, "25", 125];

const [a3, b3, c3] = arr5;
console.log(a3, b3, c3); //6 

const arr6 = ["Hello", "Dears", ["Alex", "and", "Lucy"], "!!!"];

const [a4, b4, [c4, d4, e4], f4] = arr6;
console.log(a4, b4, c4, d4, e4, f4); //7

const arr7 = [0, 1, 1, 2, 3, 5];

const [a5, b5, c5, e5, f5, g5] = arr7;
console.log(a5, b5, c5, e5, f5, g5); //8 

const arr8 = ["You", "are", ["so",["so"]], "happy"];

const [a6, b6, [c6, [d6]], e6]  = arr8;
console.log(a6, b6, c6, d6, e6); //9

const arr9 = ["I", "am", "from", [[[[["Armenia"]]]]]];

const [a7, b7, c7, [[[[[d7]]]]]] = arr9;
console.log(a7, b7, c7, d7);

Objects
const obj = {
    name: "Henry",
    lastName: "Ayvazyan",
    year: 25
}

const { name, lastName, year } = obj;
console.log(name, lastName, year); //1

const obj1 = {
    house: true,
    work: true,
    avto: true,
    manyMoney: true
}

const { house, work, avto, manyMoney } = obj1;
console.log(house, work, avto, manyMoney);//2

const obj2 = {
    yourName: "Hrant",
    yourLocation: "Gyumri",
    yourFavoriteWork: "Programming"
}

const { yourName, yourLocation, yourFavoriteWork } = obj2;
console.log(`Heey, I'm ${yourName}, I'm from ${yourLocation} and I love ${yourFavoriteWork}.`);//3

const obj3 = {
    restName: "Ginetun",
    restManager: "Lucy",
    restWaiters: ["Anna", "Henry"]
}

const { restName, restManager, restWaiters } = obj3;
console.log(`
            Restorant Name - ${restName},
            Manager - ${restManager},
            Waiters - ${restWaiters}`
); //4

const obj4 = {
    firm: "Samsung",
    model: "A50",
    gb: 256,
    year1: 2019
}

const { firm, model, gb, year1 } = obj4;
console.log(`
            Firm - ${firm}
            Model - ${model}
            GB - ${gb}
            year - ${year1}`);//5

const obj6 = {
    footballers: {
        n1: "Courtois",
        n2: "Carvajal",
        n3: "Militao"
    },
    manager: "Anccelotti",
    team: "Real Madrid"
}

const { footballers, manager, team } = obj6;
console.log(team, manager, footballers); //6

const obj7 = {
    number: 55,
    string: "str",
    boolean: true
}

const { number, string, boolean } = obj7;
console.log(number, string, boolean); //7 

const obj8 = {
    game: "Mario",
    level: 5,
    isInterested: "Yeees"
}
const { game, level, isInterested } = obj8;
console.log(`
    I'm playing ${game}, My level is ${level}.
    Are you interested this game? -- ${isInterested}`); // 8

const obj9 = {
    numbers: [5, 15, 25],
    sum: 5 + 15 + 25,
    reaction: "Wooow!!"
}

const { numbers, sum, reaction } = obj9;
console.log(`
    Say 3 numbers - ${numbers}
    Sum is ${sum} - ${reaction} 
    `); //9

const obj10 = {
    str: "Some String",
    "num": 25,
    bool: false
}

const { str, num = obj10["num"], bool } = obj10;
console.log(str, num, bool); // 10
