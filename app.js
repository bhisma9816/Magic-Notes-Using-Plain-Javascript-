showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
  let addTxt = document.getElementById('addTxt');
  let addTitle = document.getElementById('addTitle');
  let notes = localStorage.getItem('notes');
  let notesTitle = localStorage.getItem("notesTitle");
  if (notes == null && notesTitle == null) {
    notesObj = [];
    notesTitleObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
    notesTitleObj = JSON.parse(notesTitle);

  }
  notesObj.push(addTxt.value);
  notesTitleObj.push(addTitle.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  localStorage.setItem('notesTitle', JSON.stringify(notesTitleObj));
  addTxt.value = '';
  addTitle.value = '';
  showNotes();

})
function showNotes() {
  let notes = localStorage.getItem('notes');
  let notesTitle = localStorage.getItem("notesTitle");
  if (notes == null && notesTitle==null) {
    notesObj = [];
    notesTitleObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
    notesTitleObj = JSON.parse(notesTitle);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="card mx-2 my-2" style="width: 18rem;">
             <div class="card-body">
             <h4 class="card-title">${notesTitleObj[index]}</h4>
            <p class="card-text">${element}</p>
             <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
            </div>`;

  });
  let notesElem = document.getElementById('notes');
  if (notesObj.length != 0 && notesTitleObj.length !=0) {
    notesElem.innerHTML = html;
  }
  else{
    notesElem.innerHTML = 'No element to show . Please Enter the notes and press Add button to save the notes';
  }

}

function deleteNote(index){
  let notes = localStorage.getItem('notes');
  let notesTitle = localStorage.getItem("notesTitle");
  if (notes == null && notesTitle ==null) {
    notesObj = [];
    notesTitle = [];
  }
  else {
    notesObj = JSON.parse(notes);
    notesTitleObj = JSON.parse(notesTitle);
  }
  notesObj.splice(index,1);
  notesTitleObj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  localStorage.setItem('notesTitle',JSON.stringify(notesTitleObj));
  showNotes();

}





