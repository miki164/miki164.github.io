import React from 'react';
import { graphql } from 'gatsby'

const MyPageLayout = ({ data }) => {
    console.log(data);
    return(
       <p>{data.allMdx.edges.map(a => (
         <h4>{a.node.frontmatter.title}</h4>
       ))}</p>
    );
}

export const pageQuery = graphql`
  query indexQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}`
export default MyPageLayout; 