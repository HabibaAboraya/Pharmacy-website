var counter= 1;

function next(){
 if(counter ==3){
  counter=1;
}
 else{
counter++;
}
 
 document.getElementById("slideshow").src="images/"+counter+".JPG";
}

function previous(){
 if(counter ==1){
  counter=3;
}
 else{
counter--;
}
 
 document.getElementById("slideshow").src="images/"+counter+".JPG";
}

setInterval(next,2000);