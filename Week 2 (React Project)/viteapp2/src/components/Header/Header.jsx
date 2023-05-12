// import React from 'react';
import './Header.css'; // One way of using CSS

const Header = () => {
    return (
       <header className='header-container'>
            <nav>
                <ul className='nav-container'>
                    <li className='nav-item'>
                        Home
                    </li>
                    <li className='nav-item'>
                        About
                    </li>
                    <li className='nav-item'>
                        Services
                    </li>
                    <li className='nav-item'>
                        Contact
                    </li>
                </ul>
            </nav>
       </header>
    )
}


export default Header;