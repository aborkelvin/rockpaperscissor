// Rock paper scissors game on console
function game() {
    let pscore = 0;          //to store the players total score
    let cscore = 0;          //to store the computers ,,   ,, 
    
    for (let i = 0; i < 5; i++) {
        let computer;
        function computerplay() {
            /*generate random numbers between 1 and 3,
            store rock, paper and scissors in an array.
            on selection of the numbers btwn 1 and 3, the corresponding value from the array will be dislayed*/
            let max = Math.floor(Math.random()*(3));
            let box = ['Rock','Scissors','Paper'];
            
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
        let player = prompt('Please make your selection');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player !=='rock' && player !=='paper' && player !=='scissors') {
            console.log('Please input an appropriate object');
            return;
        }
        console.log('player is ' + player);
        console.log('computer is '+ computer);

        function oneround(player, computer) {
            if ((player == 'rock' && computer =='scissors')||(player == 'scissors' && computer == 'paper')||(player == 'paper' && computer == 'rock')) {
                let disp;
                disp = 'Congratulations player,'+ player + ' beats '+ computer;
                pscore+=1;
                return disp;
                console.log(disp);
            }else if((computer == 'rock' && player =='scissors')||(computer == 'scissors' && player == 'paper')||(computer == 'paper' && player == 'rock')){
                let crisp = 'You Lost! '+ computer + ' beats '+ player; 
                cscore+=1;
                return crisp;
                console.log(crisp);
            }else if(computer == player){
                let tie = 'this was a tie, you have to replay';
                return tie;
                console.log(tie);
            }

        }
        console.log(oneround(player, computer));
        console.log("Player's score is "+pscore);
        console.log("Computer's score is "+cscore);
    }

    if (pscore>cscore) {
        console.log('Good job, player wins the round');
    } else if(cscore >pscore){
        console.log('Computer wins the round, try again');
    }else{
        console.log('We have a tie, Care for another round?');
    }
}

game();
