//Inscertion Sort
function insertionSort(array){
    if(array.length<=1){
        return array;
    }
    for(let i=0;i<array.length;++i){
        for(let j=i+1;j<array.length;++j){
            if(array[j]<array[i]){
                console.log("i"+array[i]);
                console.log("j"+array[j]);
                for(k=0;k<=i;++k){
                    if(array[j]<array[k]){
                        console.log(k);
                        array.splice(k,0,array[j]);
                        console.log(array);
                        array.splice(j+1,1);
                        console.log(array);
                        break;
                    }
                }
            }
        }
    }
    return array;
}

console.log(insertionSort([2,12,0,5,12,0,1,3,53,2,5]));

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
    const res = {}
    for (const key in object) {
        res[object[key]] = key;
    }
    return res;
}

console.log(keyAsValuesObjectCopy({1:"key1",2:"key2",3:"key3"}));

//task8

function calculateDifference(object, insurance){
    let sum =0;
    for(const elem in object){
        if(!isNaN(object[elem])){
            sum+= object[elem];
        }
    }
    return sum - insurance;
}

console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//task 9 

function doesBrickFit(a,b,c,w,h){
    if(a<=w){
        if(b<=h){
            return true;
        }
        else if(c<=h){
            return true;
        }
        else{
            return false;
        }
    }
    else if(a<=h){
        if(b<=w){
            return true;
        }
        else if(c<=w){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(b<=h && c<=w){
            return true;
        }
        if(b<=w && c<=h){
            return true;
        }
        return false;
    }
}


console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));

//task 10

function getFileName(path){
    let splitedPath = path.split('\\');
    let file = splitedPath[splitedPath.length-1];
    return file.split('.')[0];
}

console.log(getFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

//task 11

function cycleShiftTwoWords(word1, word2){
    if(word1.length!=word2.length){
        return false;
    }
    for(let i = 0; i<word1.length;++i){
        word2+=word2[0];
        word2=word2.slice(1);
        if(word1==word2){
            return true;
        }
    }
    return false;
}
console.log(cycleShiftTwoWords('abcd','dabc'));

//task 12

function closeItemsLists(array){
    array = array.sort((a, b)=>a-b);
    let a =[];
    let b = [];
    while(array.length>0){
        let index = 0;
        let minDistanse = array[1]-array[0];
        for(let i=1;i<array.length-1;++i){
            if(minDistanse>array[i+1]-array[i]){
                index = i;
                minDistanse=array[i+1]-array[i];
            }
        }
        a.push(array[index+1]);
        b.push(array[index]);
        array.splice(index,2);
    }
    return [a, b];
}

console.log(closeItemsLists([2,5,12,13,8,48,49,15]));

//task 13

function stringConversion(string){
    string = string.toLowerCase();
    let words = string.split(' ');
    for(let i=0;i< words.length;++i){
        if(words[i].includes('http://') || words[i].includes('https://')){
            words.splice(i,1,'посилання заборонено');
        }
        if(words[i].includes('@')){
            words.splice(i,1,"контакти заборонені");
        }
        if(words[i].length>3 && !isNaN(words[i])){
            words.splice(i,1);
        }
    }
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    let res = words.join(' ');
    //it will work only in browser
    if(typeof window !== 'undefined' && string.length<res.length){
        var intervalID = window.setInterval(()=>window.alert("Вам потрібна допомога?"), 5000);
    }
    return res;
}

console.log(stringConversion("i LOve JS"));
console.log(stringConversion("i LOve https://chat.openai.com/"));
console.log(stringConversion("https://chat.openai.com/ Love US"));
console.log(stringConversion("super@email.com Love US"));
console.log(stringConversion("My number is 42184"));
console.log(stringConversion("email@g.com Love US"));

//task 14

function partielsBalanse(string){

}

//task 15

function passwordGenerator(){

}

//task 16

function arrayMix(array){

}

//task 17

function stringByFrequency(string){

}

//task 18

function maxSubstring(string){

}

//task 19

function cezarCode(string, shift){

}

//task 20

function isAnagram(string1, string2){

}

//task 21

const University={

}

//task 22

function textAnalizator(string){

}

function mostFquentWords(string){
    
}