import React from 'react';
import Layout from '../components/layout';
import "../styles/global.css";
import {Link} from "gatsby";

const Home = () => {
  return (
    <Layout>
      <h1>
        Hello my friend from internet
      </h1>
      <p>
        I'm Jimmy and that's my <a href="/notes/Digital-Garden">garden</a>. I'm going to share my knowladge and thoughts
        here.
        It would grow every day (I hope).
        Of course I'm inviting you o
        It is build using gatsbyjs plus gatsby-plugin-mdx. Besides of that, I'm creating markdown notes in obsidian. I
        n
        <a href="https://github.com/miki164/jimmys-garden"> github repo of the garden</a>.
      </p>
        <h1>
          How garden is build
        </h1>
        <p>
          It is build using gatsbyjs plus gatsby-plugin-mdx. Besides of that, I'm creating markdown notes in obsidian. I
          will be posting here everything what I'm learning. You will find here notes about software development,
          psychology, hardware development, books (Disclaimer you could find here mainly polish literature :p) and many
          more.
        </p>
        <h1>
          About gardener
        </h1>
        <p>
          As I mentioned earlier I'm Jimmy. I'm 18 yo and I'm focused on getting new knowladge everyday! So that's a
          reason, why I've created a garden. I'm a python programmer, guitarist and sailor. I love reading fantasy,
          sci-fi, technical literature etc. My favorite lore is <a href="https://scp-wiki.wikidot.com/">SCP
          foundation</a>.
        </p>
        <h1>
          Start exploring
        </h1>
        <p>
          Here is a few start points for you. Have fun!
          <ul>
            <li><Link href="/notes/Digital-Garden">What is it digital garden?</Link></li>
            <li><Link href="/notes/Goals">Goals</Link></li>
            <li><Link to="/notesList">List of all notes in garden!</Link></li>
          </ul>
        </p>
    </Layout>
);
}

export default Home;
