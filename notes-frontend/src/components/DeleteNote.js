import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const DeleteNote = () => {

    let {id} = useParams();
    let navigate = useNavigate();


    const handleSubmit = async () => {
        let response = await axios.delete(`http://127.0.0.1:8000/api/note/delete/${id}`)
        console.log(response)
        navigate('http://localhost:3000/note/')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Are you sure want to delete the note?</p>
                <button>Delete</button>
            </form>
        </>
    )
}

export default DeleteNote