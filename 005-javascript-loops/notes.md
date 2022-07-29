#JavaScript Arrays
- arrays are basically like lists, you declare them with square brackets []
- arrays are ordered (starting at 0), you can index items based on their place, e.g., VAR[2] will index the third item in the array, VAR[0] will index the first item in the array
- you can use variables to index items as well (e.g., if the variable - number)
- you can add items to the end of an array using VAR.push('ITEM')
- you can add items to the beginning of an array using VAR.unshift('ITEM')
-to change an element that's in the array, you index it, and then you define as something else
VAR[index] = NEW DEFINITION
-if you want to get the length of your array: console.log(VAR.length) if you're writing a script, but if you're writing in node, you can use colors.length as its own expression, you can also use the expression within your code (e.g., within an if-statement)
- if you put a variable in the array, then the item that will end up in your array will be whatever the variable is defined as (e.g., if you put the variable BLUE in your array, and blue is defined as 5, then the number 5 will end up in your array, not the expression blue)
- This is how you can make an empty array and add elemnents based on user input
let names = [];
names.push(prompt('What is your first name? '));
names.push(prompt('What is your middle name? '));
names.push(prompt('What is your last name? '));

#JavaScript Loops
- three types of loops: while, do...while, for loops
- question: I don't understand the difference between while/do while

#How to clone someone's repository
-go to github repository
-copy the .git link for the repository
-In hyper make sure you make a new directory so you don't clone it into you an existing directory
-the use the code: git clone LINK.git

#Things you can do with VS Code (tips and tricks)
-keyboard shortcuts:
    - to select every occurance of a particular thing: select the thing you want to change, do ctrl + shift + L, all of them will be hightlighted/have a cursor in front of them. You can change or delete all of those things
- extensions:
    - for example, prettier, makes your code all pretty
    - to install other extensions: click on the icon with the 4 boxes, search for the extension you want, click install
    - Live Share is another extension that allows multiple people to work on one code, this worked well in browser, but couldn't get it to work with our own VSC

