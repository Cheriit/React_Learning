'use strict';
import * as React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ListProvider } from '../context/listContext';
import { ItemTable } from './ItemTable';
import { ModalContainer } from './Modal';

export const App: React.FC = () => (
  <ListProvider>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={1}>
            <ItemTable />
          </VStack>
        </Grid>
      </Box>
      <ModalContainer />
    </ChakraProvider>
  </ListProvider>
);
