export const ItemTypes = {
  FORM: "form",
  STEP: "step",
  BLOCK: "block",
  FIELDSET: "fieldset",
  COLUMN: "column",
  INPUT: "input",
  TEXTAREA: "textarea",
  CHECKBOX: "checkbox",
  RADIO: "radio"
};

export type FormItemType = {
  id: string;
  node: string;
  name?: string;
  type?: string;
  parentId?: string | null;
  title?: string;
  subtitle?: string;
  description?: string;
  label?: string;
  value?: string;
  placeholder: string;
};

export type AppConfigType = {
  activeItem: string;
  formItems: FormItemType[];
}
