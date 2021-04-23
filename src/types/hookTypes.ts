import React from 'react';

type ReducerHook<State, Type> = [
  State,
  React.Dispatch<Type>,
  unknown,
];

export type { ReducerHook };
