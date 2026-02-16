import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </Box>
  );
}

export default App;
