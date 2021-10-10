import React from 'react';
import * as styles from "../styles/layout.module.css";

const Layout =({children}) =>{
    return(
        <>
        <header>
            <a id={styles.logo} href="/"><span id={styles.logotext}>Jimmys Garden</span>🌱🪴</a>
        </header>
        <main>{children}</main>
        <footer>
            Jimmy &copy; 2021
        </footer>
        </>
    )
}
export default Layout;
