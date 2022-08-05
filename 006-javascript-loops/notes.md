# FOR...OF LOOP
-these are great for running a for loop when you want to repeat something for each entry in an array
-syntax :
    for(const item of ARRAY) {
        FUNCTION
    }
-first example:
    const groceries = ['apples', 'bananas', 'jam' ,'bread', 'cereal']
    for (item of groceries){
        console.log('${item} is on my grocery list')
    }

-another example: this loop looks at the array of "students" for each student, it prints out "Welcome to class, ITEM"
    const students = ['Maxine', 'Akeem', 'Agi', 'Mohammed', 'Bernice']
    for(const item of students) {
        console.log(`Welcome to class, ${item}!`)
    }

- for...of loops are great when you're doing repetitive things with lists

-another example
    for (const [index, food] of groceries.entries()) {
        console.log(index, food)
    }

# FOR LOOP

-example:

    for(let i = 0; i<groceries.length; i++>) {
        console.log(groceries[i])
    }

-in the code above, we're declaring and assigning a variable called i (you could think of 'i' as standing for 'index'), it will represent the index of the array you're visiting
-so in this loop, the first line is saying "while i is less than groceries.length, we run the code (console.log), then increase the index by index again. This will run until i is equal to groceries.length
-this code will print out each grocery item 

-another example: here, we're listing out each item of the grocery list, but we also want to write the number next to it (1,2,3,4), we need i+1 otherwise our list numbers will start at 0

    for(let i = 0; i<groceries.length; i++>) {
        console.log(`${i+1} ${groceries[i]}`)
    }

# WHILE LOOP
-you have to be careful of these loops because they can end up running indefinitely 
-if you get stuck in an infinite loop, you can ctrl + c to get out of it
-while loops need some sort of condition underwhich it'll stop

-example:
    while(i < 10) {
        console.log(`i = ${i}`)
        i = i + 3
    }

-in the loop above, you first look at the value of i, if it's less than 10, then you print: i = NUMBER, then add 3 to value of i and repeat the loop as long as i < 10

