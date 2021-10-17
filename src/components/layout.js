import React from 'react';
import * as styles from "../styles/layout.module.css";
import {Helmet} from "react-helmet"
import SEO from "./seo";

const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "Jimmy's Garden",
              "description": "The garden of the thoughts",
              "author": {
                "@type": "",
                "name": "Jimmy Nowak"
              },
              "name": "Jimmy's Garden"
            }
          `}
        </script>
      </Helmet>
      <SEO/>
      <header>
        <a id={styles.logo} href="/"><span id={styles.logotext}>Jimmy's Garden</span>🌱🪴</a>
      </header>
      <main>{children}</main>
      <footer>
        Jimmy &copy; 2021
      </footer>
    </>
  )
}
export default Layout;
