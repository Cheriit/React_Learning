import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField as ChakraNumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { UseFormRegister } from 'react-hook-form';

type NumberInputFieldProps = {
  label: string;
  placeholder?: string;
  register: UseFormRegister;
  error?: string;
  p?: number;
  isRequired?: boolean;
  min?: number;
  max?: number;
  defaultValue?: number;
};

export const NumberInputField: React.FC<NumberInputFieldProps> = ({
  label,
  placeholder,
  register,
  error,
  p,
  isRequired,
  min,
  max,
  defaultValue,
}) => {
  return (
    <FormControl
      isInvalid={!!error}
      p={p ?? 3}
      isRequired={isRequired}
    >
      <FormLabel>{label}</FormLabel>
      <NumberInput max={max} min={min} defaultValue={defaultValue}>
        <ChakraNumberInputField
          placeholder={placeholder}
          {...register}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

NumberInputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
  p: PropTypes.number,
  isRequired: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
};
