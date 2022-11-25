let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let previousGuess = 0;

function getNumber() {
    const para = document.getElementsByClassName('number');
    const guessNum = Number(para[0].value);
    let answer = document.getElementsByClassName("answer");
    if(answer[0].childNodes.length > 0){
        answer[0].childNodes.forEach(childEle => {
            childEle.data = '';
        })
    }
    previousGuess = guessNum;
    document.getElementsByClassName('number')[0].value = "";
    if(guessNum === randomNumber){
        answer[0].append("Guess is correct!!");
        answer[0].style.color = 'green';
    }else {
        const textNode = document.getElementsByClassName('prevguess');
        textNode[0].append(previousGuess+ ' ')
        if(guessNum < randomNumber){
            answer[0].append("Too low than the correct number");
        }else {
            answer[0].append("Too high than the correct number");
        }
    }
  }
  
  const button = document.querySelector('button');
  
  button.addEventListener('click', getNumber);






