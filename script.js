console.log('HELLO');
showNotes();

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
  const note_title = document.querySelector('.note_title');
  const note_text = document.querySelector('.note_text');
  const notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if(note_text!='' && note_title!='')
  {
  notesObj.push(note_title.value);
  notesObj.push(note_text.value);
  note_text.value = '';
  note_title.value = '';
  localStorage.setItem('notes', JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  }
  else{
      if(note_title=='')
      alert('enter a suitable title for the note');
      else if(note_text=='')
      alert('enter a suitable text for the note');
  }
});

function showNotes() {
  const notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let sampleHTML = '';
  for (let i = 0; i < notesObj.length; i += 2) {
    sampleHTML += `
    <div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${notesObj[i]}</h5>
          <p class="card-text">${notesObj[i+1]}</p>
          <button href="#" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
  }
  let notesElement=document.getElementById('notes');
  
  if(notesObj!=null)
  notesElement.innerHTML=sampleHTML;
}
