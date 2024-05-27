import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(event) {
    props.onAdd(Note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={Note.title}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={Note.content}
          placeholder="Take a note"
          rows="3"
          required
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
