let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input")
let resultButton = document.getElementById("result-button")






playButton.addEventListener("click", play)


function pickRandom() {
  computerNum = Math.floor(Math.random() * 10);
  console.log("랜덤으로 생성된 숫자는", computerNum);
}

function play(){
    let userValue = userInput.value
    console.log("게임시작")
    if(userValue > computerNum){
        resultButton.textContent = "DOWN"
    }
    else if(userValue < computerNum){
        resultButton.textContent = "UP"
    }
    else if(userValue == computerNum){
        resultButton.textContent = "CONGRATS!"
    }
    
}

pickRandom();
console.log(playButton)
