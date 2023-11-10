import React, { useState } from 'react';

function NoteEditor({ note, onSave, onCancel }) {
  const [editedNote, setEditedNote] = useState({ ...note });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSaveClick = () => {
    onSave(editedNote);
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <form className="note-editor">
      <input
        type="text"
        name="title"
        value={editedNote.title}
        onChange={handleChange}
      />
      <textarea name="body" value={editedNote.body} onChange={handleChange} />
      <div className="button-row">
        <input
          className="button"
          type="button"
          value="Save"
          onClick={handleSaveClick}
        />
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;
