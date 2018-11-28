var str1="hi my name is shiva sai sai"
var str2="iam from ece department"

console.log(str1.charAt(3));//it returns the character of the specified position.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
m
*/

console.log(str1.charCodeAt(1));//it returns the unicode of the character at the specified index.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
105
 */

console.log(str1.concat(str2));//joins two or mare strings and returns a new joinned string.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
hi my name is shiva saiiam from ece department
 */

console.log(str1.endsWith("sai"));
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
true
 */

console.log(str1.includes("name"));//it checks whether the specified string is present in the original string or not.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
true
*/

console.log(str1.indexOf("sai"));//it returns the position of the first found occurance of the specified value in a string.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
20
 */

console.log(str1.lastIndexOf("sai"));//it returns the position of the last found occurance of the specified value in a string. 
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
24
*/

console.log(str1.match(/sai/g));//it is going to search a string for match against a regular expression and returns the matches.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
[ 'sai', 'sai' ]
*/

console.log(str1.repeat(2));//it returns the new string with specified amount of copies of existing string.
/*    
C:\Users\shiva sai\node\assignment 3>node stringfunctions
hi my name is shiva sai saihi my name is shiva sai sai
 */

 console.log(str1.replace(/sai/g,"SAI"));//it replaces the  old string with new string.
 /*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
hi my name is shiva SAI SAI*/

console.log(str1.search("shiva"));//it searches the required regular expression/value and returns the position of that. 
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
14 */

console.log(str1.slice(2,5));//it returns the string from position 2 to position 5

/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
 my*/

console.log(str1.split(" "));//it splits the string in array of sub strings.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
[ 'hi', 'my', 'name', 'is', 'shiva', 'sai', 'sai' ] */

console.log(str1.startsWith("hi"));//it checks the string is starting with specified character or not
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
true */

console.log(str1.substr(2,4));//it will begin the string from index 2 and ends after 4 characters.
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
 my*/

console.log(str1.substring(2,4));//it extracts the characters between two positions. 
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
 m */

console.log(str1.toLowerCase());//it converts the to lower case
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
hi my name is shiva sai sai
 */

console.log(str1.toUpperCase());//it converts the string to upper case
/*
C:\Users\shiva sai\node\assignment 3>node stringfunctions
HI MY NAME IS SHIVA SAI SAI */

var str="      shiva sai    ";
console.log(str.trim());//this function removes the white spaces from either end of the string.

/*C:\Users\shiva sai\node\assignment 3>node stringfunctions
shiva sai */