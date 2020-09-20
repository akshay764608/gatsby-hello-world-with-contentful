import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  } = data

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>Single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h2>{title}</h2>
          <h2>${price}</h2>
          <p>{info}</p>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
