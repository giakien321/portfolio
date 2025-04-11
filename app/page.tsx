import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutPreview from './components/AboutPreview'
import WorkPreview from './components/WorkPreview'
import ContactSection from './components/ContactSection'


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <WorkPreview />
      <ContactSection />
    </>
  );
}
