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

  return( 
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;
