


function drawMove(event){
 console.log(event.target.className);
 
 let square = document.querySelector('.'+event.target.className);
 
 let currentPlayer = document.querySelector('.player').innerHTML;

 if(square.innerHTML===''){
//проверяем, что клеточка пустая: если это так, то ставим X или O,
//если там уже что-то нарисовано, то ничего не делаем

if(currentPlayer === 'Player1'){//проверяем, чей сейчас ход
 square.innerHTML = 'X';
 document.querySelector('.player').innerHTML = 'Player2';

  }
  else {
    square.innerHTML = 'O';
    document.querySelector('.player').innerHTML = 'Player1';

  }
  
}






}

let gameField = document.querySelector('.gameField');

gameField.addEventListener('click', drawMove);