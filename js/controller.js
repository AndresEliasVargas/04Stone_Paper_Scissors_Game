'use strict';

const btnPlay = document.querySelector('#btnPlay');
const btnFinish = document.querySelector('#btnFinish');
const sOutput = document.querySelector('#txtOutputName');
const divSelectOptions = document.querySelector('#sectionOptions');
const aImages = [document.querySelector('#stone'), document.querySelector('#paper'), document.querySelector('#scissor')];
const aNames = ['stone', 'paper', 'scissor'];


let sUser = document.querySelector('#txtUserName');
let sOption = '';

btnFinish.disabled = true; //Disable finish button

const validateUser = (psUser) => {
    let bError = false;

    if (psUser === '' || psUser === undefined) {
        bError = true;
    };

    return bError;
};

const letsPlay = () => {
    let sUserName = sUser.value;

    let bError = validateUser(sUserName);

    /* User and finish button */
    if (bError == true) {
        sOutput.innerHTML = '<p class="text-danger font-weight-bold display-4">User name required</p>';
        btnFinish.disabled = true; //Disable finish button
    } else {
        sOutput.innerHTML = ''; //erase error
        sUser.disabled = true; //disable input user name
        btnFinish.disabled = false; //enable Finish btn
        divSelectOptions.classList.remove('d-none'); //Enable Options
    };

    /* Selected option and local storage */
    
    divSelectOptions.addEventListener('click', function (event) {
        let clickedElem = event.target;
        let selectedOption = 0;
        
        //0 = stone || 1 = paper || 2 = scissor 
        if(clickedElem == aImages[0]){
            selectedOption = 0;
        } else if(clickedElem == aImages[1]){
            selectedOption = 1;
        } else if(clickedElem == aImages[2]){
            selectedOption = 2;
        };

        console.log(selectedOption);
        
    }, false);

};

const finishGame = () => {
    sUser.value = ''; //erase input text value
    sUser.disabled = false; //enable user name
    btnFinish.disabled = true; //Disable finish button
    divSelectOptions.classList.add('d-none'); //Disable Options
};

btnPlay.addEventListener('click', letsPlay);
btnFinish.addEventListener('click', finishGame);
