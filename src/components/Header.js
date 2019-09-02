import React from 'react';

const Header = ({titulo}) => {
    return (  
        <header>
            <nav className="nav-wrapper light-blue darken-3">
                <a href="" className="brand-logo center">{titulo}</a>
            </nav>
        </header>    
    );  
}
 
export default Header;