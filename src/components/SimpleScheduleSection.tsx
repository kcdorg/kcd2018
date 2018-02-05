import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 10px;
  font-size: 14px;
  overflow: auto;
  /* word-break: keep-all; */

  @media ${ON_MOBILE} {
    font-size: 10px;
  }
`

const Table = styled.table`
  width: 100%;
  min-width: 550px;
  border-collapse: collapse;
  border: 1px solid #4a4a4a;
  table-layout: fixed;
`

const Row = styled.tr`
  border: 1px solid #4a4a4a;
`

const Header = styled.th`
  border: 1px solid #4a4a4a;
  padding: 8px;
`

const Data = styled.td`
  border: 1px solid #4a4a4a;
  text-align: center;
  padding: 8px;
`

const Notice = styled.div`
  margin-top: 15px;
  padding: 20px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

const SimpleScheduleSection: StatelessComponent<{}> = () => (
  <SectionTemplate title="스케쥴" iconClass="fa fa-clock-o fa-2x">
    <Wrapper>
      <Table>
        <thead>
          <Row>
            <Header rowSpan={2}>시간</Header>
            <Header>Track Ⅰ</Header>
            <Header>Track Ⅱ</Header>
            <Header>Track Ⅲ</Header>
            <Header>Track IV</Header>
            <Header>Track V</Header>
          </Row>
          <Row>
            <Header>11층 A</Header>
            <Header>11층 B</Header>
            <Header>11층 C</Header>
            <Header>11층 D</Header>
            <Header>11층 E</Header>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Header>10:00 ~ 10:30</Header>
            <Data colSpan={5}>Registration</Data>
          </Row>
          <Row>
            <Header>10:30 ~ 11:10</Header>
            <Data rowSpan={2} colSpan={3}>
              커뮤니티 대담<br />커뮤니티 입문하기
            </Data>
            <Data>IoT Labs</Data>
            <Data rowSpan={2} />
          </Row>
          <Row>
            <Header>11:10 ~ 11:50</Header>
            <Data>ElasticSearch</Data>
          </Row>
          <Row>
            <Header>11:50 ~ 13:00</Header>
            <Data colSpan={5}>Lunch</Data>
          </Row>
          <Row>
            <Header>13:00 ~ 13:40</Header>
            <Data>Keras Korea</Data>
            <Data>자바카페</Data>
            <Data>오픈스택 한국 커뮤니티</Data>
            <Data rowSpan={4}>Microsoft</Data>
            <Data rowSpan={4}>Korea Azure User Group (KRAZURE)</Data>
          </Row>
          <Row>
            <Header>13:40 ~ 14:20</Header>
            <Data>Taeyo.NET</Data>
            <Data>JetBranis 코리아 유저그룹</Data>
            <Data>우분투 한국커뮤니티</Data>
          </Row>
          <Row>
            <Header>14:20 ~ 14:40</Header>
            <Data colSpan={3}>Break</Data>
          </Row>
          <Row>
            <Header>14:40 ~ 15:20</Header>
            <Data>MySQL</Data>
            <Data>EFL 한국 커뮤니티</Data>
            <Data>C++ Korea</Data>
          </Row>
          <Row>
            <Header>15:20 ~ 16:00</Header>
            <Data>MongoDB Korea</Data>
            <Data>Nogata Jun (Japan)</Data>
            <Data>ASP.NET Korea User Group</Data>
            <Data rowSpan={4}>Jboss user Group</Data>
            <Data rowSpan={4}>캐글뽀개기</Data>
          </Row>
          <Row>
            <Header>16:00 ~ 16:30</Header>
            <Data colSpan={3}>Break</Data>
          </Row>
          <Row>
            <Header>16:30 ~ 17:10</Header>
            <Data>스파크 사용자모임</Data>
            <Data>하모니카 (HarmonyCar)</Data>
            <Data>바벨피쉬</Data>
          </Row>
          <Row>
            <Header>17:10 ~ 17:50</Header>
            <Data>코딩이랑 무관합니다만</Data>
            <Data>자바스크립트 개발자 포럼</Data>
            <Data>TNF/Needlworks</Data>
          </Row>
          <Row>
            <Header>17:50 ~ 18:00</Header>
            <Data colSpan={5}>경품추첨 및 마무리</Data>
          </Row>
        </tbody>
      </Table>
    </Wrapper>
    <Notice>
      ※ Workshop 참가를 원하는 경우 참가하고자 하는 Worksop을 작성하시어
      spicalong@gmail.com으로 별도 신청을 부탁드립니다.
    </Notice>
  </SectionTemplate>
)

export default SimpleScheduleSection
