import { AppConfigType, ItemTypes } from "./constants";
import { createBlock } from "./create-block";
import { createColumn } from "./create-column";
import { createFieldset } from "./create-fieldset";
import { createInput } from "./create-input";
import { createRadio } from "./create-radio";
import { createStep } from "./create-step";
import { createTextarea } from "./create-textarea";

export const createItem = (itemType: string, state: AppConfigType): AppConfigType => {
  
  switch(itemType) {
    case ItemTypes.STEP:
      return createStep(state);
    case ItemTypes.COLUMN:
      return createColumn(state);
    case ItemTypes.BLOCK:
      return createBlock(state);
    case ItemTypes.FIELDSET:
      return createFieldset(state);
    case ItemTypes.INPUT:
      return createInput(state);
    case ItemTypes.TEXTAREA:
      return createTextarea(state);
    case ItemTypes.CHECKBOX:
      return createTextarea(state);
    case ItemTypes.RADIO:
      return createRadio(state);
    default:
      return state;
  }
}