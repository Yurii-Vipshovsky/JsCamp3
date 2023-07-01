//task1

function MinMaxDiff(array){
    if(array.length==0){
        return 0;
    }
    return Math.max(...array) - Math.min(...array);
}

console.log(MinMaxDiff([1,2,3,-4]));
console.log(MinMaxDiff([16]));
console.log(MinMaxDiff([]));

//task2

function LongerWords(string, length){
    string = string.replace(/[^a-z' ']/gi, '');
    let words = string.split(' ');
    let res = [];
    for(let i=0; i<words.length; ++i){
        if(words[i].length>length){
            res.push(words[i]);
        }
    }
    return res;
}

console.log(LongerWords("I love JavaScript", 3));
console.log(LongerWords("I love0, JavaScript", 4));

//task3

function IsEndOfString(string, ending){
    var splitString = string.split("");
    splitString = splitString.reverse();
    var splitEnding = ending.split("");
    splitEnding = splitEnding.reverse();
    for(let i=0; i<splitEnding.length;++i){
        if(splitString[i]!=splitEnding[i]){
            return false;
        }
    }
    return true;
}

console.log(IsEndOfString("abc", "bc"));
console.log(IsEndOfString("abcd", "bc"));
console.log(IsEndOfString("abcd", "d"));

//task 4

function NextArifmetickMean(array){
    
}