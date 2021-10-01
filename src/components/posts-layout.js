import { graphql } from 'gatsby';
import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function PostLayout({ data }) {
    return (  
        <>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </>
    );
}

export const query = graphql`
query Note($id: String) {
  mdx(id: {eq: $id}) {
    id,
    body
  }
}
`