const mainDiv = document.getElementById("x");
const dataDiv = document.getElementById("data");

const inputBox = document.createElement('input');
inputBox.id = "input";
inputBox.type = "text";
mainDiv.appendChild(inputBox);

const btn = document.createElement('button');
btn.id = "button";
btn.textContent = "Send";
mainDiv.appendChild(btn);

function sendRequest() {
  // Grab text from input box.
  const text = inputBox.value;
  // Reset input box to empty.
  inputBox.value = '';
  // Send text to server.
  const payload = JSON.stringify({ text: text });
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => dataDiv.innerHTML = xhr.responseText;
  xhr.send(payload);
}

inputBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      sendRequest();
    }
});


btn.addEventListener('click', (event) => {
    sendRequest();
});