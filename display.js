 	var gCount=0;
	var player1Clr='#7FFF00';
	var player2Clr="#ff0048";

	var gBtn0Count=-1;
	var gBtn1Count=-1;
	var gBtn2Count=-1;
	var gBtn3Count=-1;
	
	var gBtn4Count=-1;
	var gBtn5Count=-1;
	var gBtn6Count=-1;
	
	//The most commonly used Connect Four board size is 7 columns × 6 rows. Size variations include 5×4, 6×5, 8×7, 9×7, 10×7, 8×8,]
	var columns =7;
	var rows = 6;
	let arrayConnect4 = [
	[0,0,0,0,0,0,0,0],			//00 01 02 03 row col
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
	];

	function isAnyWinner() { 
		// 2 to 4 ways to check
		var i, j; 
		//1. first way : colm wise
		for (i = 0; i < columns; i++) { 
		console.table(" isAnyWinner: "+i+"  "+arrayConnect4[i]);
		  for (j = 0; j < rows - 3; j++) { //only 3times for row			
			console.log("player1Clr");
			
			console.log("arrayConnect4[j][i] j:"+j+" i:"+i+" data="+arrayConnect4[j][i]); 
		    console.log(" arrayConnect4[j+3][i]:"+ arrayConnect4[j+3][i]); 
			if(arrayConnect4[j][i] == arrayConnect4[j+1][i])
				console.log("1line");  
			
			if(arrayConnect4[j][i] != 0 &&
			   arrayConnect4[j][i] == arrayConnect4[j+1][i] &&
			   arrayConnect4[j+1][i] == arrayConnect4[j+2][i] &&
			   arrayConnect4[j+2][i] == arrayConnect4[j+3][i]) {
				   console.log(" got winner *** "+arrayConnect4[j+2][i]);
				   return(arrayConnect4[j+2][i])
			   } 
		  }
		} 
		
		//2. row wise : 7 columns × 6 rows
		for (i = 0; i < columns  ; i++) { 
		console.table(" isAnyWinner(row): "+i+"  "+arrayConnect4[i]);
		  for (j = 0; j < rows ; j++) { //only 2times for row			
		  
		    console.log(" arrayConnect4[j][i]:"+ arrayConnect4[j][i])
			
			/*console.log("player1Clr");
			
			console.log("arrayConnect4[j][i] j:"+j+" i:"+i+" data="+arrayConnect4[j][i]);
			console.log("arrayConnect4[j+1][i] :"+arrayConnect4[j+1][i]);
		    console.log(" arrayConnect4[j+2][i]:"+ arrayConnect4[j+2][i]);
			
		    console.log(" arrayConnect4[j+3][i]:"+ arrayConnect4[j+3][i]);
			
			if(arrayConnect4[j][i] == arrayConnect4[j+1][i])
				console.log("1line");
			if(arrayConnect4[j][i] == arrayConnect4[j+1][i] &&
			   arrayConnect4[j+1][i] == arrayConnect4[j+2][i] )
				console.log("1line111");
			
		  
			if(arrayConnect4[j][i] != 0 &&
			   arrayConnect4[j][i] == arrayConnect4[j+1][i] &&
			   arrayConnect4[j+1][i] == arrayConnect4[j+2][i] &&
			   arrayConnect4[j+2][i] == arrayConnect4[j+3][i]) {
				   console.log(" got winner(row wise) ****** "+arrayConnect4[j+2][i]);
				   return(arrayConnect4[j+2][i])
			   } */
		  }
		} 
		
		//3. dialog ?
		return(0); //no winner till now
	}
	
	function isAnyWinnerRow() { 
		// 2 to 4 ways to check
		var i, j; 
	//2. row wise : 7 columns × 6 rows
		for (i = 0; i < columns  ; i++) { 
		console.table(" isAnyWinner(row): columns:"+columns+" rows:"+rows+" i:"+i+"  "+arrayConnect4[i]);
		  for (j = 0; j < rows ; j++) { //only 2times for row			
		  
		  // console.log(" arrayConnect4[i][j]:"+ arrayConnect4[i][j] +"   j:"+j+" i:"+i) 
		  console.log(" arrayConnect4[j][i]:"+ arrayConnect4[j][i] +"   j:"+j+" i:"+i)//printing 1 whole cols wise 
			
			/*console.log("player1Clr");
			
			console.log("arrayConnect4[j][i] j:"+j+" i:"+i+" data="+arrayConnect4[j][i]);
			console.log("arrayConnect4[j+1][i] :"+arrayConnect4[j+1][i]);
		    console.log(" arrayConnect4[j+2][i]:"+ arrayConnect4[j+2][i]);
			
		    console.log(" arrayConnect4[j+3][i]:"+ arrayConnect4[j+3][i]);
			
			if(arrayConnect4[j][i] == arrayConnect4[j+1][i])
				console.log("1line");
			if(arrayConnect4[j][i] == arrayConnect4[j+1][i] &&
			   arrayConnect4[j+1][i] == arrayConnect4[j+2][i] )
				console.log("1line111");
			
		  
			if(arrayConnect4[j][i] != 0 &&
			   arrayConnect4[j][i] == arrayConnect4[j+1][i] &&
			   arrayConnect4[j+1][i] == arrayConnect4[j+2][i] &&
			   arrayConnect4[j+2][i] == arrayConnect4[j+3][i]) {
				   console.log(" got winner(row wise) ****** "+arrayConnect4[j+2][i]);
				   return(arrayConnect4[j+2][i])
			   } */
		  }
		}  
		//3. dialog ?
		return(0); //no winner till now
	}
	
    function setColor(btn) {
		var btnExtra;
		var winner = -1;
		console.table(arrayConnect4);
		if(btn=="buttonC0")
		{
			gBtn0Count=gBtn0Count+1;
			btnExtra = btn+gBtn0Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn0Count][0]=1;
			else
				arrayConnect4[gBtn0Count][0]=2;
		} 	
		else if(btn=='buttonC1')
		{
			gBtn1Count=gBtn1Count+1;
			btnExtra = btn+gBtn1Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn1Count][1]=1;
			else
				arrayConnect4[gBtn1Count][1]=2;
		}
		else if(btn=='buttonC2')
		{
			gBtn2Count=gBtn2Count+1;
			btnExtra = btn+gBtn2Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn2Count][2]=1;
			else
				arrayConnect4[gBtn2Count][2]=2;
		}
		else if(btn=='buttonC3')
		{
			gBtn3Count=gBtn3Count+1;
			btnExtra = btn+gBtn3Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn3Count][3]=1;
			else
				arrayConnect4[gBtn3Count][3]=2;
		} 
		else if(btn=='buttonC4')
		{
			gBtn4Count=gBtn4Count+1;
			btnExtra = btn+gBtn4Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn4Count][4]=1;
			else
				arrayConnect4[gBtn4Count][4]=2;
		} 
		else if(btn=='buttonC5')
		{
			gBtn5Count=gBtn5Count+1;
			btnExtra = btn+gBtn5Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn5Count][5]=1;
			else
				arrayConnect4[gBtn5Count][5]=2;
		} 
		else if(btn=='buttonC6')
		{
			gBtn6Count=gBtn6Count+1;
			btnExtra = btn+gBtn6Count;
			if(gCount % 2 == 0) //can use for whole
				arrayConnect4[gBtn6Count][6]=1;
			else
				arrayConnect4[gBtn6Count][6]=2;
		}  
		//alert("color"+" button id:"+btn+" adding1:"+btnExtra+" player1Color:"+player1Clr+" player2Color:"+player2Clr);
		console.log("color"+" button id:"+btn+" adding:"+btnExtra+" arrayConnect4:"+arrayConnect4+" gCount:"+gCount); 
		var property = document.getElementById(btnExtra);//lbl
		//common if condition
		if(gCount % 2 == 0) //can use for whole
		{
			console.log("player1Clr");
            property.style.backgroundColor = player1Clr;			
        }
        else
        {
			console.log("player2Clr");
            property.style.backgroundColor = player2Clr;
			arrayConnect4[0][gCount]=2;
        }
		//check if any winner only after 8clicks
		if(gCount > 5)
		{
			winner = isAnyWinner(); //isAnyWinnerRow();
			console.log(" winner is :"+winner); 
			var property = document.getElementById("lbl");
			if(winner == 1)
			{
				property.innerHTML="Player one won, Congratulations ";
				alert(property.innerHTML+", resetting..");
			}
			if(winner == 2)
			{
				property.innerHTML="Player two won, Congratulations ";
				alert(property.innerHTML);
			}
		}
        gCount=gCount+1; 
	} 
