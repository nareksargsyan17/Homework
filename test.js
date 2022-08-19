//1
function factorial(num, sum = 1) {
    if (num > 0) {
        sum = num * factorial(num - 1);
    }
    return sum;
}
console.log(factorial(7));

function fibonachi(num, arr = [1, 2]) {
    if (arr[arr.length - 1] + arr[arr.length - 2] <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        fibonachi(num, arr);
    }
    return arr;
}
console.log(fibonachi(500));

//2

const nameArr = ["Karen", "Armen", "Sevak", "Hrayr", "Karine", "Armine"];
function printNames(arr) {
    if (arr.length !== 0) {
        console.log(arr.pop());
        printNames(arr);
    }
}
printNames(nameArr);

const cars = [
    {
        name: "Toyota Camry",
        price: 5000,
        color: "grey",
        speed: 140
    },
    {
        name: "Mercedes C180",
        price: 4000,
        color: "grey",
        speed: 120
    },
    {
        name: "BMW E60",
        price: 6000,
        color: "red",
        speed: 180
    },
    {
        name: "Lexus RX470",
        price: 8000,
        color: "green",
        speed: 170
    },
    {
        name: "Chevrolet Dodge",
        price: 5000,
        color: "black",
        speed: 130
    }
]
console.table(cars);

function selectYourCar(arr, i = 0) {
    if (arr[i].price === 5000 && arr[i].color === "grey") {
        console.log(arr[i]);
    } else {
        i++;
        selectYourCar(arr, i)
    }
}
selectYourCar(cars)

const arr = [5, 5, 7, 8, 9, 8, 5, 2, 0, 4, 1, 40, 1, 25, 48, 89, 52, 2, 55, 56, 66, 4];
function findMax(arr, i = 1, max = arr[0]) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (i < arr.length) {
        i++;
        findMax(arr, i, max);
    } else {
        console.log(max);
    }
}
findMax(arr);

const namesArr = ["Karen", "Armen", "Sevak", "Hrayr", "Karine", "Armine", "Samvel", "Axasi", "Arpine", "Sos"];
const body0 = document.body;
function namesSelect(arr, i = 0) {
    if (i % 2 === 1) {
        body0.insertAdjacentHTML("afterbegin", `
        <h1>${arr[i]}</h1>
        `)
    }
    i++;
    if (i < arr.length) {
        namesSelect(arr, i);
    }
}
namesSelect(nameArr);

const numbers = [5, 5, 7, 8, 9, 8, 5, 2, 0, 4, 1, 40, 1, 25, 48, 89, 52, 2, 55, 56, 66, 4];
function numbersSum(arr, i = 0, sum = 0) {
    if (arr[i] % 3 === 0) {
        sum += arr[i];
    }
    if (i < arr.length) {
        i++;
        numbersSum(arr, i, sum);
    } else {
        console.log(sum);;
    }
}
numbersSum(numbers);

//3

const body = document.body;
const div1 = document.createElement('div');
body.insertAdjacentElement("afterbegin", div1);
div1.insertAdjacentText("afterbegin", "Welcome!");
div1.style.cssText = `
    width: 160px;
    height: 80px;
    color: black;
    font-size: 35px;
    margin-left:40%;
`;
body.insertAdjacentHTML("beforeend", `
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Voluptas, sunt, ut fugit qui illo ipsam esse impedit explicabo ea molestias quo cumque 
    magnam commodi harum architecto voluptatibus deleniti corporis. Doloribus.</p>
`);
div1.insertAdjacentHTML("afterend", `
    <img src = "https://2.bp.blogspot.com/_CjOU7NyqN18/TMFzXu3oWlI/AAAAAAAACB4/0ewXBActfjY/s640/783591926_1280x1024.jpg" style="margin-left:25%"></img>
`)

// 4

const arrNames = ["Karen", "Armen", "Sevak", "Hrayr", "Karine", "Armine", "Samvel", "Axasi", "Arpine",
    "Sos", "Anna", "Ani", "Valodya", "Misha", "Karapet"];
const names = document.querySelector("#div");
const input = names.querySelector('input');
const div = names.querySelector('div')
arrNames.forEach((element) => {
    div.insertAdjacentHTML("beforeend", `
    <p>${element}</p>
`)
})
input.addEventListener("keyup", () => {
    let count = 0;
    for (let i = 0; i < arrNames.length; i++) {
        if (arrNames[i].toLowerCase().search(input.value.toLowerCase()) != -1) {
            div.children[i].textContent = arrNames[i];
            count++;
        } else {
            div.children[i].textContent = "";
        }
    }
    if (count === 0) {
        div.children[0].textContent = "Not finding";
    }
})
