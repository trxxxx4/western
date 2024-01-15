const myFirstJsExpirience = "hate women, blv>>>";
console.log(myFirstJsExpirience);


const numberArray = [0, 1, 2, 3, 4,];
const emojiArray = ["🍒", "🍓", "🍋", "🍍", "💎"];

console.log(numberArray);
console.log(emojiArray);




const min = 0;
const max = 4;

function buttonWatch(){
    let button = document.querySelector(".button");
    
    button.addEventListener("click", function() {
    stavka = 0;
    document.getElementById("input_pole").value;

    





    randonInt1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randonInt3 = Math.floor(Math.random() * (max - min + 1)) + min;
    randonInt2 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    let emPrize1 = document.querySelector('[data-prize="prize1"]');
    emPrize1.innerHTML = emojiArray[randonInt1];
    document.querySelector('[data-prize="prize1"]').classList.add('kpop');
    
    
    let emPrize2 = document.querySelector('[data-prize="prize2"]');
    emPrize2.innerHTML = emojiArray[randonInt2];
    document.querySelector('[data-prize="prize2"]').classList.add('kpop');
    
    
    let emPrize3 = document.querySelector('[data-prize="prize3"]');
    emPrize3.innerHTML = emojiArray[randonInt3];
    
    document.querySelector('[data-prize="prize3"]').classList.add('kpop');
    if (randonInt1 ==randonInt3 && randonInt1==randonInt2 && randonInt1 !=4) {
        stavka = document.getElementById("input_pole").value * 3;
        loot = document.querySelector('[data-loot="clear"]');
        loot.innerHTML =`Ваш выйгрыш: ${stavka}`;
        
    } else if (randonInt1 == randonInt2 && randonInt1 != randonInt3){
        stavka = document.getElementById("input_pole").value * 2;
        loot = document.querySelector('[data-loot="clear"]');
        loot.innerHTML =`Ваш выйгрыш: ${stavka}`;
        
    } else if (randonInt1 == randonInt3 && randonInt1 != randonInt2){
        stavka = document.getElementById("input_pole").value * 2;
        loot = document.querySelector('[data-loot="clear"]');
        loot.innerHTML =`Ваш выйгрыш: ${stavka}`;
        
    } else if (randonInt3 == randonInt2 && randonInt1 != randonInt3){
        stavka = document.getElementById("input_pole").value * 2;
        loot = document.querySelector('[data-loot="clear"]');
        loot.innerHTML =`Ваш выйгрыш: ${stavka}`;
        
    } else if (randonInt1 ==randonInt3 && randonInt1==randonInt2 && randonInt1 ==4) {
        stavka = document.getElementById("input_pole").value * 5;
        loot = document.querySelector('[data-loot="clear"]');
        loot.innerHTML =`Ваш выйгрыш: ${stavka}`;
        
    } else {
        stavka = 0;
        loot = document.querySelector('[data-loot="clear"]');
        loot.innerHTML =`Ваш выйгрыш: ${stavka}`;
        
    }
    });
    
}

buttonWatch();


