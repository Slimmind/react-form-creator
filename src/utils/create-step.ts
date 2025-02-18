import { nanoid } from "nanoid"
import { AppConfigType, ItemTypes } from "./constants"
import { getParentId } from "./getParentId";

export const createStep = (state: AppConfigType): AppConfigType => {
  const itemId = nanoid();
  const parentId = getParentId(state.formItems);
  
  const newStep = {
    id: itemId,
    parentId: parentId,
    node: ItemTypes.STEP,
    stepTitle: '',
    stepDescription: '',
  }

  const updatedFormItems = [
    ...state.formItems,
    newStep
  ];

  const updatedFormConfig = {
    ...state,
    activeItem: itemId,
    formItems: updatedFormItems
  }

  return updatedFormConfig;
}
