'use strict';

const btnPlay = document.querySelector('#btnPlay');
const btnFinish = document.querySelector('#btnFinish');
const sOutput = document.querySelector('#txtOutputName');
const selectOptions = document.querySelector('#sectionOptions');
let sUser = document.querySelector('#txtUserName');
let sOption = document.querySelector('.option');

btnFinish.disabled = true; //Disable finish button

const validateUser = (psUser) => {

    let bError = false;

    if(psUser === '' || psUser === undefined){
        bError = true;
    };
    // else if(psOption === '' || psOption === undefined){
    //     bError = true;
    // };

    return bError;

};

const letsPlay = () => {
    let sUserName = sUser.value;
    //const sOptionUser = sOption.value;

    let bError = validateUser(sUserName);

    if(bError == true){

        sOutput.innerHTML = '<p class="text-danger font-weight-bold display-4">User name required</p>';
        btnFinish.disabled = true; //Disable finish button

    }else{

        sOutput.innerHTML = ''; //erase error
        sUser.disabled = true; //disable input user name
        btnFinish.disabled = false; //enable Finish btn
        selectOptions.classList.remove('d-none'); //Enable Options



    };

};

const finishGame = () => {
    sUser.value = ''; //erase input text value
    sUser.disabled = false; //enable user name
    btnFinish.disabled = true; //Disable finish button
    selectOptions.classList.add('d-none'); //Disable Options
};

btnPlay.addEventListener('click', letsPlay);
btnFinish.addEventListener('click', finishGame);
