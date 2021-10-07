import React from "react";
import {Link} from "../../.cache/gatsby-browser-entry";

export default class Backlinks extends React.Component {
  render() {
    if (this.props.links.length !== 0) {
      return (<>
          <ul>
            <h2>Backlinks:</h2>
            {this.props.links.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link to={"/notes/" + link.slug}>{link.slug}</Link>
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

