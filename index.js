//Your Code here
var thing = window.prompt('Do you head left or right?')

if(thing === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
    if(secondAnswer == 'follow'){
        let thirdAnswer = window.prompt('Your foot got stuck in the hole.')
    }
    else if(secondAnswer == 'continue'){
        let thirdAnswer = window.prompt('You next come across a dog...')
    }
} else if(thing === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take, treasure or away?`)
    if(secondAnswer == 'treasure'){
        let thirdAnswer = window.prompt('You got the treasure.')
    }
    else if(secondAnswer == 'away'){
        let thirdAnswer = window.prompt('You got home safe and sound.')
    }
}
