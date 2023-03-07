import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between px-10 py-5">
                <Link to={'note'} className="text-2xl font-bold text-sky-400">Notes</Link>
                <Link to={'note/add'} className="text-5xl text-sky-400">+</Link>
            </nav>
        </>
    );
};

export default Navbar;
