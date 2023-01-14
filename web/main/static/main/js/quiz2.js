function result(marks1, marks2){
    m1 = marks1.split('_');
    m2 = marks2.split('_');
    res = 1;
    for (let i = 0; i < max; i++) {
        razn = Math.abs(m1[i] - m2[i]);
        if (razn == 6) {
            res = res * 0.4;
        }
        if (razn == 5) {
            res = res * 0.6;
        }
        if (razn == 4) {
            res = res * 0.8;
        }
        if (razn == 3) {
            res = res * 0.9;
        }
        if (razn == 2) {
            res = res * 0.95;
        }
        if (razn == 1) {
            res = res * 1;
        }
        if (razn == 0) {
            res = res * 1;
        }
    }

    return Math.floor(res * 100);
}


function nextMeme() {
    if (count_click < max) {
        id_pictures = memes1[count_click];
        image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
        count_click = count_click + 1;
        count.innerText = count_click + '/' + max;
    }
    else {
        var res = result(first_user_marks, marks);
        localStorage.setItem('result', res);
        document.location = "http://127.0.0.1:8000/awesome";
    }
}

image = document.getElementById('image');
button_3 = document.getElementById('button_3');
button_2 = document.getElementById('button_2');
button_1 = document.getElementById('button_1');
button0 = document.getElementById('button0');
button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');
count = document.getElementById('Count');

first_user_memes = document.getElementById('Memes').innerText;
first_user_marks = document.getElementById('Marks').innerText;
max = document.getElementById('Count_click').innerText;

memes1 = first_user_memes.split('_');
marks1 = first_user_marks.split('_');

var id_pictures = memes1[0];
image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
var count_click = 1;

var marks = '';

count.innerText = count_click + '/' + max;

button_3.onclick = function(){
    marks = marks + '_-3';
    nextMeme();
}
button_2.onclick = function(){
    marks = marks + '_-2';
    nextMeme();
}
button_1.onclick = function(){
    marks = marks + '_-1';
    nextMeme();
}
button0.onclick = function(){
    marks = marks + '_0';
    nextMeme();
}
button1.onclick = function(){
    marks = marks + '_1';
    nextMeme();
}
button2.onclick = function(){
    marks = marks + '_2';
    nextMeme();
}
button3.onclick = function(){
    marks = marks + '_3';
    nextMeme();
}