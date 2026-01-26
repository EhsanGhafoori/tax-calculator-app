import React, { useEffect, useRef, useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faTwitter,
    url: 'https://www.twitter.com',
  },
];

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        setScrollDirection('down');
      } else {
        // Scrolling up
        setScrollDirection('up');
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      if (scrollDirection === 'down') {
        headerRef.current.style.transform = 'translateY(-200px)';
      } else {
        headerRef.current.style.transform = 'translateY(0)';
      }
    }
  }, [scrollDirection]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick('projects')}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
