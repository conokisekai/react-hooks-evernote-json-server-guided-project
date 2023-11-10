import React from 'react';
import NoteList from './NoteList';

const Sidebar = ({ notes, onSortChange, onNoteClick, onNewNote, onLogin }) => {
  return (
    <div className="master-detail-element sidebar">
      <NoteList
        notes={notes}
        onNoteClick={onNoteClick}
        onSortChange={onSortChange}
      />
      <button onClick={onNewNote}>New</button>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Sidebar;
