Javascript Conditional Logic Reading notes:
-we can use logical operators to condition other commands
-code:
if(CONDITION){
    THEN X
} else{
    THEN Y
    }
for example:

if(5 > 6){
    console.log('five is greater than six')
} else{
    console.log('six is greater than five')
}

-truthy
-falsey
...what?
-ternary operator
-two characters-- ? : , reserved for simple if/else cases
e.g., 'Unicorns are' + (isMagical ? 'my friends' : 'not real') == if isMagical is truthy, 'Unicorns are my friends' if isMagical is falsey, 'Unicorns are not real'

JavaScript Variables reading notes
-first declare variable with 'let' or const' + VAR, 
'let' says "this thing is a variable," 'const' says "this is a variable and you can never ever change its value

-then you need to define it, using = 
e.g., let name = 'Maxine Van Doren"

-you can redefine regular variables using the '=' operator,
but you can't redefine const variables

-Questions from this reading: none

Notes from homework:
-++ operator, if it occurs before the variable, it incremements FIRST and then evaluates. 
-if it occurs after the variable, it evaluates the variable THEN incremements
-to run a .js script, node FILE.js or node ./FILE.js


# Notes about Markdown
- use a single hashtag to make a heading
- use a single dash to make a bulletpoint
1. use numbers to make a numbered list.
2. This is similar to R markdown