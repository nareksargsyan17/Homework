const school = {
    class1: 27,
    class2: 25,
    class3: 20,
    class4: {
        a: 20,
        b: 18,
        c: 13
    },
    class5: 30,
    class6: {
        a: 20,
        b: 30,
        c: 25
    },
    class7: 35,
    class8: 26,
    class9: {
        a: 22,
        b: 24,
        c: 23
    },
    class10: {
        a: 22,
        b: 19,
        c: 21
    },
    class11: {
        a: 26,
        b: 24,
        c: 25
    },
    class12: {
        a: 22,
        b: 21,
        c: 20
    }
}
for (let i in school) {
    if (typeof school[i] === "object") {
        for (let j in school[i]) {
            console.log(`There are ${school[i][j]} students in the ${i} - ${j}`);
        }
    } else {
        console.log(`There are ${school[i]} students in the ${i}`);
    }
}

const fruits = ["Apple", "Banana", ["Orange", "Mango", "Mandarin"],
    ["Kiwi", "Guava", "Grapes"], "Lime", ["Cherries", "Avocados"],
    "Apricot", ["Tomato", "Tangerine"], "Grapefruit", ["Raspberry", "Bingberry"]];

for (let i of fruits) {
    if (typeof i === 'object') {
        for (let j in i) {
            console.log(i[j]);
        }
    } else {
        console.log(i);
    }
}

const obj = {
    autoReturn() {
        return 1 + 5 + 15;
    },
    sumOfArray() {
        const arr = [1, 4, 8, 8, 9, 4, 6, 6];
        let sum = 0;
        for (let i of arr) {
            sum += i;
        }
        return sum;
    },
    maxMinArr() {
        const arr = [1, -5, 8, 15, 6, 8, 4, 85];
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        console.log(min, max);
    }

}
const { autoReturn, sumOfArray, maxMinArr } = obj;
console.log(autoReturn(), sumOfArray(),);
maxMinArr();

const arr = [
    function fibonachi(toNum) {
        let x = [0, 1];
        for (let i = 2; i < toNum; i++) {
            x[i] = x[i - 1] + x[i - 2];
        }
        return x;
    },
    function factorial(toNum) {
        let sum = 1;
        for (let i = 1; i <= toNum; i++) {
            sum *= i;
        }
        return sum;
    },
]

const [fibonachi, factorial] = arr;
console.log(fibonachi(20), factorial(10));