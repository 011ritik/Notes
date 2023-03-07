import axios from "axios"
import { useParams, useNavigate , Link} from "react-router-dom"

const DeleteNote = () => {

    let {id} = useParams();
    let navigate = useNavigate();


    const handleClick = async () => {
        let response = await axios.delete(`http://127.0.0.1:8000/api/note/delete/${id}`)
        console.log(response)
        navigate('http://localhost:3000/note/')
    }

    return (
        <div >
            <form className="mx-auto bg-slate-500 mx-10 p-5 rounded-xl">
                <p className="bg-slate-500 text-black pb-7">Are you sure want to delete the note?</p>
                <Link className="bg-cyan-500 rounded-md p-2 mr-5" to={`http://localhost:3000/note/${id}`}>Back</Link>
                <button className="bg-red-500 rounded-md p-2" onClick={handleClick}>Delete</button>
            </form>
        </div>
    )
}

export default DeleteNote