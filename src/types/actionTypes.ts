type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

enum ListActionType {
  TEST = 'TEST',
  TEST2 = 'TEST2',
}

type ListPayload = {
  [ListActionType.TEST]: {
    id: number;
  };
  [ListActionType.TEST2]: {
    content: string;
  };
};

type ListAction = ActionMap<ListPayload>[keyof ActionMap<ListPayload>];

export type { ListAction };
export { ListActionType };
