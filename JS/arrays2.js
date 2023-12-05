// at() Returns an indexed element of an array
document.write('<h1>at()</h1>');
let at1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let at = at1.at(2);
document.write("Funcio que s'utilitza: at()" + '<br/>');
document.write("Array que s'utilitza: " + at1 + '<br/>');
document.write("Index que s'utilitza: " + "2" + '<br/>');
document.write("Resultat: " + at + '<br/>');

//concat() Joins arrays and returns an array with the joined arrays
document.write('<h1>concat()</h1>');
let con1 = ["a", "b", "c"];
let con2 = ["d", "e", "f"];
let conF = con1.concat(con2);
document.write("Funcio que s'utilitza: concat()" + '<br/>');
document.write("Arrays que s'utilitzen: " + con1 + " i " + con2 + '<br/>');
document.write("Resultat: " + conF + '<br/>');

//constructor Returns the function that created the Array object's prototype
document.write('<h1>constructor</h1>');
let constructor = new Array(3);
document.write("Funcio que s'utilitza: constructor" + '<br/>');
document.write("Array que s'utilitza: " + constructor + '<br/>');
document.write("Longitud de l'array: " + constructor.length + '<br/>');

//copyWithin() Copies array elements within the array, to and from specified positions
document.write('<h1>copyWithin()</h1>');
let copy1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let copy2 = copy1;
copy1.copyWithin(1, 4, 5);
document.write("Funcio que s'utilitza: copyWithin()" + '<br/>');
document.write("Array que s'utilitza: " + copy2 + '<br/>');
document.write("Resultat: " + copy1 + '<br/>');

//entries() Returns a key/value pair Array Iteration Object
document.write('<h1>entries()</h1>');
let entries1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let entriesF = entries1.entries();
document.write("Funcio que s'utilitza: entries()" + '<br/>');
document.write("Array que s'utilitza: " + entries1 + '<br/>');
document.write("Resultat: ");
for (let e of entriesF) {
    document.write(e + "  ");
}
document.write('<br/>');

