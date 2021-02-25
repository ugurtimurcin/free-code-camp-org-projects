var userScore = 0;
var computerScore = 0;

const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');
const result_text = document.querySelector('#result-text');
const user_score_text = document.querySelector('#user-score');
const comp_score_text = document.querySelector('#comp-score');

const reset_btn = document.querySelector('#resetBtn');

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const rndNum = Math.floor(Math.random() * 3)
    return choices[rndNum];
} 

function play(userChoice){
    const compChoice = getCompChoice();

    switch(userChoice + compChoice){
        case "rs":
            result_text.innerText = "rock breaks scissors";
            
        case "pr":            
            result_text.innerText = "paper covers rock";
        case "sp":            
            result_text.innerText = "scissors tears the paper";
            userScore++;
            user_score_text.innerHTML = `${userScore}`
            break;

            
            
        
        case "rp":            
            result_text.innerText = "paper covers rock"
        case "ps":
            result_text.innerText = "paper covers rock"
        case "sr":
            innerText = "rock breaks scissors"
            computerScore++;
            comp_score_text.innerHTML = `${computerScore}`
            break;

        case "rr":
        case "pp":
        case "ss":
            innerText = "Same. Its a draw!"
            break;
    }
}



function main(){
    rock_div.addEventListener('click', function(){
        play("r");
        result_text.style.visibility = "visible"
    })
    
    paper_div.addEventListener('click', function(){
        play("p");
    })
    
    scissors_div.addEventListener('click', function(){
        play("s");
    })
}



main();


reset_btn.addEventListener('click', function(){
    location.reload();
})