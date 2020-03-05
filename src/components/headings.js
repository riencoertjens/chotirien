import React from "react"
import { Box } from "reflexbox"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export const H1 = ({ sx = {}, children, ...props }) => {
  const data = useStaticQuery(graphql`
    {
      leaves: file(base: { eq: "leaves.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box
      as="h1"
      sx={{
        fontFamily: "english",
        fontSize: ["5rem", "7.5rem"],
        fontWeight: 200,
        textAlign: "center",
        display: ["flex", "flex", "block"],
        flexDirection: "column",
        my: 5,
        mb: [5, 6],
        position: "relative",
        ".gatsby-image-wrapper": {
          top: ["90%", "85%", "40%"],
          left: "50%",
          transform: "translateX(-50%)",
          width: ["120%", "120%", "100%"],
          maxWidth: "100vw",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
      <Image
        style={{
          position: "absolute",
        }}
        imgStyle={{
          height: "auto",
        }}
        fluid={data.leaves.childImageSharp.fluid}
      />
    </Box>
  )
}
export const H2 = props => <H1 as="h2" {...props} />
