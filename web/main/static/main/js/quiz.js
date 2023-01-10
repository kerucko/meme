var imgs=[
		'http://www.icenews.is/wp-content/uploads/2015/02/animals-1-700x700.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZghyt2L03zlqdj_6F7EPbCCsWWnAcVsvJ3_xv7cc-IraZc-o',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPEJ0n_tXI0No_5AgkeVpzomxp4mI8jlQv3rsKQQHNh671QU_'
	],
	image=document.getElementById('image'),
	button_3=document.getElementById('button_3');
	button_2=document.getElementById('button_2');
	button_1=document.getElementById('button_1');
	button0=document.getElementById('button0');
	button1=document.getElementById('button1');
	button2=document.getElementById('button2');
	button3=document.getElementById('button3');

button_3.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}
button_2.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}
button_1.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}
button0.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}
button1.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}
button2.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}
button3.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}


id_pictures = function(){
return randomInteger(5, 2739);
}

document.getElementById("imaaaga").innerHTML = '<img src="img/'+id_pictures()+'.jpg" border="0" />';

