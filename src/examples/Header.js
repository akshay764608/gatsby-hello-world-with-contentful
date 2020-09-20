import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        author,
        person: { age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Author: {author}</h1>
      <p>Age: {age}</p>
    </div>
  )
}

export default Header
