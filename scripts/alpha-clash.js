// function play(){
//     // Step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;


    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    // check the right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point')
        // console.log('you have pressed correctly', expectedAlphabet);
        
        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElemetValueById('current-score',  updatedScore);
        
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // console.log(currentScoreText);


        // // 2. increase the score 

        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgrounColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('dhurr vaiya ba aoy ............. right key press koro');

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1 ;
        setTextElemetValueById('current-life', updateLife);

        if(updateLife === 0){
            gameOver();
        }
        // --------------------------------------------------
        // Step-1: get the current life number

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2. reduced the life count
        // const newLife = currentLife -1;

        // //  3. Step : display the updated life count
        // currentLifeElement.innerText = newLife;
    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


// function handleKeyboardButtonPress(){
//     console.log('button pressed');
// }

// // capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress );

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your alphabet is: ', alphabet);

    // set randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);


}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElemetValueById('current-life', 5);
    setTextElemetValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')

    // update final score
    // 1. get the final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElemetValueById('game-score', lastScore);
}