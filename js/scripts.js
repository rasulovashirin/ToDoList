var elToDoForm = document.querySelector ('.todo__form');
var elResults = document.querySelector ('.results');
var elWarning = document.querySelector ('.wrong-message');
if (elToDoForm){
  var elToDoInput = elToDoForm.querySelector ('.todo__input');
  var elToDoCheckbox = elToDoForm.querySelector ('.todo__checkbox');
  var elToDoButton = elToDoForm.querySelector ('button');
}

if(elToDoForm){
  var test =[];

  elToDoForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var newElement = document.createElement('div');
    elResults.appendChild(newElement);

    var isImportant = elToDoCheckbox.checked;

    if(test.includes(elToDoInput.value)){
      elWarning.textContent =('List includes this element!');
      return
    }else{
      elWarning.textContent =('');

    }


    if(!isImportant){
      test.push(elToDoInput.value);
      newElement.textContent = (test[test.length - 1]);
      console.log(test);
    }
    if(isImportant){
      test.unshift(elToDoInput.value);
      newElement.textContent = test[0];
      newElement.classList.add('important');
      newElement.classList.add('font-weight-bold');
      console.log(test);
    }


    elToDoInput.value = '';









  })

}
