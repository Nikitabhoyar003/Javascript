

function mixUp(str1, str2) {

if (str1.length >= 2 && str2.length >= 2) {

var str1Swapped = str2.slice(0, 2) + str1.slice(2);
var str2Swapped = str1.slice(0, 2) + str2.slice(2);


return str1Swapped + ' ' + str2Swapped;
} else {

console.error("Both strings should be at least 2 characters long.");
return null;
}
}

console.log(mixUp('mix', 'pod')); 
console.log(mixUp('dog', 'dinner'));
