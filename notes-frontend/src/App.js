import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import NoteDetail from "./components/NoteDetail";
import DeleteNote from "./components/DeleteNote";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route element={<Note />} path=""></Route>
                    <Route element={<Note />} path="note"></Route>
                    <Route element={<NoteDetail />} path="note/:id"></Route>
                    <Route element={<AddNote />} path="note/add"></Route>
                    <Route element={<DeleteNote />} path="note/delete/:id"></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
