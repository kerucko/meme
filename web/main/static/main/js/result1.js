result = document.getElementById('Result');
title = document.getElementById('Title');
text = document.getElementById('Text');


var q = localStorage.getItem('result');
result.innerHTML = '<b>' + q + '%</b>';

if (q >= 80) {
    title.innerHTML = `
    <p>Поздравляем!</p>
    <p>Ваш результат:</p>
    `
    text.innerHTML = `
    <p>It\`s a match!</p> <p>Вы идеально подходите друг другу &ltЗ </p>
    `
}
if (40 <= q && q < 80) {
    title.innerHTML = `
    <p>Ну...</p>
    <p>Ваш результат:</p>
    `
    text.innerHTML = `
    <p>В принципе, Вы общаетесь не с самым</p> <p>кринжовым человеком. Ура!</p>
    `
}
if (q < 40) {
    title.innerHTML = `
    <p>Увы...</p>
    <p>Ваш результат:</p>
    `
    text.innerHTML = `
    <p>У нашей команды нет слов.... </p>
    <p>Cовет от Кошки: прекратите общение </p>
    <p>с этим человеком как можно скорее, мяу (шутка) </p>
    `
}
