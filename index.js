let clicks = 0;
let pscore = 0;          //to store the players total score
let cscore = 0;          //to store the computers ,,   ,, 

function game(player) {
    

        let computer;
        function computerplay() {
            /*generate random numbers between 0 and 2,
            store rock, paper and scissors in an array.
            on selection of the numbers btwn 0 and 2, the corresponding value from the array will be dislayed*/
            let max = Math.floor(Math.random()*(3));
            let box = ['rock','scissors','paper'];
            
            switch (max) {
                case 0:
                    computer = box[0];
                    break;
                case 1:
                    computer = box[1];
                    break;
                case 2:
                    computer = box[2];
                    break;
            }
        }

        computerplay();
        

        if (player !=='rock' && player !=='paper' && player !=='scissors') {
            console.log('Please input an appropriate object');
            return;
        }
        
        
        


        function oneround(player, computer) {
            if ((player == 'rock' && computer =='scissors')||(player == 'scissors' && computer == 'paper')||(player == 'paper' && computer == 'rock')) {
                let disp;
                disp = 'You win,'+ player + ' beats '+ computer;
                pscore+=1;
                return disp;
                console.log(disp);
            }else if((computer == 'rock' && player =='scissors')||(computer == 'scissors' && player == 'paper')||(computer == 'paper' && player == 'rock')){
                let crisp = 'You Lose! '+ computer + ' beats '+ player; 
                cscore+=1;
                return crisp;
                console.log(crisp);
            }else if(computer == player){
                let tie = 'tie, you have to replay';
                return tie;
                console.log(tie);
            }

        }
        remark.textContent = oneround(player, computer);
        result.appendChild(remark);
        plscore.textContent = "Player's score is "+pscore;  
        result.appendChild(plscore);
        cpscore.textContent = "Computer's score is "+cscore;
        result.appendChild(cpscore);
        pcname.textContent = 'player is ' + player + ' and computer is '+ computer;
        result.insertBefore(pcname, remark);
        
        

    //}
    clicks += 1;
    console.log('number of clicks is '+clicks);
    finals.textContent = '';    
        
    if (pscore == 5 || cscore ==5){
        if (pscore>cscore) {
            finals.textContent = 'Good job, player wins the round';
        } else if(cscore >pscore){
            finals.textContent = 'Computer wins the round, try again';
        }else{
            finals.textContent = 'We have a tie, Care for another round?';
        }
        clicks = 0;      //resets the number of clicks to 0 so it begins a new round when the buttons are clicked
        pscore = 0;     //resets the player's score to 0 so the score of the new round counts afresh
        cscore = 0;     //resets the computers score too
    }

    
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


const result = document.querySelector('.result');
const finals = document.querySelector('.finals');


const pcname = document.createElement('div');
const remark = document.createElement('p');
remark.classList.add('remark');
const plscore = document.createElement('p');
plscore.classList.add('plscore');
const cpscore = document.createElement('p');
cpscore.classList.add('cpscore');


paper.addEventListener('click', function(){game('paper');})
scissors.addEventListener('click', function(){game('scissors');});
rock.addEventListener('click',function(){game('rock');});


