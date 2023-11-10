import React from 'react';

function NoteItem({ note, onClick }) {
  return (
    <li onClick={() => onClick(note)}>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </li>
  );
}

export default NoteItem;
