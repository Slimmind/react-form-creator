import { nanoid } from "nanoid"
import { AppConfigType, ItemTypes } from "./constants"
import { getParentId } from "./getParentId";

export const createInput = (state: AppConfigType): AppConfigType => {
  const itemId = nanoid();
  const parentId = getParentId(state.formItems);
  
  const newBlock = {
    id: itemId,
    parentId: parentId,
    node: ItemTypes.INPUT,
    name: '',
    label: '',
    value: '',
    placeholder: '',
  }

  const updatedFormItems = [
    ...state.formItems,
    newBlock
  ];

  const updatedFormConfig = {
    ...state,
    activeItem: itemId,
    formItems: updatedFormItems
  }

  return updatedFormConfig;
}
