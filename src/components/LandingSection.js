import React from 'react';
import { Box, VStack, Heading, Text, Avatar } from '@chakra-ui/react';

const greeting = "Hi, I am";
const bio1 = "A Frontend Developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  return (
    <Box
      id="landing-section"
      height="100vh"
      backgroundColor="#0e0e10"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8}>
        <Avatar
          size="2xl"
          name="Avatar"
          src="https://i.pravatar.cc/150?img=7"
        />
        <VStack spacing={4}>
          <Heading as="h1" size="xl" color="white">
            {greeting}
          </Heading>
          <Heading as="h2" size="2xl" color="white">
            {bio1}
          </Heading>
          <Text fontSize="xl" color="white">
            {bio2}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default LandingSection;
