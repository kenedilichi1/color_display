

let boxOne = document.getElementById('box__1');
let boxTwo = document.getElementById('box__2');
let boxThree = document.getElementById('box__3');
let boxFour = document.getElementById('box__4');
let boxFive = document.getElementById('box__5');
let boxSix = document.getElementById('box__6');
let boxSeven = document.getElementById('box__7');
// box click event
boxColors();
function boxColors(){
    

    boxOne.addEventListener('click', function(){
        boxOne.style.background = generateRandomColor();
    });
    boxTwo.addEventListener('click', function(){
        boxTwo.style.background = generateRandomColor();
    });
    boxThree.addEventListener('click', function(){
        boxThree.style.background = generateRandomColor();
    });
    boxFour.addEventListener('click', function(){
        boxFour.style.background = generateRandomColor();
    });
    boxFive.addEventListener('click', function(){
        boxFive.style.background = generateRandomColor();
    });
    boxSix.addEventListener('click', function(){
        boxSix.style.background = generateRandomColor();
    });
    boxSeven.addEventListener('click', function(){
        boxSeven.style.background = generateRandomColor();
    });
    
}

// To generate random colors
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0);
    console.log(randomColor)
    return `#${randomColor.toUpperCase()}`;
}




// To generate primary colors
let rainBowColors = document.getElementById("primary__color-button");
let rainBowColorArray = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
rainBowColors.addEventListener('click', rainBow);






// rainbow color function with fisher-yates algorithim

function rainBow() {
    // first write the fisher-yates algorithim to shuffle the rainBowColorArray
    function rainBowArry(rainBowColorArray) {
        let i = rainBowColorArray.length;
        if(i === 0) return false;
        while (--i) {
            let j = Math.floor(Math.random()*(i + 1));
    
            let tempi = rainBowColorArray[i];
            let tempj = rainBowColorArray[j];
            rainBowColorArray[i] = tempj;
            rainBowColorArray[j] = tempi;
        }
    }
    
    rainBowArry(rainBowColorArray);

    boxOne.style.background = rainBowColorArray[0];
    boxTwo.style.background = rainBowColorArray[1];
    boxThree.style.background = rainBowColorArray[2];
    boxFour.style.background = rainBowColorArray[3];
    boxFive.style.background = rainBowColorArray[4];
    boxSix.style.background = rainBowColorArray[5];
    boxSeven.style.background = rainBowColorArray[6];

}




// Reset Button
let resetButton = document.getElementById('reset__button');
resetButton.addEventListener('click', resetButtonClick);

function resetButtonClick(){
   let boxColors = document.querySelectorAll('.box');
   console.log(boxColors)
   boxColors.forEach(function (boxColors){
       return boxColors.style.background = "#0000FF";
   })
}