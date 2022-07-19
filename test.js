function counter(count){
    count = 1;
    function counterPlus(){
        count++;
        function counterMinus(){
            count--;
            return count;
        }
        return counterMinus;
    }
    return counterPlus;
}

const count = counter();
console.log(count()());

function oneDB(name, lastName, age){
    function forName(){
        name = "Petros";
        return name;
    }
    function forLastName(){
        lastName = "Kirakosyan";
        return lastName;
    }
    function forAge(){
        age = 27;
        return age;
    }
    return {
        name : forName,
        lastName : forLastName,
        age : forAge
    };
}
const res = oneDB();
console.log(res.name());
console.log(res.lastName());
console.log(res.age());

function tester(){
    let count = 0;
    function counter(){
        count++;
        function counter1(){
            count++;
            return count;
        }
        return counter1;
    }
    return counter;
}
const testerCount = tester()();
console.log(testerCount());
console.log(testerCount());
console.log(testerCount());
console.log(testerCount());


