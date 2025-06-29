import './App.css'
import Banner from './components/HeroSections/Banner'
import InfraSection from './components/HeroSections/InfraSection'
import AutonomysSection from './components/HeroSections/AutonomysSection'
import RightRingComponent from './components/HeroSections/RightRingSection'
import ProtocolSection from './components/HeroSections/ProtocolSection'
import NovelSection from './components/HeroSections/NovelSection'
import StackSection from './components/HeroSections/StackSection';
import SuiteSection from './components/HeroSections/SuiteSection'
import NewsSection from './components/HeroSections/NewsSection'
import AdsSection from './components/HeroSections/AdsSection'
import CommunitySection from './components/HeroSections/CommunitySection'


function App() {

  return (
    <>
      <Banner></Banner>
      <br></br>
      <br></br>
      <InfraSection></InfraSection>
      <br></br>
      <br></br>
      <AutonomysSection></AutonomysSection>
      <RightRingComponent></RightRingComponent>
      <ProtocolSection></ProtocolSection>
      <StackSection></StackSection>
      <NovelSection></NovelSection>
      <SuiteSection></SuiteSection>
      <AdsSection></AdsSection>
      <NewsSection></NewsSection>
      <CommunitySection></CommunitySection>
      
    </>
  )
}

export default App
