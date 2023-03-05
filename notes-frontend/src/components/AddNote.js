import axios from "axios";
import { useState } from "react";

const AddNote = () => {
    const [note, setNote] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        let note = e.target.value;
        setNote({ note: note })
    };

    const postData = () => {
        console.log(note)
        axios.post(
            "http://127.0.0.1:8000/api/note/add/",
            note
        )
        .then( respone => {
        console.log(respone)
        }
        )
    }

    return (
        <>
            <h3 className="text-3xl font-bold text-center">Add Note</h3>
            <div className="mt-8 text-center">
                <form onChange={handleChange} onBlur={postData}>
                    <textarea className="border-t-[1rem] border-emerald-600 w-3/4 bg-slate-300 h-96 p-7 text-black"></textarea>
                </form>
            </div>
        </>
    );
};

export default AddNote;
