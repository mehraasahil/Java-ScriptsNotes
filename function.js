// on click example
var bod = document.getElementById('body')
var button = document.getElementById('button')
button.onclick = function(){
    if (bod.className=='black'){
      bod.className='white';
      button.className='black';
    }
    else{
        bod.className='black';
        button.className='white';
    }
}




