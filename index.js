let choices = document.querySelectorAll(".choice img");
let msgs = document.querySelectorAll('#msg img');
let result = document.querySelector('#result');


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userSelection = choice.getAttribute('id');
    let userImg = choice.getAttribute('src');
    let displayMsg = '';
    const computerChoices = ["rock", "paper", "scissors"];
    const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    const computerImg = computerSelection+'.png';

    if ((userSelection == 'rock' && computerSelection == 'scissors') || (userSelection == 'paper' && computerSelection == 'rock') || (userSelection == 'scissors' && computerSelection == 'paper')) {
      displayMsg = 'You won';
    }
    else if ((userSelection == 'paper' && computerSelection == 'scissors') || (userSelection == 'scissors' && computerSelection == 'rock') || (userSelection == 'rock' && computerSelection == 'paper')) {
      displayMsg = 'Computer won';
    }
    else {
      displayMsg = 'Sorry, Draw!';
    }

    msgs.forEach((msg) => {
      if(msg.id === 'user'){
        msg.setAttribute('src', userImg);
        msg.classList.remove('hide');
      }
      else{
        msg.setAttribute('src', computerImg);
        msg.classList.remove('hide');
      }
    });
    result.textContent = displayMsg;
  })
});