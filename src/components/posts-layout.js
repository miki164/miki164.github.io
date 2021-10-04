import { graphql } from 'gatsby';
import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from './layout';
import Backlinks from "./backlinks";

export default function PostLayout({ data }) {
  console.log(data.allMdx.nodes)
    return (
        <>
          <Layout>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <Backlinks/>
          </Layout>
        </>
    );
}

export const query = graphql`
query Note($id: String, $titleRegex: String) {
  mdx(id: {eq: $id}) {
    id,
    body
  }
  allMdx(filter: {rawBody: {regex: $titleRegex}}) {
    nodes {
      slug
    }
  }
}
`
