document.querySelector("main").remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "<h1#victory>YOUR-NAME is the champion</h1>";