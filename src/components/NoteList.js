import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onNoteClick, onSortChange }) => {
  

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onClick={onNoteClick} />
      ))}
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="date-created">Date Created</option>
        <option value="date-edited">Date Edited</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </ul>
  );
};

export default NoteList;
