import react from "react";
import { Link } from "react-router";
import "./navbar.css";

const Navbar = () => {
    return(
        <>
           <nav>
                <div className="logo">Logo</div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div>
                    <Link>Cart</Link>
                </div>
           </nav>
        </>
    )
}

export default Navbar;
