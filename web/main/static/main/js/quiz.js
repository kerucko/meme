    image = document.getElementById('image'),
	button_3 = document.getElementById('button_3');
	button_2 = document.getElementById('button_2');
	button_1 = document.getElementById('button_1');
	button0 = document.getElementById('button0');
	button1 = document.getElementById('button1');
	button2 = document.getElementById('button2');
	button3 = document.getElementById('button3');


var count_click = 0;
var id = "Count";
var max = document.getElementById(id);
alert(max);

button_3.onclick = function(){
    if (count_click <= 5) {
        image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
        count_click = count_click + 1;
        id_pictures = Math.floor(Math.random() * 2631 + 1);
    }
    else {
        alert("meow");
        //переход на другую страницу
        //выход из программы
    }
}
button_2.onclick = function(){
    if (count_click <= 5) {
        image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
        count_click = count_click + 1;
        id_pictures = Math.floor(Math.random() * 2631 + 1);
    }
    else {
        alert("meow");
        //переход на другую страницу
        //выход из программы
    }
}
button_1.onclick = function(){
id_pictures = Math.floor(Math.random() * 2631 + 1);
image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
}
button0.onclick = function(){
id_pictures = Math.floor(Math.random() * 2631 + 1);
image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
}
button1.onclick = function(){
id_pictures = Math.floor(Math.random() * 2631 + 1);
image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
}
button2.onclick = function(){
id_pictures = Math.floor(Math.random() * 2631 + 1);
image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
}
button3.onclick = function(){
id_pictures = Math.floor(Math.random() * 2631 + 1);
image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
}

