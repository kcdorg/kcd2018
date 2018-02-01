import * as React from 'react'
import styled from 'styled-components'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  text-align: center;
  background: url('header-bg.jpg') no-repeat center center;
  background-size: cover;
  padding-top: 62px;
  padding-bottom: 100px;
`

const Logo = styled.img`
  width: 125px;
`

const Title = styled.h1`
  max-width: 730px;
  margin-top: 55px;
  margin-left: auto;
  margin-right: auto;
  border: 6px solid white;
  padding: 20px 40px;
  font-size: 54px;
  font-weight: 500;
  line-height: 1;
  color: white;

  @media ${ON_MOBILE} {
    border: none;
    padding: 0;
    font-size: 45px;
  }
`

const SubTitle = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: white;
  font-weight: 300;

  @media ${ON_MOBILE} {
    white-space: pre-line;
    font-size: 12px;
  }
`

const RegisterButton = styled.button`
  margin-top: 40px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 300;
  color: white;
  padding: 17px 20px;
  background: #20202f;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`

const Header: React.StatelessComponent<{}> = () => (
  <Wrapper>
    <Logo src="logo-white.png" />
    <Title>Korea Community Day 2018</Title>
    <SubTitle>
      일시 : 2018년 2월 24일(토) 10:30~18:00 {'\n'}장소 : 한국Microsoft
      11층(광화문 더케이트윈타워 A동)
    </SubTitle>
    <a target="_blank" href="https://festa.io/events/6">
      <RegisterButton>지금 바로 등록하기</RegisterButton>
    </a>
  </Wrapper>
)

export default Header
