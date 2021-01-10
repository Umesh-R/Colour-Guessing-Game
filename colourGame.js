var numOfColours=6;
//list of colours generated
var colours;//=colourList(numOfColours);
//list of squares
var sq;//= document.querySelectorAll(".sq");
//colour picked
var colourSelected;//=selectColour();
//rgb title 
var colourDisplay= document.querySelector("#selectedColour");
//try again or correct
var mess= document.querySelector("#message");
var h1= document.querySelector("h1");
//buttons
var reset= document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

var con = document.querySelector("#container");
var content="<div class=\"sq\"></div><div class=\"sq\"></div><div class=\"sq\"></div>";
		
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numOfColours=3;
	con.innerHTML=content;
	set();

});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numOfColours=6;
	con.innerHTML=(content+content);
	set();

});

set();

reset.addEventListener("click",set);

//FUNCTION DEFINITIONS
function selectColour()
{
	var index=Math.floor(Math.random()*colours.length);
	return colours[index];
}

function colourList(num)
{
	//make array
	var arr=[];
	//insert colours to array
	for(var i=0;i<num;i++)
	{
		arr.push("rgb("+ Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
	}
	//return array
	return arr;

}



function set()
{
	sq= document.querySelectorAll(".sq");
	mess.textContent="";
	mess.textContent="";
	reset.textContent="New colours";
	h1.style.backgroundColor="steelblue";
	colours=colourList(numOfColours);
	colourSelected=selectColour();
	colourDisplay.textContent=" "+colourSelected +" ";

	for(var i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=colours[i];
	}	

	
	for(var i=0;i<sq.length;i++)
	{
		//changing the sq colours 
		sq[i].style.backgroundColor=colours[i];

		//adding listeners to squares
		sq[i].addEventListener("click",function(){

			if(this.style.backgroundColor===colourSelected)
			{
				mess.textContent="Correct!";
				for(var i=0;i<sq.length;i++)
				{
					sq[i].style.backgroundColor=colourSelected;
				}
				h1.style.backgroundColor=colourSelected;
				reset.textContent="Play Again";
			}
			else
			{
				this.style.backgroundColor="#232323";
				mess.textContent="Try Again!";

			}
		});

	}
}