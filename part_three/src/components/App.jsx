import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([{
    title: "This is a title!",
    content: "this is content!!"
  }])

  function addNote(note) {
    setNoteList((prev) => [...prev, note])
  }

  function handleDelete(id) {
    setNoteList((prev) => prev.filter((item, index) => index !== id))
  }


  return (
    <div>
      <Header />
      <CreateArea submitForm={addNote}/>
      {noteList.map((note, index) => (<Note key={index} id={index} title={note.title} content={note.content} deleteNote={handleDelete}/>))}
      <Footer />
    </div>
  );
}

export default App;
