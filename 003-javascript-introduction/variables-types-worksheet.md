First answers/guesses
100 + 4, type = number, value = 104
'a' + 'b', type = string, value = ab
'Bob' + 'Smith', type = string, value = BobSmith
'7' + '9', type = string, value = 79
'7' + 9, type = number, value = 16
'7' - 9, type = number, value = -2
'abc'*3, type = string, value = 'abcabcabc'
7+2*3, type = number, value = 13
(7+2)*3, type = number, value = 27
(null + 2)/3, type = number, value = .66
name, type = string, value = undefined
z-3, type = string, value = 25
a && b, type = boolean, value = false
a || b, type = boolean, value = true
foo/2, type = string, value = ?
nextAge - wholeAge, type = number, value = 1
'5' + 3 -3, type = number, value = 5
isRed = !isRed, type = string, value = false
isBlue, type = string, value = true
name.lenght + age, type = string, value = Sally25
point:  "+poitn, type = string, value = point: [ +10+ , +73+ ]
numberofGoats+numberofSheep, type = number, value = 
numberofGoats - ++numberofSpeech, type = number, value ?
y, type = number, value = undefined

Checking work:
First answers/guesses
100 + 4, type = number4, value = 104 (type was incorrect)
'a' + 'b', type = string, value = ab, correct
'Bob' + 'Smith', type = string, value = BobSmith, correct
'7' + '9', type = string, value = 79, correct
'7' + 9, type = number, value = 79, (value was incorrect + coerces number to a string)
'7' - 9, type = number, value = -2, correct
'abc'*3, type = number, value = NaN, (type and value were incorrect)
7+2*3, type = number, value = 13, correct
(7+2)*3, type = number, value = 27, correct
(null + 2)/3, type = number, value = .66, correct
name, type = undefined, value = undefined (type was incorrect)
z-3, type = number, value = 25 (type of was incorrect)
a && b, type = boolean, value = false, correct
a || b, type = boolean, value = true, correct
foo/2, type = number, value = 2.5 (type and number were incorrect, ++ adds 1 to a number)
nextAge - wholeAge, type = number, value = 1, correct
'5' + 3 -3, type = number, value = 50 (value was incorrect..but strange? type coercion doesn't follow order of operations)
isRed = !isRed, type = boolean, value = true (value and type were incorrect)
isBlue, type = boolean, value = true (type was incorrect)
name.lenght + age, type = string, value = Sally25 (incorrect, didn't read name.length correctly, adds length of sally  + 25, type = number, value = 30)
point:  "+poitn, type = string, value = point: [10, 73], (value was somewhat incorrect but overall got the idea)
numberofGoats+numberofSheep, type = number, value = 19, correct but I don't understand why the increment didn't apply here)--the correct one was numberOfGoats + numberOfSheep++, this should have an error since the ++ at the end is incorrect
numberofGoats - ++numberofSpeech, type = number, value -15 (value was inccorect, need to go over this operation, I don't understand it well)
y, type = number, value = undefined (value was wrong, note = sign in the parentheses)


