import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"
import { Flex, Box } from "reflexbox"

import SEO from "../components/seo"
import theme from "../theme"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { H1, H2 } from "./headings"

export const Page = ({ language }) => {
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
      <Section>
        <Caption>together with their families</Caption>
        <H1>
          <span>Chotirat</span> <Small>&</Small> <span>Rien</span>
        </H1>
        <Caption>Invite you to celebrate their wedding</Caption>
        <DateCaption>may 4th, 2020</DateCaption>
      </Section>
      <Section>
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
        <Flex alignItems="center" flexDirection={["column", "row"]}>
          <Couple>
            <Name
              language={language}
              thai="นายบุญโชติ จองกฤษ"
              english="Mr. Boonchote Jonggrit"
            />
            <Name
              language={language}
              thai="นางบุญเรือน จองกฤษ"
              english="Mrs. Boonruan Jonggrit"
            />
          </Couple>
          <Box
            mx={[4, 4, 5]}
            sx={{ fontFamily: language === "english" ? "english" : "thai" }}
          >
            {language === "english" ? "and" : "และ"}
          </Box>
          <Couple>
            <Name
              language={language}
              thai="นายพอล โครเจียน"
              english="Mr. Paul Coertjens"
            />
            <Name
              language={language}
              thai="นางอิงกริด อัลลาซ์"
              english="Mrs. Ingrid Allaerts"
            />
          </Couple>
        </Flex>
        <MultiLangCaption
          language={language}
          thai="มี ความยิ นดี ขอเรี ยนเชิ ญเพื่ อเป็ นเกี ยรติ ในงานเลี้ ยงฉลองเนื่ องในพิ ธี มงคลสมรส"
          english="Invite you to celebrate the marriage of"
        />
        <H2>
          <span>Chotirat</span> <Small>&</Small> <span>Rien</span>
        </H2>
        <MultiLangCaption
          small
          language={language}
          thai="นางสาวโชติรัตน์ จองกฤษ และ นายรีน โครเจียน"
          english="Chotirat Jonggrit & Rien Coertjens"
        />
        <MultiLangCaption
          small
          language={language}
          thai="วันจันทร์ที่ 4 พฤษภาคม พ.ศ. 2563"
          english={
            <>
              Monday, the fourth of May
              <br />
              Two thousand and twenty
            </>
          }
        />
        <MultiLangCaption
          small
          language={language}
          thai={
            <>
              ณ นานาบีชรีสอร์ท หาดทุ่งวัวแล่น จังหวัดชุมพร
              <br />
              เวลา 11:30 น. (โต๊ะจีน)
            </>
          }
          english={
            <>
              at Nana Beach Resort, Chumphon
              <br />
              at half after eleven in the morning (Chinese Banquet)
            </>
          }
        />
      </Section>
    </ThemeProvider>
  )
}

const Section = props => (
  <Flex
    sx={{
      width: "100vw",
      minHeight: "100vh",
      padding: 3,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
    {...props}
  />
)

const Small = props => <Box as="span" {...props} sx={{ fontSize: "0.75em" }} />

const Caption = ({ small, ...props }) => (
  <Box
    as="p"
    sx={{
      fontFamily: "english",
      my: 3,
      fontSize: small ? "1rem" : "1.15rem",
      fontWeight: 200,
      fontStyle: "italic",
      textAlign: "center",
    }}
    {...props}
  />
)

const MultiLangCaption = ({ sx = {}, thai, english, small, language }) => (
  <Box
    as="div"
    sx={{
      my: 3,
      fontFamily: "english",
      fontSize: small ? "1rem" : "1.15rem",
      fontWeight: 400,
      textAlign: "center",
      ...sx,
    }}
  >
    {(!language || language === "thai") && (
      <Box as="p" sx={{ fontFamily: "thai" }}>
        {thai}
      </Box>
    )}
    {(!language || language === "english") && (
      <Box
        as="p"
        sx={{
          fontFamily: "english",
          color: language === "english" ? "black" : "grey",
        }}
      >
        {english}
      </Box>
    )}
  </Box>
)
const DateCaption = ({ sx = {}, ...props }) => (
  <Box
    as="p"
    sx={{
      fontFamily: "english",
      textTransform: "uppercase",
      letterSpacing: ".25em",
      fontSize: "0.80rem",
      mt: 2,
      ...sx,
    }}
    {...props}
  />
)

const Name = ({ thai, english, language }) => (
  <Box as="p" sx={{ textAlign: "center", my: [3, 4] }}>
    {(!language || language === "thai") && (
      <Box as="span" sx={{ display: "block", fontFamily: "thai" }}>
        {thai}
      </Box>
    )}
    {(!language || language === "english") && (
      <Box
        as="span"
        sx={{
          display: "block",
          fontFamily: "english",
          color: language === "english" ? "black" : "grey",
        }}
      >
        {english}
      </Box>
    )}
  </Box>
)
const Couple = props => <Box {...props} />
