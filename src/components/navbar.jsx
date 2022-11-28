import { Link } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/mint" className="nav_link">Mint</Link>
        </div>
    )
}