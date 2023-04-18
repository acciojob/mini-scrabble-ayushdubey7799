//your code here
let input = document.getElementById('evaluatedText');
let letterCount = document.getElementById('letterCount');

input.addEventListener('input', function(){
    letterCount.textContent = this.value.length;
});
