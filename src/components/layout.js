import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"
import SEO from "./seo"
import { Map } from "./map"
import theme from "../theme"
import { Flex } from "reflexbox"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { mapstyle } from "./mapstyle"

import markerIcon from "../images/mapmarker.svg"
const coords = { lat: 10.5697239, lng: 99.2743143 }

export const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    {
      shadows: file(base: { eq: "shadows.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
          line-height: 1.25;
          font-family: ${theme.fonts.english};
        `}
      />
      <SEO />
      <Image
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: -1,
          opacity: 0.25,
        }}
        fluid={data.shadows.childImageSharp.fluid}
      />
      <Flex
        sx={{
          position: "fixed",
          background: "white",
          top: 2,
          right: 2,
          fontFamily: "thai",
          color: "grey",
          ".link": {
            textDecoration: "none",
            color: "grey",
          },
          ".current": {
            color: "black",
          },
        }}
      >
        <Link activeClassName="current" className="link" to="/thai">
          th
        </Link>
        /
        <Link activeClassName="current" className="link" to="/">
          th+en
        </Link>
        /
        <Link activeClassName="current" className="link" to="/english">
          en
        </Link>
      </Flex>
      {children}
      <Map
        apiKey={"AIzaSyAfGngLeTyT6jXyzFml4I8crA_cLKSOC38"}
        location={coords}
        markerIcon={markerIcon}
        markerInfoComponent={
          <a
            css={css`
              color: black;
            `}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.google.com/maps/dir//Nana+beach+resort,+thailand"
          >
            directions
          </a>
        }
        options={{
          center: coords,
          zoom: 4,
          disableDefaultUI: true,
          styles: mapstyle,
        }}
      />
    </ThemeProvider>
  )
}
