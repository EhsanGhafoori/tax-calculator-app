import React from 'react';
import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'Project 1',
    description: 'A comprehensive e-commerce platform built with React and Redux.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
  },
  {
    title: 'Project 2',
    description: 'A social media dashboard with real-time analytics and data visualization.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
  },
  {
    title: 'Project 3',
    description: 'A task management application with collaborative features and team workspaces.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500',
  },
  {
    title: 'Project 4',
    description: 'A weather application with location-based forecasts and interactive maps.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500',
  },
];

const ProjectsSection = () => {
  return (
    <Box
      id="projects-section"
      minHeight="100vh"
      backgroundColor="#0e0e10"
      padding={{ base: 4, md: 16 }}
      paddingTop={{ base: 24, md: 32 }}
    >
      <VStack spacing={8} alignItems="stretch">
        <Heading as="h2" size="xl" color="white" textAlign="center">
          Featured Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ProjectsSection;
