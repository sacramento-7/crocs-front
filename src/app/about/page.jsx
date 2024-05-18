import AboutSectionCards from '@/components/aboutCard/AboutSectionCards';
import AboutStory from '@/components/aboutStory/AboutStory';
import Hero from '@/components/hero/Hero';
import ServiceLabels from '@/components/serviceLabels/ServiceLabels';


const AboutPage = () => {
  return (
    <>
      <Hero />
      <AboutSectionCards />
      <AboutStory />
      <ServiceLabels />
    </>
  )
}

export default AboutPage