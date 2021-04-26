import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { HStack, Th, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { SortedItemFields, SortingDirections } from 'types';

type SortableColumnHeaderProps = {
  name: string;
  field: SortedItemFields;
  onClick: (field: SortedItemFields) => void;
  sortingDirection: SortingDirections;
  sortedBy: SortedItemFields;
};
export const SortableColumnHeader: React.FC<SortableColumnHeaderProps> = ({
  name,
  field,
  onClick,
  sortingDirection,
  sortedBy,
}) => {
  return (
    <Th onClick={() => onClick(field)} cursor="pointer">
      <HStack>
        <Text> {name} </Text>
        {sortedBy === field ? (
          sortingDirection === SortingDirections.ascending ? (
            <ChevronUpIcon w={6} h={6} />
          ) : (
            <ChevronDownIcon w={6} h={6} />
          )
        ) : (
          <></>
        )}
      </HStack>
    </Th>
  );
};
SortableColumnHeader.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOf(
    Object.values(SortedItemFields) as SortedItemFields[],
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  sortingDirection: PropTypes.oneOf(
    Object.values(SortingDirections) as SortingDirections[],
  ).isRequired,
  sortedBy: PropTypes.oneOf(
    Object.values(SortedItemFields) as SortedItemFields[],
  ).isRequired,
};
