/* Nav */
const navButtonContainer = document.querySelector(".nav-button-container");
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector("nav ul");

function toggleCloseButtonClass(bttn){
	bttn.classList.toggle("close-button");
}

function toggleNavOpenClass(menu) {
	menu.classList.toggle("nav-open");
}


navButtonContainer.addEventListener("click", function(){
	toggleCloseButtonClass(navButton);
	toggleNavOpenClass(navMenu);
})


/* Scroll */


window.addEventListener("keydown", function(){
	if (event.keyCode > 36 && event.keyCode < 41) {	event.preventDefault();
}
})

window.addEventListener("keyup", function(event){
	event.preventDefault();
	
	// let scrolled = document.documentElement.scrollTop;
	// let documentHeight = document.documentElement.scrollHeight;
	let viewportHeight = window.innerHeight;
	// let scrollable = documentHeight - viewportHeight;
	
	if (event.keyCode == 38){
		// Arrow up key
			document.documentElement.scrollTop -= viewportHeight;		
		}	else if (event.keyCode == 40){
		// Arrow down key
			document.documentElement.scrollTop += viewportHeight;		
		} else {return;}
	
	
});


window.addEventListener("wheel", function(event){
	event.preventDefault();
	
	let viewportHeight = window.innerHeight;
	
	if (event.deltaY > 0) {
	console.log("Go down.");
	document.documentElement.scrollTop += viewportHeight;
	} else if (event.deltaY < 0){
		console.log("Go up.");
		document.documentElement.scrollTop -= viewportHeight;
	} else {return;};
	
	
}, {passive: false});
