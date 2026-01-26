import { useState } from 'react';

export const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    setResponse(null);

    try {
      // Simulate API call - 50% success, 50% error
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      const isSuccess = Math.random() > 0.5;
      
      if (isSuccess) {
        setResponse({
          type: 'success',
          message: `Thank you for your submission, ${data.firstName}! We will get back to you soon.`,
        });
      } else {
        setResponse({
          type: 'error',
          message: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};
