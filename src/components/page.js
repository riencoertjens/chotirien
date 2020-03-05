import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"
import { Flex, Box } from "reflexbox"

import SEO from "../components/seo"
import theme from "../theme"
import { Link } from "gatsby"

export const Page = ({ language }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <SEO />
      <Section>
        <Flex
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
            fontFamily: "thai",
            color: "black",
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
            🇹🇭
          </Link>
          /
          <Link activeClassName="current" className="link" to="/">
            th+en
          </Link>
          /
          <Link activeClassName="current" className="link" to="/english">
            🇬🇧
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
          <Box mx={[4, 4, 5]}>และ</Box>
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
        <Caption
          language={language}
          thai="มี ความยิ นดี ขอเรี ยนเชิ ญเพื่ อเป็ นเกี ยรติ ในงานเล้ี ยงฉลองเน่ื องในพิ ธี มงคลสมรส"
          english="Invite you to celebrate the marriage of"
        />
        <H1>
          <span>Chotirat</span> <Small>&</Small> <span>Rien</span>
        </H1>
        <Caption
          small
          language={language}
          thai="นางสาวโชติรัตน์ จองกฤษ และ นายรีน โครเจียน"
          english="Chotirat Jonggrit & Rien Coertjens"
        />
        <Caption
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
        <Caption
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

const H1 = ({ sx = {}, ...props }) => (
  <Box
    as="h1"
    sx={{
      fontFamily: "english",
      fontSize: ["5rem", "7.5rem"],
      fontWeight: 200,
      textAlign: "center",
      display: ["flex", "flex", "block"],
      flexDirection: "column",
      my: 3,
      ...sx,
    }}
    {...props}
  />
)
const Small = props => <Box as="span" {...props} sx={{ fontSize: "0.75em" }} />

const Caption = ({ sx = {}, thai, english, small, language }) => (
  <Box
    as="div"
    sx={{
      my: 3,
      fontFamily: "english",
      fontSize: small ? "1rem" : "1.15rem",
      fontWeight: 400,
      textAlign: "center",
    }}
  >
    {(!language || language === "thai") && (
      <Box as="p" sx={{ fontFamily: "thai" }}>
        {thai}
      </Box>
    )}
    {(!language || language === "english") && (
      <Box as="p" sx={{ fontFamily: "english", color: "grey" }}>
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
      <Box as="span" sx={{ display: "block", color: "grey" }}>
        {english}
      </Box>
    )}
  </Box>
)
const Couple = props => <Box {...props} />
