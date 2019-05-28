function solve() {
   let sendBtn = document.getElementById('send');
   let currentDiv = document.getElementsByClassName('my-message')[0];
   let chatDiv = document.getElementById('chat_messages');
   let textAreaElement = document.getElementById('chat_input');

   sendBtn.addEventListener('click', function() {
      let newDIv = currentDiv.cloneNode(true);
      let text = textAreaElement.value;

      if(text !== '') {
         chatDiv.appendChild(newDIv);
         newDIv.textContent = text;
         textAreaElement.value = '';
      }
   });
}


