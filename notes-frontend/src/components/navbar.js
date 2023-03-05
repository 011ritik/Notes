import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between px-10 py-5">
                <Link to={'note'} className="text-2xl font-bold">Notes</Link>
                <Link to={'note/add'} className="text-5xl">+</Link>
            </nav>
        </>
    );
};

export default Navbar;
