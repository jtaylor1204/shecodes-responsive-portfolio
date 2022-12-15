let instructionsList = new Instructions('directions');
let instructionsSec = document.querySelector('.work-thumbnail');

instructionsSec.addEventListener('mouseenter', (event) => {
      instructionsList.render();
      console.log('works');
  });
 
  instructionsSec.addEventListener('mouseout', (event) => {
    instructionsList.hide();
    console.log('works');
});