import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const NoteDetail = () => {
    const [note, setNote] = useState([]);

    let { id } = useParams();
    // console.log(id)

    useEffect(() => {
        get_note();
    }, []);

    //gets note from id
    const get_note = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/api/note/${id}`);
        // console.log(response.data)
        setNote(response.data);
    };


    // updates the notes on change and set note
    const handleChange = (e) => {
        let value = e.target.value
        setNote({'note': value})
        // console.log(value)
    }

    const updateNote = () => {
        axios.put(`http://127.0.0.1:8000/api/note/update/${id}`, note)
        .then( response => {
            console.log(response)
        })
    }

    return (
        <>
            <div className="mt-8">
                <div className="border-t-[1rem] border-sky-400 w-3/4 bg-stone-600 mx-auto  h-max p-7">
                    <div className="flex items-center justify-between bg-stone-600 mb-7">
                        <Link to={"http://localhost:3000/note/"}>
                            <img
                                src="/arrow.png"
                                alt="arrow"
                                className="bg-stone-600 w-12"
                            />
                        </Link>
                        <Link to={`http://localhost:3000/note/delete/${id}`}>
                            <img
                                src="/delete.png"
                                alt="delete"
                                className="bg-stone-600 w-8"
                            />
                        </Link>
                    </div>
                    <form >
                        <textarea
                            type='text'
                            className="w-full bg-stone-600 mx-auto h-96 outline-0"
                            value={note.note}
                            onChange={handleChange}
                            onBlur={updateNote}
                        ></textarea>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NoteDetail;
