import React from 'react'
import { GiSailboat } from "react-icons/gi";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <div style={{ maxWidth: '600px', padding: '10px' }}></div>
                        <li className="nav-item">
                            <GiSailboat color="white" fontSize="1.5em" />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/imbarca">Imbarca</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;