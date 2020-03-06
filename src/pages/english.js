import React from "react"
import { Section, Caption, Small, DateCaption } from "../components"
import { H1 } from "../components/headings"
import { Layout } from "../components/layout"

const EnglishPage = props => {
  return (
    <Layout>
      <Section>
        <Caption>together with their families</Caption>
        <H1>
          <span>Chotirat</span> <Small>&</Small> <span>Rien</span>
        </H1>
        <Caption>Invite you to celebrate their wedding</Caption>
        <DateCaption>may 4th, 2020</DateCaption>
      </Section>
    </Layout>
  )
}
export default EnglishPage
