// app/about/page.tsx

import Navbar from '../components/Navbar'
import AboutMe from './AboutMe'
import ContactSection from '../components/ContactSection'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <ContactSection/>
    </>
  )
}
