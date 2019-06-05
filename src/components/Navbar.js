import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/Tutoring">Tutoring</Link>
            </div>
        );
    }
}

export default Navbar;