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

link = document.getElementById('toCopy');
var memes = localStorage.getItem('memes');
var marks = localStorage.getItem('marks');
localStorage.removeItem('memes');
localStorage.removeItem('marks');

link.innerText = marks;