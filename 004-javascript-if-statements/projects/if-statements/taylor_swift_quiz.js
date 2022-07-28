//This is a quiz that assigns users a taylor swift era that represents them
// based on responses to personality question. 

setTimeout(() => {console.log(`Taylor Swift`)}, 500);
setTimeout(() => {console.log(`the woman`)}, 1500);
setTimeout(() => {console.log(`the icon`)}, 2500);
setTimeout(() => {console.log(`the legend`)}, 3500);
setTimeout(() => {console.log(`Her nearly 2 decade careeer has crossed genres in music and fashion. 
Take this quiz to find out which Taylor Swift you are.`)}, 4500);

//Eras: Fearless, Speak now, Red, 1989, Reputation, Lover, Folklore/Evermore
const prompt = require('prompt-sync')()

setTimeout(()=>{
let style = prompt('which best describes your style: cowboy, bespoke, eclectic, goth: ')
let color = prompt('what color do you like the best: blue, purple, red, black: ')
let word = prompt('Which word captures how other people describe you: spunky, bold, adventurous, sweet: ')

//fearless
if (style === 'cowyboy' && color === 'blue' && word === 'spunky'){
    console.log(`Wooh, you are Fearless!`)
}

//speak now
else if (style === 'cowboy' && color === 'purple' && word === 'spunky'){
        console.log(`The world better watch out: You are Speak Now!`)
}

//red
else if (style === 'eclectic' && color === 'red' && word === 'bold'){
    console.log(`Are you OK? You're classic heartbreak Taylor: Red`)
}

//1989
else if (style === 'eclectic' && color === 'red' && word === 'spunky'){
    console.log(`You're breaking the mold. You're 1989`)
}

//reputation
else if (style === 'goth' && color === 'black' && word === 'bold'){
    console.log(`Ah, Reputation. Taylor's bad girl moment. Congrats on being a badass`)
}


//lover
else if (style === 'bespoke' && color === 'purple' && word === 'sweet'){
    console.log(`Your world must be full of rainbows and butterflies because you are Lover`)
}

//folklore/evermore
else if (style === 'bespoke' && color === 'black' && word === 'adventurous'){
    console.log(`You're mysterious. You're mature. You're Folklore/Evermore`)
}

else (console.log(`You don't fit any of Taylor Swift's eras. You're either forging your own path or chose to ignore the answer choices. We'll just go with option A.`))
}
, 7000)




//question for class: what if someone puts in an answer that doesn't match the quiz?