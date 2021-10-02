import { graphql } from 'gatsby';
import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from './layout';

export default function PostLayout({ data }) {
    return (  
        <>
        <Layout>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
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