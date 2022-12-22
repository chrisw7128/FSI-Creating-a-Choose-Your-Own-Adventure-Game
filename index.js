//Your Code here
var firstAnswer = window.prompt('Do you head left or right?')

if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path? (follow or continue)`)
    if(secondAnswer == 'follow'){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. (stay or spread the word)')
        if(thirdAnswer == 'stay'){
            let fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.')
        }
        else if(thirdAnswer == 'spread the word'){
            let fourthAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }
        }
    }
    else if(secondAnswer == 'continue'){
        let thirdAnswer = window.alert('You next come across a dog...')
    }
} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take, treasure or away?`)
    if(secondAnswer == 'treasure'){
        let thirdAnswer = window.alert('You got the treasure.')
    }
    else if(secondAnswer == 'away'){
        let thirdAnswer = window.alert('You got home safe and sound.')
    }
}
