import React, { useState, useEffect } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3000/notes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleSearch = async (term) => {
    setSearchTerm(term);

    try {
      const response = await fetch(`http://localhost:3000/notes?q=${term}`);
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error searching notes:', error);
    }
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
