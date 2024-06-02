let text = "I’am Full Stack Developer";
let h1 = document.getElementById("job");
let index = 0;
function addLetters(){
    if(index > text.length){
        index = 0;
        h1.innerHTML = "";
    }
    h1.innerHTML += text.charAt(index);
    index++;
}
let interval = setInterval(addLetters,100);
