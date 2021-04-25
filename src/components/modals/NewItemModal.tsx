import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from '@chakra-ui/react';
import useModal from '../../hooks/useModal';
import useList from '../../hooks/useList';
import { useForm } from 'react-hook-form';
import { ListActionType } from '../../types/actionTypes';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required().label('Image name'),
  imageUrl: yup.string().required().url().label('Image url'),
  description: yup.string().required().label('Description'),
  ranking: yup
    .number()
    .positive()
    .max(10)
    .required()
    .label('Ranking'),
});

type ItemFormInputs = {
  name: string;
  imageUrl: string;
  ranking: number;
  description: string;
};

export const NewItemModal: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ItemFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [, setContext] = useModal();
  const [, dispatch] = useList();

  const onSubmit = (data: ItemFormInputs) => {
    dispatch({ type: ListActionType.ADD, payload: { ...data } });
    setContext({ isOpen: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <h3>Create add new item to list</h3>

        <FormControl
          isRequired
          isInvalid={!!errors?.name?.message}
          p="2"
        >
          <FormLabel>Item name</FormLabel>
          <Input placeholder="Item name" {...register('name')} />
          <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={!!errors?.imageUrl?.message}
          p="2"
        >
          <FormLabel>Image URL</FormLabel>
          <Input placeholder="Image url" {...register('imageUrl')} />
          <FormErrorMessage>
            {errors?.imageUrl?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={!!errors?.ranking?.message}
          p="2"
        >
          <FormLabel>Ranking</FormLabel>
          <NumberInput max={10} min={0} defaultValue={1}>
            <NumberInputField {...register('ranking')} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>
            {errors?.ranking?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={!!errors?.description?.message}
          p="2"
        >
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Here is a sample description"
            {...register('description')}
          />
          <FormErrorMessage>
            {errors?.description?.message}
          </FormErrorMessage>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="green"
          mr={3}
          isLoading={isSubmitting}
          type="submit"
          disabled={
            !!errors.description ||
            !!errors.imageUrl ||
            !!errors.name ||
            !!errors.ranking
          }
        >
          Add
        </Button>

        <Button
          mr={2}
          isLoading={isSubmitting}
          onClick={() => {
            setContext({ isOpen: false });
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </form>
  );
};
