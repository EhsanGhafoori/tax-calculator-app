import React from 'react';
import { Box, VStack, HStack, Image, Heading, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc }) => {
  const imageUrl = typeof imageSrc === 'function' ? imageSrc() : imageSrc;
  
  return (
    <Box
      backgroundColor="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{
        transform: 'scale(1.05)',
      }}
    >
      <Image src={imageUrl} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack p={4} spacing={4} alignItems="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
        <HStack spacing={2} color="blue.500" fontWeight="semibold">
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
