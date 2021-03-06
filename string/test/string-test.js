var sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';

var start = sentence.indexOf(':');
// After :+1 look for next . Will be after bananas 
var end = sentence.indexOf('.',start+1);

var listStr = sentence.substring(start+1, end);
var fruits = listStr.split(',');
console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']

var fruits_dos = fruits;

// if you want to clean space
fruits.forEach(function(element,index,array){
    array[index] = element.trim();
});

console.log(fruits); // ['cherries', 'oranges', 'apples', 'bananas']

fruits_dos = fruits_dos.split(/\s*,\s*/);
console.log(fruits_dos); // ['cherries', ' oranges', ' apples', ' bananas']

