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


alert(makeid(10));
link = document.getElementById('toCopy');
var memes = localStorage.getItem('memes');
var marks = localStorage.getItem('marks');
//localStorage.removeItem('memes');
//localStorage.removeItem('marks');
//
//link.innerText = marks;