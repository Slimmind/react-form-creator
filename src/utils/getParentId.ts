import { FormItemType, ItemTypes } from "./constants";

export const getParentId = (items: FormItemType[]): string | null => {
  const wrapperNodes = new Set([
    ItemTypes.STEP,
    ItemTypes.COLUMN,
    ItemTypes.BLOCK,
    ItemTypes.FIELDSET,
    ItemTypes.FORM
  ]);

  const closestParent = items
    .slice()
    .reverse()
    .find(item => wrapperNodes.has(item.node));


  return closestParent?.id ?? null;
};