function mostraClassifica(event){
    const button = event.currentTarget;
    button.removeEventListener('click', mostraClassifica);

    const classifica = document.querySelector('#classificaNascosta');
    classifica.classList.remove('hidden');
    button.remove();
}

const button = document.querySelector('#mostraClassifica');
button.addEventListener('click', mostraClassifica);