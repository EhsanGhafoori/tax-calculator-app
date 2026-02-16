import React, { createContext, useContext, useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from '@chakra-ui/react';

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const onOpen = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const onClose = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ onOpen, onClose }}>
      {children}
      {alert && (
        <Box position="fixed" top={20} right={4} zIndex={2000} minWidth="300px">
          <Alert
            status={alert.type}
            variant="left-accent"
          >
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>
                {alert.type === 'success' ? 'Success!' : 'Error!'}
              </AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        </Box>
      )}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};
