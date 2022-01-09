import React from 'react';
import Logo from '../images/logo.svg';

const navbar = () => {
    return (
        <nav>
            <img src={Logo} alt='logo' />
            <div className='nav--text'>my travel journal.</div>
        </nav>
    );
};

export default navbar;
