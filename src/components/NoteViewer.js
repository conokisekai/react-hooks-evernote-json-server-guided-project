import React from 'react';

const NoteViewer = ({ note, onEdit, onCancel, onShare, onEmail }) => {
  const handleShare = () => {
    console.log('Sharing note:', note);
  };

  const handleEmail = () => {
    console.log('Emailing note:', note);

    const emailSubject = encodeURIComponent(`Shared Note: ${note.title}`);
    const emailBody = encodeURIComponent(note.body);
    const mailtoLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onCancel}> Cancel</button>
      <button onClick={onShare}>Share</button>
      <button onClick={onEmail}>Email</button>
    </>
  );
};

export default NoteViewer;
