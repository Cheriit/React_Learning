import React from 'react';
import { Button, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useList, useModal } from 'hooks';
import { useForm } from 'react-hook-form';
import { ListActionType, ListItem } from 'types';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextInputField,
  NumberInputField,
  TextareaField,
} from 'components/forms/inputs';
import { ItemSchema } from 'schemas';
import PropTypes from 'prop-types';

type ItemFormInputs = {
  name: string;
  imageUrl: string;
  ranking: number;
  description: string;
};

type EditItemModalProps = {
  item: ListItem;
};

export const EditItemModal: React.FC<EditItemModalProps> = ({
  item,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ItemFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(ItemSchema),
  });

  const [, setContext] = useModal();
  const [, dispatch] = useList();

  const onSubmit = (data: ItemFormInputs) => {
    dispatch({
      type: ListActionType.EDIT,
      payload: { id: item.id, ...data },
    });
    setContext({ isOpen: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <h3>Create add new item to list</h3>

        <TextInputField
          label="Item name"
          placeholder="Item name"
          register={register('name')}
          error={errors?.name?.message}
          isRequired={true}
          defaultValue={item.name}
        />

        <TextInputField
          label="Image URL"
          placeholder="Image url"
          register={register('imageUrl')}
          error={errors?.imageUrl?.message}
          isRequired={true}
          defaultValue={item.imageUrl}
        />

        <NumberInputField
          label="Ranking"
          min={1}
          max={10}
          register={register('ranking')}
          error={errors?.ranking?.message}
          isRequired={true}
          defaultValue={item.ranking}
        />

        <TextareaField
          label="Description"
          placeholder="Example description"
          register={register('description')}
          error={errors?.description?.message}
          isRequired={true}
          defaultValue={item.description}
        />
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
          Save
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

EditItemModal.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
  }).isRequired,
};
