import React from 'react';

function NoteViewer({ note, onEdit, onShare, onEmail }) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onShare}>Share</button>
      <button onClick={onEmail}>Email</button>
    </>
  );
}

export default NoteViewer;
