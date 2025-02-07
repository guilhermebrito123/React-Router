//Hooks:
import {useState} from 'react'

//Links com react router
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = ({handleNavegator}) => {


  return (
    <nav>
      {/*<Link style={{padding: 20, fontSize: 25}} to="/">Home</Link>
      <Link style={{padding: 20, fontSize: 25}} to="/about">Sobre</Link>*/}
      {/*Para barra de navegação, usamos o componente NavLink */}
      <NavLink style={{padding: 20, fontSize: 25}} className={({isActive}) => (isActive ? styles.active : styles.notActive)} to="/" onClick={() => handleNavegator(0)} >Home</NavLink>
      <NavLink style={{padding: 20, fontSize: 25}} className={({isActive}) => (isActive ? styles.active : styles.notActive)} to="/about" onClick={() => handleNavegator(1)}>Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
