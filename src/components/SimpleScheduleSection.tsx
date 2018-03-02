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

const Red = styled.div`
  font-weight: bold;
  color: orangered;
`

const FileLink = styled.a.attrs({
  target: '_blank'
})`
  color: lightcoral;
  text-decoration: none;
`

interface FileProps {
  href: string
}

const File: StatelessComponent<FileProps> = ({ children, href }) => (
  <div style={{ marginTop: '10px' }}>
    <FileLink href={href}>{children ? children : '발표자료'}</FileLink>
  </div>
)

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
            <Data>
              IoT 로 농업데이터 수집하는 개발자 커뮤니티 - 컨트리뷰터 모집<br />
              <br />김종광 (IoT Labs)
            </Data>
            <Data rowSpan={2} />
          </Row>
          <Row>
            <Header>11:10 ~ 11:50</Header>
            <Data>
              Elastic에서 원격으로 일하는 방법들<br />
              <br />김종민 (Elastic)
            </Data>
          </Row>
          <Row>
            <Header>11:50 ~ 13:00</Header>
            <Data colSpan={5}>Lunch</Data>
          </Row>
          <Row>
            <Header>13:00 ~ 13:40</Header>
            <Data>
              '모두의 손에 딥러닝 툴을...'<br />
              <br />김태영, 전미정(Keras Korea)
              <br />
              <File href="https://tykimos.github.io/2018/02/24/Deep_Learning_Tool_in_Everyones_hands/" />
            </Data>
            <Data>
              차곡차곡 쉽게 알아가는 Elasticsearch와 Node.js<br />
              <br />황희정(자바카페)
              <br />
              <File href="http://tech.javacafe.io/2018/02/24/%EC%B0%A8%EA%B3%A1%EC%B0%A8%EA%B3%A1_%EC%89%BD%EA%B2%8C_%EC%95%8C%EC%95%84%EA%B0%80%EB%8A%94_Elasticsearch%EC%99%80_Nodejs/" />
            </Data>
            <Data>
              클라우드 API를 활용하여 FirstApp 모바일 앱 빠르게 구현하기<br />
              <br />최영락 (오픈스택 한국 커뮤니티)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A1%E1%86%A8(%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A2%E1%86%A8)-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B3+API%E1%84%85%E1%85%B3%E1%86%AF+%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A7+FirstApp+%E1%84%86%E1%85%A9%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%A2%E1%86%B8+%E1%84%88%E1%85%A1%E1%84%85%E1%85%B3%E1%84%80%E1%85%A6+%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5.pdf" />
            </Data>
            <Data rowSpan={4}>
              <Red>Workshop 1</Red>
              <br />Custom Vision으로 나만의 이미지 분류 모델 만들어보기<br />
              <br />김은지 (Microsoft)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%86%AB%E1%84%8C%E1%85%B5(MS%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%89%E1%85%A3%E1%86%B8)_KCD_Custom+Vision+HOL_EUNK.pdf" />
            </Data>
            <Data rowSpan={4}>
              <Red>Workshop 2</Red>
              <br />Docker과 Azure<br />
              <br />김세준 Korea Azure User Group (KRAZURE)
            </Data>
          </Row>
          <Row>
            <Header>13:40 ~ 14:20</Header>
            <Data>
              ASP.NET, Angular, Azure를 사용한 웹 개발 빠르게 살펴보기<br />
              <br />박용준 (Taeyo.NET)
            </Data>
            <Data>
              IntelliJ IDEA만으로 개발하기<br />
              <br />이동욱 (JetBrains Korea User Group)
            </Data>
            <Data>
              Hello world 에서 패키징까지<br />
              <br />김진석 (우분투 한국커뮤니티)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8(%E1%84%8B%E1%85%AE%E1%84%87%E1%85%AE%E1%86%AB%E1%84%90%E1%85%AE%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8)_Hello%2C+world%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5+%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%81%E1%85%A1%E1%84%8C%E1%85%B5.pdf" />
            </Data>
          </Row>
          <Row>
            <Header>14:20 ~ 14:40</Header>
            <Data colSpan={3}>Break</Data>
          </Row>
          <Row>
            <Header>14:40 ~ 15:20</Header>
            <Data>
              What’s new in MySQL8.0<br />
              <br />박혜선 (오라클)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A8%E1%84%89%E1%85%A5%E1%86%AB(%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A1%E1%84%8F%E1%85%B3%E1%86%AF)_WhatsNewInMySQL8.0_KR_V2.pdf" />
            </Data>
            <Data>
              가내수공 App for your Smartwatch (feat. Gear S2/3)<br />
              <br />엄지용 (EFL 한국 커뮤니티)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/efl_kcd2018.pdf" />
            </Data>
            <Data>
              C++ 프로젝트의 자동 빌드화<br />
              <br />C++ Korea
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1(C%2B%2B%E1%84%8F%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1)_Build+Automation+of+C%2B%2B+Project.pptx" />
            </Data>
          </Row>
          <Row>
            <Header>15:20 ~ 16:00</Header>
            <Data>
              챗봇 서비스에서 MongoDB의 활용<br />
              <br />김동한 (MongoDB Korea)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB(MongoDB)_MongoDB+in+Chat+Bot+-+KCD+2018+Public.pdf" />
            </Data>
            <Data>
              About Open Source Community in Japan<br />
              <br />Nogata Jun (Debian JP, 영어발표)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/NogataJun(Japan)-kcd_opensource_community.pdf" />
            </Data>
            <Data>
              I am ASP.NET Core Razor Pages!<br />
              <br />한상훈 (ASP.NET Korea User Group)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AE%E1%86%AB(ASP.Net)_I+am+ASP.NET+Core+Razor+Pages.pdf" />
            </Data>
            <Data rowSpan={4}>
              <Red>Workshop 3</Red>
              <br />BlockChain In BitCoin<br />
              <br />이태영(Jboss User Group)
              <br />
              <File href="https://www.slideshare.net/taeyounglee1447/blockchain-and-ethereum-develop?from_m_app=android" />
            </Data>
            <Data rowSpan={4}>
              <Red>Workshop 4</Red>
              <br />타이디(tidyverse)와 당근(caret)으로 캐글(kaggle) 입문하기<br />
              <br />캐글뽀개기 커뮤니티
              <br />
              <File href="https://github.com/KaggleBreak/walkingkaggle/tree/master/kcd2018" />
            </Data>
          </Row>
          <Row>
            <Header>16:00 ~ 16:30</Header>
            <Data colSpan={3}>Break</Data>
          </Row>
          <Row>
            <Header>16:30 ~ 17:10</Header>
            <Data>
              Spark Summit Europe 발표 & 참가기<br />
              <br />김상우(스파크 사용자 모임)
            </Data>
            <Data>
              Beyond Automotive<br />
              <br />유명환(하모니카 (HarmonyCar))
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/7th_KCD_HarmonyCar_funfunyoo.pptx" />
            </Data>
            <Data>
              한국어 임베딩<br />
              <br />박혜웅(바벨피쉬)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A8%E1%84%8B%E1%85%AE%E1%86%BC(%E1%84%87%E1%85%A1%E1%84%87%E1%85%A6%E1%86%AF%E1%84%91%E1%85%B5%E1%84%89%E1%85%B1)%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A6%E1%84%83%E1%85%B5%E1%86%BC.pdf" />
            </Data>
          </Row>
          <Row>
            <Header>17:10 ~ 17:50</Header>
            <Data>
              물어본적 없습니다만,(부제:믿고 거르는 커리어 이야기)<br />
              <br />
              박상현(코딩이랑 무관합니다만)
              <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB(%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%84%80%E1%85%AA%E1%86%AB%E1%84%92%E1%85%A1%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1%E1%84%86%E1%85%A1%E1%86%AB)_%E1%84%86%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%A5%E1%84%87%E1%85%A9%E1%84%8C%E1%85%B5+%E1%84%8B%E1%85%A1%E1%86%AD%E1%84%8B%E1%85%A1%E1%86%BB%E1%84%89%E1%85%B3%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1%E1%84%86%E1%85%A1%E1%86%AB+V8.pptx" />
            </Data>
            <Data>
              Webpack, ES6, TS로 만든 React datagrid 컴포넌트 제작기<br />
              <br />
              장기영(자바스크립트 개발자 포럼)
              <br />
              <File href="http://slides.com/chequer/axdatagrid-first" />
            </Data>
            <Data>
              Google Polymer in Action<br />
              <br />신정규(TNF/Needlworks)
            </Data>
          </Row>
          <Row>
            <Header>17:50 ~ 18:00</Header>
            <Data colSpan={5}>경품추첨 및 마무리</Data>
          </Row>
        </tbody>
      </Table>
    </Wrapper>
    <Notice>
      ※ Workshop은 개인 노트북을 지참하셔야 합니다. <br />Hands on Lab 형태로
      진행하기에 참가를 원하는 경우 참가하고자 하는 Workshop을 작성하시어
      spicalong@gmail.com으로 별도 신청을 부탁드립니다.
    </Notice>
  </SectionTemplate>
)

export default SimpleScheduleSection
