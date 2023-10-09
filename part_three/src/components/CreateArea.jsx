import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        props.submitForm(note);
        setNote({title: "", content: ""});
        }}>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
