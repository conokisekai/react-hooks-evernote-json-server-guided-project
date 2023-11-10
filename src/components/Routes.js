import React from 'react';
import { Route, Router } from 'react-router-dom';
import NoteContainer from './NoteContainer';
import UserProfile from './UserProfile'; 

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={NoteContainer} />
      <Route path="/profile" component={UserProfile} />
      {/* Add routes for other pages */}
    </Router>
  );
}

export default Routes;
