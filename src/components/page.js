import React from "react"
import { Flex, Box } from "reflexbox"

import { H1 } from "./headings"
import { Section, Name, MultiLangCaption, Couple, Small } from "."
import { Layout } from "./layout"

export const Page = ({ language }) => {
  return (
    <Layout>
      <Section>
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
        <H1>
          <span>Chotirat</span> <Small>&</Small> <span>Rien</span>
        </H1>
        <MultiLangCaption
          small
          language={language}
          thai="นางสาวโชติรัตน์ จองกฤษ และ นายรีน โครเจียน"
          english="Chotirat Jonggrit & Rien Coertjens"
        />
        <MultiLangCaption
          small
          language={language}
          thai="วันอาทิตย์ที่ 1 พฤศจิกายน พ.ศ. 2563"
          english={
            <>
              Sunday, the first of November
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
    </Layout>
  )
}
