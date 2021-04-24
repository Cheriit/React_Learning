import React from 'react';

type ReducerHook<State, Type> = [
  State,
  React.Dispatch<Type>,
  unknown,
];

type ContextHook<Context> = [Context, React.Dispatch<Context>];

export type { ReducerHook, ContextHook };
