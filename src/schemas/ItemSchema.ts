import * as yup from 'yup';

export const ItemSchema = yup.object().shape({
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
