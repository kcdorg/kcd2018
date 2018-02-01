import * as React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import SpeakerSection from './components/SpeakerSection'
import SimpleScheduleSection from './components/SimpleScheduleSection'
import LocationSection from './components/LocationSection'
import PatronSection from './components/PatronSection'
import PriceSection from './components/PriceSection'
import FAQSection from './components/FAQSection'
import CommunitySection from './components/CommunitySection'
import InquirySection from './components/InquirySection'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <IntroSection />
        <SimpleScheduleSection />
        <SpeakerSection />
        <LocationSection />
        <PriceSection />
        <FAQSection />
        <PatronSection />
        <CommunitySection />
        <InquirySection />
        <Footer />
      </Wrapper>
    )
  }
}

export default App
