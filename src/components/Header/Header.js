import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    
    return (
        <React.Fragment>
            <nav className="Navigator">
                <h3>TODOLIST</h3>
                     
                    <NavLink to="/history" activeClassName="selectedLink">History</NavLink>
                    <NavLink to="/" exact activeClassName="selectedLink">Home</NavLink> 
                          
            </nav>
            
        </React.Fragment>
    );
}

export default Header;