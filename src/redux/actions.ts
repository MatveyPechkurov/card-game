import { ChangeCountType, CreateGamerNameTypes } from "./enum";

export const assignName = (name: string) => ({
  type: CreateGamerNameTypes.ASSIGN_NAME,
  payload: name,
});

export const minusPoint = () => ({
  type: ChangeCountType.MINUS_POINT,
});
export const plusPoint = () => ({
  type: ChangeCountType.PLUS_POINT,
});
