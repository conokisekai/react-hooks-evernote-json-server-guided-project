import React from 'react';
import PropTypes from 'prop-types';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

const Content = ({
  selectedNote,
  editMode,
  handleEdit,
  handleSave,
  handleCancel,
  handleSortChange,
}) => {
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
      return (
        <NoteViewer
          note={selectedNote}
          onEdit={handleEdit}
          onCancel={handleCancel}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  return (
    <div className="master-detail-element detail">
      {getContent()}
      <select onChange={(e) => handleSortChange(e.target.value)}>
        <option value="date-created">Date Created</option>
        <option value="date-edited">Date Edited</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

Content.propTypes = {
  selectedNote: PropTypes.object,
  editMode: PropTypes.bool,
  handleEdit: PropTypes.func,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
  handleSortChange: PropTypes.func,
};

export default Content;
