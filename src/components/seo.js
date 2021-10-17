import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import {useStaticQuery} from "gatsby";
import {graphql} from "gatsby";

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description}/>
      {seo.title && <meta property="og:title" content={seo.title}/>}
      {seo.description && (
        <meta property="og:description" content={seo.description}/>
      )}
    </Helmet>
  )
}

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`
