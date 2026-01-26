import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useSubmit } from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const { isLoading, response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: (values) => {
      submit('https://example.com/contact', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .min(2, 'Must be at least 2 characters')
        .max(15, 'Must be 15 characters or less'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      type: Yup.string()
        .oneOf(['hireMe', 'openSource', 'other'], 'Invalid option')
        .required('Required'),
      comment: Yup.string()
        .required('Required')
        .min(25, 'Must be at least 25 characters'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <Box
      id="contactme-section"
      minHeight="100vh"
      backgroundColor="#0e0e10"
      padding={{ base: 4, md: 16 }}
      paddingTop={{ base: 24, md: 32 }}
    >
      <VStack spacing={8} maxWidth="600px" margin="0 auto">
        <Heading as="h2" size="xl" color="white" textAlign="center">
          Contact Me
        </Heading>
        <Box
          as="form"
          onSubmit={formik.handleSubmit}
          backgroundColor="white"
          padding={8}
          borderRadius="lg"
          width="100%"
        >
          <VStack spacing={6}>
            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                {...formik.getFieldProps('firstName')}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.type && formik.errors.type}>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select
                id="type"
                name="type"
                {...formik.getFieldProps('type')}
              >
                <option value="hireMe">Hire me</option>
                <option value="openSource">Open source project</option>
                <option value="other">Other</option>
              </Select>
              <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
              <FormLabel htmlFor="comment">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                rows={6}
                {...formik.getFieldProps('comment')}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="purple"
              width="full"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
