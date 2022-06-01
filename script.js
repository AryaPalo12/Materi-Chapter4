button1 = document.getElementById("button_1")
button1.onclick=function(){
	document.getElementById("p1").style.backgroundColor="red";
}

button2 = document.getElementById("button_2");

let p1_thingy = document.getElementById("p1");

let pNumbering = 1;

button2.onclick=function(){
	const parent_node = document.getElementById("parent")
	document.getElementById("p1").style.backgroundColor="blue";
	let cloned_thingy = p1_thingy.cloneNode(true);
	pNumbering += 1;
	let newP = "p"+pNumbering;
	cloned_thingy.id= newP;
	parent_node.append(cloned_thingy);
}