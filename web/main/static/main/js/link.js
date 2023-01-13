function Copy(containerid) {
      let textarea = document.createElement('textarea');
      textarea.id = 'temp';
      textarea.style.height = 0;
      document.body.appendChild(textarea);
      textarea.value = document.getElementById(containerid).innerText;
      let selector = document.querySelector('#temp');
      selector.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


link = document.getElementById('toCopy');
marks_text = document.getElementById('Marks');
memes_text = document.getElementById('Memes');
id_text = document.getElementById('ID');

var memes = localStorage.getItem('memes');
var marks = localStorage.getItem('marks');
//var max = localStorage.getItem('max');
//alert(max);
localStorage.removeItem('memes');
localStorage.removeItem('marks');


marks_text.value = marks;
memes_text.value = memes;
var generated_id = makeid(10);
id_text.value = generated_id;

link.innerText = 'http://127.0.0.1:8000/other?mode=' + generated_id;
