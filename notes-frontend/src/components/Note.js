import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Note = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        get_notes();
    }, []);

    const get_notes = async () => {
        let response = await axios.get("http://127.0.0.1:8000/api/note/");
        // console.log(response.data)
        setNotes(response.data);
    };
    return (
        <>
            {notes?.map((note, index) => {
                return (
                    <Link to={`${note.id}`} key={index}>
                        <div className="mt-8">
                            <div className="border-t-[1rem] border-sky-400 w-3/4 bg-stone-600 mx-auto  h-24 p-7 truncate">
                                {note.note}
                            </div>{" "}
                        </div>
                    </Link>
                );
            })}
        </>
    );
};

export default Note;