//every() Checks if every element in an array pass a test
document.write('<h1>every()</h1>');
let every1 = [1, 2, 3, 4, 5, 6];
let everyF = every1.every((value) => value > 0);
document.write("Funcio que s'utilitza: every()" + '<br/>');
document.write("Array que s'utilitza: " + every1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(value)=> value > 0' + '<br/>');
document.write("Resultat: " + everyF + '<br/>');

//fill() Fill the elements in an array with a static value
document.write('<h1>fill()</h1>');
let fill1 = [1, 2, 3, 4, 5, 6];
document.write("Funcio que s'utilitza: fill()" + '<br/>');
document.write("Array que s'utilitza: " + fill1 + '<br/>');
let fillF = fill1.fill(0, 2, 4);
document.write("Valors que s'utilitza: " + '0,2,4' + '<br/>');
document.write("Resultat: " + fillF + '<br/>');

//filter() Creates a new array with every element in an array that pass a test
document.write('<h1>filter()</h1>');
let filter1 = [1, 2, 3, 4, 5, 6];
let filterF = filter1.filter((value) => value > 3);
document.write("Funcio que s'utilitza: filter()" + '<br/>');
document.write("Array que s'utilitza: " + filter1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(value)=> value > 3' + '<br/>');
document.write("Resultat: " + filterF + '<br/>');

//find() Returns the value of the first element in an array that pass a test
document.write('<h1>find()</h1>');
let find1 = [10, 23, 3, 44, 51, 6];
let findF = find1.find((value) => value > 20);
document.write("Funcio que s'utilitza: find()" + '<br/>');
document.write("Array que s'utilitza: " + find1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(value)=> value > 20' + '<br/>');
document.write("Resultat: " + findF + '<br/>');

//findIndex() Returns the index of the first element in an array that pass a test
document.write('<h1>findIndex()</h1>');
let findIndex1 = [10, 23, 3, 44, 51, 6];
let findIndexF = findIndex1.findIndex((value) => value > 20);
document.write("Funcio que s'utilitza: findIndex()" + '<br/>');
document.write("Array que s'utilitza: " + findIndex1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(value)=> value > 20' + '<br/>');
document.write("Resultat: " + findIndexF + '<br/>');

//flat() Concatenates sub-array elements
document.write('<h1>flat()</h1>');
let flat1 = [10, 23, 3, [44, 51, 6]];
let flatF = flat1.flat();
document.write("Funcio que s'utilitza: flat()" + '<br/>');
document.write("Array que s'utilitza: " + '[10, 23, 3, [44, 51, 6]]' + '<br/>');
document.write("Resultat: " + flatF + '<br/>');

//flatMap() Maps all array elements and creates a new flat array
document.write('<h1>flatMap()</h1>');
let flatMap1 = [10, 44, 3, 44, 51, 6];
let flatMapF = flatMap1.flatMap((num) => num == 44 ? [4, 4] : num);
document.write("Funcio que s'utilitza: flatMap()" + '<br/>');
document.write("Array que s'utilitza: " + flatMap1 + '<br/>');
document.write("Resultat: " + flatMapF + '<br/>');

//forEach() Calls a function for each array element
document.write('<h1>forEach()</h1>');
document.write("Funcio que s'utilitza: forEach()" + '<br/>');
let forEach1 = [10, 23, 3, 44, 51, 6];
document.write("Array que s'utilitza: " + forEach1 + '<br/>');
document.write("Resultat: " + '<br/>');
forEach1.forEach((num) => document.write(num + '<br/>'))

//from() Creates an array from an object
document.write('<h1>from()</h1>');
let from1 = 'from';
let from2 = [1, 2, 3];
let from1F = Array.from(from1);
let from2F = Array.from(from2, (num) => num + num);
document.write("Funcio que s'utilitza: from()" + '<br/>');
document.write("Array que s'utilitza: " + from1 + '<br/>');
document.write("Resultat: " + from1F + '<br/>');
document.write("Array que s'utilitza: " + from2 + '<br/>');
document.write("Resultat: " + from2F + '<br/>');

//includes() Check if an array contains the specified element
document.write('<h1>includes()</h1>');
let includes1 = [10, 23, 3, 44, 51, 6];
let includesF = includes1.includes(10);
document.write("Funcio que s'utilitza: includes()" + '<br/>');
document.write("Array que s'utilitza: " + includes1 + '<br/>');
document.write("Valors que s'utilitza: " + '10' + '<br/>');
document.write("Resultat: " + includesF + '<br/>');

//indexOf() Search the array for an element and returns its position
document.write('<h1>indexOf()</h1>');
let indexOf1 = [10, 44, 3, 44, 51, 6];
let indexOfF = indexOf1.indexOf(44);
document.write("Funcio que s'utilitza: indexOf()" + '<br/>');
document.write("Array que s'utilitza: " + indexOf1 + '<br/>');
document.write("Valors que s'utilitza: " + '44' + '<br/>');
document.write("Resultat: " + indexOfF + '<br/>');

//isArray() Checks whether an object is an array
document.write('<h1>isArray()</h1>');
let isArray1 = [10, 44, 3, 44, 51, 6];
let isArray2 = "Hola";
let isArray1F = Array.isArray(isArray1);
let isArray2F = Array.isArray(isArray2);
document.write("Funcio que s'utilitza: isArray()" + '<br/>');
document.write("Array que s'utilitza: " + isArray1 + '<br/>');
document.write("Resultat: " + isArray1F + '<br/>');
document.write("Array que s'utilitza: " + isArray2 + '<br/>');
document.write("Resultat: " + isArray2F + '<br/>');

//join() Joins all elements of an array into a string
document.write('<h1>join()</h1>');
let join1 = [10, 44, 3, 44, 51, 6];
let joinF = join1.join('-');
document.write("Funcio que s'utilitza: join()" + '<br/>');
document.write("Array que s'utilitza: " + join1 + '<br/>');
document.write("Resultat: " + joinF + '<br/>');

//keys() Returns a Array Iteration Object, containing the keys of the original array
document.write('<h1>keys()</h1>');
let keys1 = ['a', 'b', 'c', 'd', 'e', 'f'];
document.write("Array que s'utilitza: " + keys1 + '<br/>');
document.write("Funcio que s'utilitza: keys()" + '<br/>');
let keysF = keys1.keys();
for (const key of keysF) {
    document.write(key + "<br/>");
}

//lastIndexOf() Search the array for an element, starting at the end, and returns its position
document.write('<h1>lastIndexOf()</h1>');
let lastIndexOf1 = [10, 44, 3, 44, 51, 6];
let lastIndexOfF = lastIndexOf1.lastIndexOf(44);
document.write("Funcio que s'utilitza: lastIndexOf()" + '<br/>');
document.write("Array que s'utilitza: " + lastIndexOf1 + '<br/>');
document.write("Resultat: " + lastIndexOfF + '<br/>');

//length Sets or returns the number of elements in an array
document.write('<h1>length</h1>');
let length1 = [10, 44, 3, 44, 51, 6];
let lengthF = length1.length;
document.write("Funcio que s'utilitza: length" + '<br/>');
document.write("Array que s'utilitza: " + length1 + '<br/>');
document.write("Resultat: " + lengthF + '<br/>');

//map() Creates a new array with the result of calling a function for each array element
document.write('<h1>map()</h1>');
let map1 = [10, 44, 3, 44, 51, 6];
let mapF = map1.map((num) => num * 2);
document.write("Funcio que s'utilitza: map()" + '<br/>');
document.write("Array que s'utilitza: " + map1 + '<br/>');
document.write("Resultat: " + mapF + '<br/>');

//pop() Removes the last element of an array, and returns that element
document.write('<h1>pop()</h1>');
let pop1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: pop()" + '<br/>');
document.write("Array que s'utilitza: " + pop1 + '<br/>');
let popF = pop1.pop();
document.write("Resultat: " + popF + '<br/>');

//prototype Allows you to add properties and methods to an Array object
document.write('<h1>prototype()</h1>');
let prototype1 = [10, 44, 3, 44, 51, 6];
let prototypeF = Array.prototype.prototype1;
document.write("Funcio que s'utilitza: prototype()" + '<br/>');
document.write("Array que s'utilitza: " + prototype1 + '<br/>');
document.write("Resultat: " + prototypeF + '<br/>');

//push() Adds new elements to the end of an array, and returns the new length
document.write('<h1>push()</h1>');
let push1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: push()" + '<br/>');
document.write("Array que s'utilitza: " + push1 + '<br/>');
let pushF = push1.push(3);
document.write("Resultat: " + push1 + '<br/>');
document.write("Resultat: " + pushF + '<br/>');

//reduce() Reduce the values of an array to a single value (going left-to-right)
document.write('<h1>reduce()</h1>');
let reduce1 = [10, 44, 3, 44, 51, 6];
let initialValue1 = 0;
let reduceF = reduce1.reduce((acumulat, valor) => acumulat + valor, initialValue1);
document.write("Funcio que s'utilitza: reduce()" + '<br/>');
document.write("Array que s'utilitza: " + reduce1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(acumulat, valor) => acumulat + valor, initialValue1' + '<br/>');
document.write("Resultat: " + reduceF + '<br/>');

//reduceRight() Reduce the values of an array to a single value (going right-to-left)
document.write('<h1>reduceRight()</h1>');
let reduceRight1 = [10, 44, 3, 44, 51, 6];
let initialValue2 = 0;
let reduceRightF = reduce1.reduce((acumulat, valor) => acumulat - valor, initialValue2);
document.write("Funcio que s'utilitza: reduceRight()" + '<br/>');
document.write("Array que s'utilitza: " + reduceRight1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(acumulat, valor) => acumulat - valor, initialValue2' + '<br/>');
document.write("Resultat: " + reduceRightF + '<br/>');

//reverse() Reverses the order of the elements in an array
document.write('<h1>reverse()</h1>');
let reverse1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: reverse()" + '<br/>');
document.write("Array que s'utilitza: " + reverse1 + '<br/>');
let reverseF = reverse1.reverse();
document.write("Resultat: " + reverseF + '<br/>');

//shift() Removes the first element of an array, and returns that element
document.write('<h1>shift()</h1>');
let shift1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: shift()" + '<br/>');
document.write("Array que s'utilitza: " + shift1 + '<br/>');
let shiftF = shift1.shift();
document.write("Array final: " + shift1 + '<br/>');
document.write("Resultat: " + shiftF + '<br/>');

//slice() Selects a part of an array, and returns the new array
document.write('<h1>slice()</h1>');
let slice1 = [10, 44, 3, 44, 51, 6];
let sliceF = slice1.slice(1, 3);
document.write("Funcio que s'utilitza: slice()" + '<br/>');
document.write("Array que s'utilitza: " + slice1 + '<br/>');
document.write("Valors que s'utilitza: " + '1, 3' + '<br/>');
document.write("Resultat: " + sliceF + '<br/>');

//some() Checks if any of the elements in an array pass a test
document.write('<h1>some()</h1>');
let some1 = [10, 44, 3, 44, 51, 6];
let someF = some1.some((num) => num > 50);
document.write("Funcio que s'utilitza: some()" + '<br/>');
document.write("Array que s'utilitza: " + some1 + '<br/>');
document.write("Funcio que s'utilitza: " + '(num)=> num > 50' + '<br/>');
document.write("Resultat: " + someF + '<br/>');

//sort() Sorts the elements of an array
document.write('<h1>sort()</h1>');
let sort1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: sort()" + '<br/>');
document.write("Array que s'utilitza: " + sort1 + '<br/>');
let sortF = sort1.sort();
document.write("Resultat: " + sortF + '<br/>');

//splice() Adds/Removes elements from an array
document.write('<h1>splice()</h1>');
let splice1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: splice()" + '<br/>');
document.write("Array que s'utilitza: " + splice1 + '<br/>');
let spliceF1 = splice1.splice(1, 0, 2);
document.write("Valors que s'utilitza: " + '1, 0, 2' + '<br/>');
document.write("Resultat: " + splice1 + '<br/>');
let spliceF2 = splice1.splice(7, 1, 2);
document.write("Valors que s'utilitza: " + '7, 1, 2' + '<br/>');
document.write("Resultat: " + splice1 + '<br/>');

//toString() Converts an array to a string, and returns the result
document.write('<h1>toString()</h1>');
let toString1 = [10, "hola", 3, "44", 51, "sdfg"];
document.write("Funcio que s'utilitza: toString()" + '<br/>');
document.write("Array que s'utilitza: " + toString1 + '<br/>');
document.write("Resultat: " + toString1.toString() + '<br/>');

//unshift() Adds new elements to the beginning of an array, and returns the new length
document.write('<h1>unshift()</h1>');
let unshift1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: unshift()" + '<br/>');
document.write("Array que s'utilitza: " + unshift1 + '<br/>');
let unshiftF = unshift1.unshift(4, 5);
document.write("Valors que s'utilitza: " + '4, 5' + '<br/>');
document.write("Resultat: " + unshiftF + '<br/>');

//valueOf() Returns the primitive value of an array
document.write('<h1>valueOf()</h1>');
let valueOf1 = [10, 44, 3, 44, 51, 6];
document.write("Funcio que s'utilitza: valueOf()" + '<br/>');
document.write("Array que s'utilitza: " + valueOf1 + '<br/>');
document.write("Resultat: " + valueOf1.valueOf() + '<br/>');
