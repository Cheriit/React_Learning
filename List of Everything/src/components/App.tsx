'use strict';
import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { ListProvider, ModalProvider } from 'context';
import { ModalContainer } from 'components/modals';
import { SearchTable, ItemTable } from 'components/table';

export const App: React.FC = () => (
  <ListProvider>
    <ModalProvider>
      <ChakraProvider theme={theme}>
        <Grid p={3}>
          <Box textAlign="right" fontSize="xl" mb={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>
          <Box textAlign="center" fontSize="xl">
            <SearchTable />
            <ItemTable />
          </Box>
        </Grid>
        <ModalContainer onSave={() => null} />
      </ChakraProvider>
    </ModalProvider>
  </ListProvider>
);
