var imgs=[
		'http://www.icenews.is/wp-content/uploads/2015/02/animals-1-700x700.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZghyt2L03zlqdj_6F7EPbCCsWWnAcVsvJ3_xv7cc-IraZc-o',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPEJ0n_tXI0No_5AgkeVpzomxp4mI8jlQv3rsKQQHNh671QU_'
	],
	image=document.getElementById('image'),
	button=document.getElementById('button');

button.onclick=function(){
image.src=imgs[Math.floor(Math.random()*imgs.length)];
}


id_pictures = function(){
return randomInteger(5, 2739);
}

document.getElementById("imaaaga").innerHTML = '<img src="img/'+id_pictures()+'.jpg" border="0" />';

