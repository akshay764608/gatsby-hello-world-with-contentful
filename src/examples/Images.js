import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import img from "../images/images-3.jpeg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "images-2.jpeg" }) {
      childImageSharp {
        fixed(grayscale: true, fit: COVER) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "images-3.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const {
    fixed: {
      childImageSharp: { fixed },
    },
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImages)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="html image" width="100%" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={fluid} />
      </article>
    </section>
  )
}

export default Images
