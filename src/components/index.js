import React from "react"
import { Box, Flex } from "reflexbox"

export const Section = ({ children, ...props }) => (
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
  >
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: "auto",
      }}
    >
      {children}
    </Flex>
    <Box
      as="button"
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight - 0,
          behavior: "smooth",
        })
      }
      sx={{
        cursor: "pointer",
        background: "transparent",
        display: "block",
        transform: "rotate(45deg)",
        width: "25px",
        height: "25px",
        border: "solid black",
        borderWidth: "0 2px 2px 0",
        mt: "auto",
      }}
    />
  </Flex>
)

export const Small = props => (
  <Box as="span" {...props} sx={{ fontSize: "0.75em" }} />
)

export const Caption = ({ small, ...props }) => (
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

export const MultiLangCaption = ({
  sx = {},
  thai,
  english,
  small,
  language,
}) => (
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
export const DateCaption = ({ sx = {}, ...props }) => (
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

export const Name = ({ thai, english, language }) => (
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
export const Couple = props => <Box {...props} />
