import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"

// Page static query always work in pages directory
// Import graphql

import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { title },
    },
  } = data
  return (
    <Layout>
      <h1>hello from examples page!</h1>
      <Header />
      <HeaderStatic />
      <h4>Title: {title}</h4>
    </Layout>
  )
}

// To get data as a props do the following
export const data = graphql`
  {
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

export default examples
