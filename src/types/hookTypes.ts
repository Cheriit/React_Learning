import React from 'react';

type ReducerHook<State, Type> = {
  state: State;
  dispatch: React.Dispatch<Type>;
  events: unknown;
};

export type { ReducerHook };
