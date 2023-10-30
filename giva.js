function toogleicons(){
	var iconElement1 = document.getElementById("icon1");
	var iconElement2 = document.getElementById("icon2");

	if(iconElement1.style.display==="none"){
		iconElement1.style.display="block";
		iconElement2.style.display="none";
	}
	else{
		iconElement1.style.display="none";
		iconElement2.style.display="block";
	}
}   
// function toogleicons(icon){
// 	var iconElement1 = icon.parentElement;
// 	var icons= iconElement1.querySelectorAll(".icon");
	
// 	for (var i=0;i<icons.lengtl;i++){
// 		icons[i].style.diaplay=icons[i]===icon ?"none" : "block";
// 	}
	 

// }  