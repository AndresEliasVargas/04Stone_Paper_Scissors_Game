'use strict';

const btnPlay = document.querySelector('#btnPlay');
const btnFinish = document.querySelector('#btnFinish');
let sUser = document.querySelector('#txtUserName');
let sOption = document.querySelector('.option');

const validateUser = (psUser, psOption) => {

    let bError = false;

    if(psUser === '' || psUser === undefined){
        bError = true;
    }else if(psOption === '' || psOption === undefined){
        bError = true;
    };

    return bError;

};

const letsPlay = () => {
    const sUserName = sUser.value;

    /*NO REFRESCA EL CAMBIO DE OPCIÓN*/
    const sOptionUser = sOption.value;

    let bError = validateUser(sUserName, sOptionUser);

    if(bError == true){
        alert('ERROR');
    }else{

        console.log(sUserName);
        console.log(sOptionUser);



    };

};

const finishGame = () => {
    
};

btnPlay.addEventListener('click', letsPlay);
btnFinish.addEventListener('click', finishGame);
