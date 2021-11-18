import React from "react";
import {Link} from "../../.cache/gatsby-browser-entry";

export default class Backlinks extends React.Component {
  render() {
    if (this.props.links.length !== 0) {
      return (<>
          <h3>Backlinks:</h3>
          <ul>
            {this.props.links.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link to={"/" + link.slug}>{link.frontmatter.title}</Link>
                </li>
              )
            })}
          </ul>
        </>
      )
    } else {
      return <></>
    }
  }
}

