import Layout from "../components/layout";
import React from "react";
import {graphql, Link} from "gatsby";

const NotesList = ({data}) => {
  return (
    <Layout>
      <h1>
        List of all notes in garden
      </h1>
      <p>
        You can find here seeds not connected to other notes!
        Enjoy!!!
      </p>
      <ul>
        {data.allMdx.edges.map((d, idx) => {
          return (
            <li>
              <Link to={"/" + d.node.slug} key={idx}>
                {d.node.frontmatter.title}
              </Link>
            </li>)
        })}</ul>
    </Layout>
  )
}

export const notesQuery = graphql`
query NotesQuery {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        slug
      }
    }
  }
}
`
export default NotesList;
