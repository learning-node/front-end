const mainDiv = document.getElementById("x");
const dataDiv = document.getElementById("data");
const inputBox = document.createElement('input');
inputBox.id = "input";
inputBox.type = "text";
inputBox.addEventListener('keyup', (event) => {
    console.log(event.key);
});
mainDiv.appendChild(inputBox);

const btn = document.createElement('button');
btn.id = "button";
btn.textContent = "Send";
btn.addEventListener('click', (event) => {
    // Grab text from input box.
    // Send text to server.
    const text = inputBox.value;
    console.log('text is ' + text);
    const payload = JSON.stringify({ text: text });
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => dataDiv.innerHTML = xhr.responseText;
    xhr.send(payload);
});
mainDiv.appendChild(btn);