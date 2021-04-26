import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { UseFormRegister } from 'react-hook-form';

type TextareaFieldProps = {
  label: string;
  placeholder?: string;
  register: UseFormRegister;
  error?: string;
  p?: number;
  isRequired?: boolean;
  defaultValue?: string;
};

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder,
  register,
  error,
  p,
  isRequired,
  defaultValue,
}) => {
  return (
    <FormControl
      isInvalid={!!error}
      p={p ?? 3}
      isRequired={isRequired}
    >
      <FormLabel>{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        {...register}
        defaultValue={defaultValue}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
  p: PropTypes.number,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.string,
};
