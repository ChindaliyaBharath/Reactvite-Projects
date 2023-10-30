import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={`${styles.navigation} container`}>
    <div className='logo'> 
        <img src="/images/Frame.png" alt="Do some Coding logo"/>
    </div>

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    </nav>
  )
}

export default Nav;