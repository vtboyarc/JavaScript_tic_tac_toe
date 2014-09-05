window.onload = function(){
  
   alert("X goes first!");
  
  // Collection of all squares on the board.
  // var squares = document.getElementsByTagName('td'); withut jquery
  var $squares = $("td"); // with jquery
  
  var turn = "X";
  var counter = 0;
  var win = false;



  function add_mark(){
    if (counter % 2 == 0){
      turn = "X";
      this.innerHTML = turn;
      this.style.background = "lightblue";
      counter++;
    }
    else { (counter % 2 == 1)
      turn = "O";
      this.innerHTML = turn;
      this.style.background = "lightgreen";
      counter++;
    }
    this.removeEventListener("click", add_mark);
     winningConditions();
  }

  var winningConditions = function() {
    if((squares[0].innerHTML == "X" && squares[1].innerHTML == "X" && squares[2].innerHTML == "X") ||
    (squares[3].innerHTML == "X" && squares[4].innerHTML == "X" && squares[5].innerHTML == "X") || 
    (squares[6].innerHTML == "X" && squares[7].innerHTML == "X" && squares[8].innerHTML == "X") || 
    (squares[0].innerHTML == "X" && squares[3].innerHTML == "X" && squares[6].innerHTML == "X") || 
    (squares[1].innerHTML == "X" && squares[4].innerHTML == "X" && squares[7].innerHTML == "X") ||
    (squares[2].innerHTML == "X" && squares[5].innerHTML == "X" && squares[8].innerHTML == "X") || 
    (squares[0].innerHTML == "X" && squares[4].innerHTML == "X" && squares[8].innerHTML == "X") || 
    (squares[2].innerHTML == "X" && squares[4].innerHTML == "X" && squares[6].innerHTML == "X"))
     {
       win = true;
       click();
      alert("X wins!");
      
    }
    
    else if 
     ((squares[0].innerHTML == "O" && squares[1].innerHTML == "O" && squares[2].innerHTML == "O") || 
     (squares[3].innerHTML == "O" && squares[4].innerHTML == "O" &&  squares[5].innerHTML == "O") || 
     (squares[6].innerHTML == "O" && squares[7].innerHTML == "O" && squares[8].innerHTML == "O") || 
     (squares[0].innerHTML ==  "O" && squares[3].innerHTML == "O" && squares[6].innerHTML == "O") ||
     (squares[1].innerHTML == "O" && squares[4].innerHTML == "O" && squares[7].innerHTML == "O") ||
     (squares[2].innerHTML == "O" && squares[5].innerHTML == "O" &&  squares[8].innerHTML == "O") ||
     (squares[0].innerHTML == "O" && squares[4].innerHTML == "O" &&  squares[8].innerHTML == "O") || 
     (squares[2].innerHTML == "O" && squares[4].innerHTML == "O" && squares[6].innerHTML == "O"))
     {
       win = true;
       click();
       alert("O wins!");
       
     }
    
    else {
      win = true;
      click();
      alert("Tie game!");
    }
 
  
  };
  
  $squares.each(function(i){
    console.log("Adding click-listener to square number " + i);
    
    $(this).on("click", add_mark);
  });
				
  				if (win === true) {
  					squares[i].removeEventListener("click", add_mark);
  				};
  	

  	click();
  }
