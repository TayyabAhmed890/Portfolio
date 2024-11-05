"use client";
import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css';
import Image from "next/image";


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header className={styles.header}>

<nav className={styles.nav}>
      <h2>Portfolio</h2>
      <ul className={`${styles.navlinks} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <Link className={styles.Link} href="/">
           Home
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/Services">
           Services
          </Link>
        </li>

        <li>
          <Link className={styles.Link} href="/Skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/Contact">
            Contact
          </Link>
        </li>
        
      </ul>


        <Image className={styles.menuicon} onClick={toggleMenu} src="/burger-bar.png" alt="" height={40} width={40}/>

      <button  className={styles.visitbtn}><Link className={styles.gitLink} href={"https://github.com/TayyabAhmed890"} target="_blank">Visit Github</Link></button>
      </nav>
    </header>
  );
};

export default Nav;