# Evernote-Like React App

## Author

Conrad Kambi
https://github.com/conokisekai

# Description

This project is a React-based application that mimics the functionality of Evernote, allowing users to create, edit, and organize notes. It features a user-friendly interface with a sidebar for quick navigation, a content area for viewing and editing notes, and search functionality for efficient note retrieval.

## Functional Requirements

1. **User Authentication:**
   - Users should be able to sign up and log in to the application.
   - User authentication should be secure and include features like password recovery.

2. **Note Management:**
   - Users can create, view, edit, and delete notes.
   - Each note should have a title and body.

3. **Note Navigation:**
   - Users should be able to navigate between notes easily.
   - A sidebar should display a list of all notes for quick access.

4. **Search Functionality:**
   - Implement a search feature to allow users to search for notes by title.
   - Optional: Implement advanced search features, such as searching by body content.

5. **Sorting and Filtering:**
   - Allow users to sort notes by date created, date edited, or alphabetically.
   - Implement filters to organize notes based on specific criteria.

6. **Sharing and Emailing (Stretch Goals):**
   - Stretch goal: Implement the ability to share notes with other users.
   - Stretch goal: Allow users to email notes directly from the application.

## Setup

1. To get started, fork and clone this repository.
2. Navigate to the frontend directory.
3. Install dependencies.

### Frontend

To setup and run your frontend:

```console
$ npm install
$ npm start
```

This React app will be running on `http://localhost:4000`.

### Backend

First, set up your database by running:

```console
$ npm run seed
```

This will seed some starter data for you in the `db/db.json` file. Any time you
want to reset your database to its original state, just run `npm run seed` again
to overwrite your data with some fresh seed data.

To run `json-server`, run:

```console
$ npm run server
```

Your backend API will be running on `http://localhost:3000`.

### User ID

The seed file should create one user for you, so your default `userId` should
be `1`. You can check the `db/db.json` file to make sure.

#### Routes

| Method | Route        |                               Headers                               |        Body         |
| ------ | ------------ | :-----------------------------------------------------------------: | :-----------------: |
| GET    | `/users`     |                                                                     |                     |
| GET    | `/notes`     |                                                                     |                     |
| POST   | `/notes`     | `'Content-Type': 'application/json'`;`'Accept': 'application/json'` | title, body, userId |
| PATCH  | `/notes/:id` | `'Content-Type': 'application/json'`;`'Accept': 'application/json'` | title, body, userId |

**Tips:**

- Test out your routes with [Postman](https://www.getpostman.com/) to see how
  they work and what they return.

## Provided Code

- All CSS styles are provided for you.
- Many components are provided for you, but most are not completely functional.
  It is your job to read the code and figure out how to incorporate it into your
  app.

## Deliverables

Look at the gif below to see how the app should look and behave. These are the
baseline deliverables you need to complete:

### Viewing and Displaying Notes

- [ ] Display all notes in the left sidebar.
- [ ] Displayed sidebar notes should show the title and a truncated body.
- [ ] When a note from the sidebar is clicked, display its contents in the right
      panel.

![completed display notes](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-evernote-json-server-guided-project/react-evernote-display.gif)

### Filtering Notes

- [ ] Implement the filter to search through your notes list by title.

![completed filter notes](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-evernote-json-server-guided-project/react-evernote-filter.gif)

### Creating Notes

- [ ] At the bottom of your left sidebar, show a `New` button.
- [ ] Clicking `New` will create a new note via a `POST` request with some
      default title and body. **NOTE**: You don't have to use any kind of `<form>`
      element for this deliverable; you can create an object with a default title
      and body text when the button is clicked. Make sure to check the
      [Routes](#Routes) section of this README to determine what data you need in
      the body of your request.
- [ ] This new note should appear in the sidebar.

![completed create notes](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-evernote-json-server-guided-project/react-evernote-create.gif)

### Editing Notes

- [ ] When displaying a note in the right panel, show an `Edit` button.
- [ ] Clicking the `Edit` button will allow the user to edit the title and body
      in the right panel.
- [ ] When in edit mode, also show a `Save` button which saves the note via a
      `PATCH` request.
- [ ] When in edit mode, also show a `Cancel` button which discards any changes
      and reverts back to displaying the note.
- [ ] Clicking a different note while in edit mode should discard your changes
      and display the new note instead.

![completed edit notes](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-evernote-json-server-guided-project/react-evernote-edit.gif)

## Stretch Goals

When you are finished with the _deliverables_, you can build out any new
features that you want. This is your chance to be creative and make your project
unique!

Some suggestions:

- Add the ability to filter by body, date created, date edited, etc.
- Sorting by date created, date edited, alphabetical, etc.
- Tagging
- Emailing notes

# License
## Learn.co Educational Content License

Copyright (c) 2018 Flatiron School, Inc

The Flatiron School, Inc. owns this Educational Content. However, the Flatiron
School supports the development and availability of educational materials in
the public domain. Therefore, the Flatiron School grants Users of the Flatiron
Educational Content set forth in this repository certain rights to reuse, build
upon and share such Educational Content subject to the terms of the Educational
Content License set forth [here](http://learn.co/content-license)
(http://learn.co/content-license). You must read carefully the terms and
conditions contained in the Educational Content License as such terms govern
access to and use of the Educational Content.

Flatiron School is willing to allow you access to and use of the Educational
Content only on the condition that you accept all of the terms and conditions
contained in the Educational Content License set forth
[here](http://learn.co/content-license) (http://learn.co/content-license).  By
accessing and/or using the Educational Content, you are agreeing to all of the
terms and conditions contained in the Educational Content License.  If you do
not agree to any or all of the terms of the Educational Content License, you
are prohibited from accessing, reviewing or using in any way the Educational
Content.