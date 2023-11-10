import React, { useState, useEffect } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

function NoteContainer() {
  useEffect(() => {}, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setEditMode(false);
  };

  const handleNewNote = () => {};

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = (updatedNote) => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="container">
        <Sidebar
          notes={notes}
          selectedNote={selectedNote}
          onNoteClick={handleNoteClick}
          onNewNote={handleNewNote}
        />
        <Content
          selectedNote={selectedNote}
          editMode={editMode}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </div>
    </>
  );
}

export default NoteContainer;
