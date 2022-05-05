import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Hello! This is the first note. Hurray!",
    date: "04/27/2022",
    },
    {
      id: nanoid(),
      text: "Hello! This is the second note. Hurray!",
      date: "04/27/2022",
    },
    {
      id: nanoid(),
      text: "Hello! This is the third note. Hurray!",
      date: "04/27/2022",
    },
    {
      id: nanoid(),
      text: "Hello! This is the fourth note. Hurray!",
      date: "04/27/2022",
    },
    {
      id: nanoid(),
      text: "Hello! This is the fifth note. Hurray!",
      date: "04/27/2022",
    }
  ]);

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return( 
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}


export default App;
