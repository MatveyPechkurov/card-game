import { ChangeCountType, CreateGamerNameTypes } from "./enum";

export interface ActionType {
  type: ChangeCountType | CreateGamerNameTypes;
  payload?: any;
}

export interface StateType {
  name?: any;
  count?: any;
}
