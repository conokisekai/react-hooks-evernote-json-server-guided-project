import React from 'react';
import NoteList from './NoteList';

function Sidebar({ notes, selectedNote, onNoteClick, onNewNote }) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onNoteClick={onNoteClick} />
      <button onClick={onNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
