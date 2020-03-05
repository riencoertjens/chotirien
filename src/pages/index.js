import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"
import { Flex, Box } from "reflexbox"

import SEO from "../components/seo"
import theme from "../theme"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <SEO />
    {/* <Section>
      <Caption>Together with their families</Caption>
      <H1>
        Chotirat <Small>&</Small> Rien
      </H1>
      <Caption>Invite you to their wedding</Caption>
      <DateCaption>May 4th, 2020</DateCaption>
    </Section> */}
    <Section>
      <Flex alignItems="center" flexDirection={["column", "row"]}>
        <Couple>
          <Name thai="นายบุญโชติ จองกฤษ" english="Mr. Boonchote Jonggrit" />
          <Name thai="นางบุญเรือน จองกฤษ" english="Mrs. Boonruan Jonggrit" />
        </Couple>
        <Box mx={5}>และ</Box>
        <Couple>
          <Name thai="นายพอล โครเจียน" english="Mr. Paul Coertjens" />
          <Name thai="นางอิงกริด อัลลาซ์" english="Mrs. Ingrid Allaerts" />
        </Couple>
      </Flex>
      <Caption
        thai="มี ความยิ นดี ขอเรี ยนเชิ ญเพื่ อเป็ นเกี ยรติ ในงานเล้ี ยงฉลองเน่ื องในพิ ธี มงคลสมรส"
        english="Invite you to celebrate the marriage of"
      />
      <H1>
        Chotirat <Small>&</Small> Rien
      </H1>
      <Caption
        small
        thai="นางสาวโชติรัตน์ จองกฤษ และ นายรีน โครเจียน"
        english="Chotirat Jonggrit & Rien Coertjens"
      />
      <Caption
        small
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

const Section = props => (
  <Flex
    sx={{
      width: "100vw",
      minHeight: "100vh",
      padding: 4,
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
      fontSize: "7.5rem",
      fontWeight: 200,
      textAlign: "center",
      my: 3,
      ...sx,
    }}
    {...props}
  />
)
const Small = props => <Box as="span" {...props} sx={{ fontSize: "0.75em" }} />

const Caption = ({ sx = {}, thai, english, small }) => (
  <Box
    as="p"
    sx={{
      my: 3,
      fontFamily: "english",
      fontSize: small ? "1rem" : "1.15rem",
      fontWeight: 400,
      textAlign: "center",
    }}
  >
    <Box as="p" sx={{ fontFamily: "thai" }}>
      {thai}
    </Box>
    <Box as="p" sx={{ fontFamily: "english", color: "grey" }}>
      {english}
    </Box>
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

const Name = ({ thai, english }) => (
  <Box as="p" sx={{ textAlign: "center", my: 4 }}>
    <Box as="span" sx={{ display: "block", fontFamily: "thai" }}>
      {thai}
    </Box>
    <Box as="span" sx={{ display: "block", color: "grey" }}>
      {english}
    </Box>
  </Box>
)
const Couple = props => <Box {...props} />

export default IndexPage
