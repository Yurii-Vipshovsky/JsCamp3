//task1

function minMaxDiff(array){
    if(array.length==0){
        return 0;
    }
    return Math.max(...array) - Math.min(...array);
}

console.log(minMaxDiff([1,2,3,-4]));
console.log(minMaxDiff([16]));
console.log(minMaxDiff([]));

//task2

function longerWords(string, length){
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

console.log(longerWords("I love JavaScript", 3));
console.log(longerWords("I love0, JavaScript", 4));

//task3

function isEndOfString(string, ending){
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

console.log(isEndOfString("abc", "bc"));
console.log(isEndOfString("abcd", "bc"));
console.log(isEndOfString("abcd", "d"));

//task 4

function nextArifmetickMean(array){
    let res = [];
    for(let i=0;i<array.length-1;++i){
        res.push((array[i]+array[i+1])/2);
    }
    return res;
}

console.log(nextArifmetickMean([2, -2, 2, -2, 2]));
console.log(nextArifmetickMean([1, 3, 5, 1, -10]));

//task 5

function countVowels(string){
    let vovels = ['a', 'e', 'i', 'o', 'u'];
    string = string.toLowerCase();
    let count = 0;
    for(let i=0;i<string.length;++i){
        if(vovels.indexOf(string[i])!=-1){
            count++;
        }
    }
    return count
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));

//task 5.2

function removeABC(string){
    let ABCSearch = ['a','b','c'];
    let searchString = string.toLowerCase();
    let isDeleted = false;
    for(let i=0;i<ABCSearch.length;++i){
        while(searchString.indexOf(ABCSearch[i])!=-1){
            let index = searchString.indexOf(ABCSearch[i]);
            searchString = searchString.slice(0, index) + searchString.slice(index+1);
            string = string.slice(0, index) + string.slice(index+1);
            isDeleted=true;
        }
    }
    if(!isDeleted){
        return null;
    }
    return string;
}

console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));

//task 6

function difference(array1, array2){
    let res = [];
    for(let i=0;i<array1.length;++i){
        if(!res.includes(array1[i])){
            res.push(array1[i]);
        }
    }
    for(let i=0;i<array2.length;++i){
        if(!res.includes(array2[i])){
            res.push(array2[i]);
        }
    }
    return res;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//task 7

function keyAsValuesObjectCopy(object){
    
}