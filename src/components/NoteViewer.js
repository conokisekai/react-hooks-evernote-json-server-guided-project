import React from 'react';

function NoteViewer({ note, onEdit }) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEdit}>Edit</button>
    </>
  );
}

export default NoteViewer;
