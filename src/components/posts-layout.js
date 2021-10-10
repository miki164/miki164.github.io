import { graphql } from 'gatsby';
import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from './layout';
import Backlinks from "./backlinks";
import "../styles/posts-layout.module.css";

export default function PostLayout({ data }) {
    return (
        <>
          <Layout>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <Backlinks links={data.allMdx.nodes}/>
          </Layout>
        </>
    );
}

export const query = graphql`
query Note($id: String, $titleRegex: String!, $slug: String) {
  mdx(id: {eq: $id}) {
    id,
    body
  }
  allMdx(filter: {rawBody: {regex: $titleRegex}, slug: {ne: $slug}}) {
    nodes {
      slug
    }
  }
}
`
