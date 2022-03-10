import { ActionType, StateType } from "./types";
import { initialState } from "./initialState";
import { ChangeCountType, CreateGamerNameTypes } from "./enum";
import { Reducer } from "redux";

export const reducer: Reducer<StateType, ActionType> = (
  state = initialState,
  action
) => {
  const newState = { ...state };
  switch (action.type) {
    case ChangeCountType.PLUS_POINT:
      newState.count += 3;
      return newState;
    case ChangeCountType.MINUS_POINT:
      newState.count -= 1;
      return newState;
    case CreateGamerNameTypes.ASSIGN_NAME:
      const name = action.payload;
      newState.name = name;
      return newState;
  }
};
