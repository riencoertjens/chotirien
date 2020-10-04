import React from "react"
import { Flex, Box } from "reflexbox"

import { H1 } from "./headings"
import {
  Section,
  Name,
  MultiLangCaption,
  MultiLangSchedule,
  Couple,
  Small,
  ThemeColor,
} from "."
import { Layout } from "./layout"

export const Page = ({ language }) => {
  return (
    <Layout>
      <Section>
        <Flex alignItems="center" flexDirection={["column", "row"]}>
          {(!language || language === "thai") && (
            <>
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
              <Box mx={[4, 4, 5]} sx={{ fontFamily: "thai" }}>
                และ
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
            </>
          )}
        </Flex>
        <MultiLangCaption
          language={language}
          thai="มี ความยิ นดี ขอเรี ยนเชิ ญเพื่ อเป็ นเกี ยรติ ในงานเลี้ ยงฉลองเนื่ องในพิ ธี มงคลสมรส"
          english="Together with our families, we would like to invite you to our wedding"
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
          thai={
            <>
              วันอาทิตย์ที่ 1 พฤศจิกายน พ.ศ. 2563
              <br />ณ นานาบีชรีสอร์ท หาดทุ่งวัวแล่น จังหวัดชุมพร
            </>
          }
          english={
            <>
              Sunday, November 1st 2020
              <br />
              at Nana Beach Resort, Chumphon
            </>
          }
        />
        <Box
          sx={{
            fontFamily: "english",
            textAlign: "center",
            my: 32,
            "p, a": {
              display: "inline-block",
              mb: "8px",
              ".theme": {
                letterSpacing: "5px",
                mr: "-5px",
              },
            },
            a: {
              color: "#5C7757",
              mt: "32px",
            },
          }}
        >
          <p className="theme">THEME</p>
          <Flex>
            <ThemeColor color="#D5CFC9" />
            <ThemeColor color="#869D83" />
            <ThemeColor color="#5C7757" />
          </Flex>
          <a
            href="https://www.instagram.com/explore/tags/chotirien/"
            target="_blank"
            rel="noopener noreferrer"
            className="hashtag"
          >
            #chotirien
          </a>
        </Box>
        <MultiLangSchedule
          small
          language={language}
          english={
            <>
              07:09 Religious Ceremony
              <br />
              08:09 Marriage Ceremony
              <br />
              09:09 Water Blessing Ceremony
              <br />
              11:30 Lunch reception
            </>
          }
          thai={
            <>
              เวลา 07:09 น. พระสงฆ์เจริญพระพุทธมนต์
              <br />
              เวลา 08:09 น. พิธีแลกแหวน และไหว้ญาติผู้ใหญ่
              <br />
              เวลา 09:09 น. พิธีหลั่งน้ำพระพุทธมนต์และประสาทพร
              <br />
              เวลา 11:30 น. ร่วมรับประทานอาหาร
            </>
          }
        />
      </Section>
    </Layout>
  )
}
