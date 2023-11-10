import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onNoteClick }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onClick={onNoteClick} />
      ))}
    </ul>
  );
}

export default NoteList;
