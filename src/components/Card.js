import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{
        transform: 'scale(1.05)',
      }}
      spacing={0}
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack p={4} spacing={4} alignItems="flex-start" width="100%">
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
    </VStack>
  );
};

export default Card;
