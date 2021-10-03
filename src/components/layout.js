import React from 'react';
import "../styles/global.css";

const Layout =({children}) =>{
    return(
        <>
        <header>
            <a id="logo" href="/"><span id="text-logo">Jimmys Garden</span>🌱🪴</a>
        </header>
        <main>{children}</main>
        <footer>
            Jimmy &copy; 2021
        </footer>
        </>
    )
}
export default Layout;
