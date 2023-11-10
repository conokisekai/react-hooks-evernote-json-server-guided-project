import React from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

function Content({
  selectedNote,
  editMode,
  handleEdit,
  handleSave,
  handleCancel,
}) {
  const getContent = () => {
    if (editMode) {
      return (
        <NoteEditor
          note={selectedNote}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      );
    } else if (selectedNote) {
      return <NoteViewer note={selectedNote} onEdit={handleEdit} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
