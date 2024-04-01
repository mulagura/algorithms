// Reversing a string

const str1 = 'hello';
const str2 = "hello this is venkat";
const str3 = "hey !! this is Neeraja";

// Solution:
// 1. using split("").reverse().join("");
// 2. using conventional for loop decremental
// 3. using reduce method 

// incremental
for(let i = 0; i < str1.length; i++) {
    // console.log(str1[i]);
}

// decrmental
for(let i = str1.length-1; i >= 0; i--){
    // console.log(str1[i]);
}

// 1. split reverse join -> reverse is array method

function reverseUsingSplitReverseJoin(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseUsingSplitReverseJoin(str2));

// 2. for loop decremental

function reverseForDecremental(str) {
    let result = '';
    for(let i = str.length-1; i>=0; i--) {
        result = result + str[i];
    }
    return result;
}

console.log(reverseForDecremental(str3));

// 3. reduce method

function reverseReduce(str) {
    const result = str.split("").reduce((acc, current) => {
        return current + acc;
    }, ""); 
    return result;
}

console.log(reverseReduce(str1));