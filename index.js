console.log("give yourself more credit :)");
let pageText = document.getElementById('text');

document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded");
    pageText.innerHTML = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered."
);