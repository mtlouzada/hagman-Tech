import { selectRandomQuestions, showQuestion, validateUserAnswer, showFinalResult } from './service/services';
import entradados from 'readline-sync';

    console.log("\n------------------WELCOME TO------------------");
    console.log(`
  ___ ___                                              
 /   |   \\_____    ____    ____   _____ _____    ____  
/    ~    \\__  \\  /    \\  / ___\\ /     \\__  \\  /    \\ 
\\    Y    // __ \\|   |  \\/ /_/  >  Y Y  \\/ __ \\|   |  \\
 \\___|_  /(____  /___|  /\\___  /|__|_|  (____  /___|  /
       \\/      \\/     \\//_____/       \\/     \\/     \\/ 
                                                       
           _________    _____   ____                   
  ______  / ___\\__  \\  /     \\_/ __ \\                  
 /_____/ / /_/  > __ \\|  Y Y  \\  ___/                  
         \\___  (____  /__|_|  /\\___  > /\\  /\\          
        /_____/     \\/      \\/     \\/  \\/  \\/          
`)


const nomeJogador = entradados.question('Enter a letter: ');