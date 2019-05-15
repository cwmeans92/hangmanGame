// Creating Global Variables/Arrays//
let words= ["red", "blue", "grey", 'black', 'pink', 'orange', 'violet', 'white', 'green', 'yellow', 'brown'];

let randWord= Math.floor(Math.random()*words.length);

let chosenWord= words[randWord]

let rightAnswer= [];

let wrongAnswer= [];

let underScore= [];

// Pushing user input to the HTML with Dom Manipulation//

let underActual= document.getElementsByClassName('underscore');
let rightAnswerActual= document.getElementsByClassName('rightAnswer');
let wrongAnswerActual= document.getElementsByClassName('wrongAnswer');

// Generating underscores based on length of chosen word//

let underscoreGen= () => {
    for (let i = 0; i<chosenWord.length; i++) {
        underScore.push('_');
        // pushing to fill with user input//
        underActual[0].innerHTML = underScore.join(' ')
    }
    return underScore;

}

// Getting user input//

document.addEventListener('keypress', (event) => {

    
    let keyCode = event.keyCode;
    
    // converting keypress to a useable character for game//
    
    let keyWord= String.fromCharCode(keyCode);
    
    // if correct display in the right guess box and in the underscore box//
    
    if(chosenWord.indexOf(keyWord)> -1) {
        rightAnswer.push(keyWord);
        underActual[0].innerHTML = underScore.join(' ');
        rightAnswerActual[0].innerHTML = rightAnswer.join(' ');
        underScore[chosenWord.indexOf(keyWord)]=keyWord;
    
        // display win message if correct word is guessed 
    
        if(underScore.join('') == chosenWord) {
            alert('You Win!!!');
        }
    }
    // if incorrect push to wrong guess box//
    else{
        wrongAnswer.push(keyWord);
        wrongAnswerActual[0].innerHTML = wrongAnswer.join(' ');
    }
    }
); 


console.log(chosenWord);

