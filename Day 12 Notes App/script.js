showNotes();

function addNote(){
  let note = document.getElementById("noteInput").value;

  if(note === ""){
    alert("Please write a note");
    return;
  }

  let noteDiv = document.createElement("div");
  noteDiv.className = "note";

  let noteText = document.createElement("p");
  noteDiv.innerText= note;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.className = "delete-btn";

  deleteButton.onclick = function() {
    noteDiv.remove();
    saveNotes();
  };

  noteDiv.appendChild(noteText);
  noteDiv.appendChild(deleteButton);

  document.getElementById("notesContainer").appendChild(noteDiv);

  document.getElementById("noteInput").value = "";

  saveNotes();

}

  function saveNotes(){
    localStorage.setItem(
      "notes",
      document.getElementById("notesContainer").innerHTML
    );
  }

  function showNotes(){
    document.getElementById("notesContainer").innerHTML =
    localStorage.getItem("notes") || "";

document.querySelectorAll(".delete-btn").forEach(function(button){
  button.onclick = function() {
    button.parentElement.remove();
    saveNotes();
  };
});

}