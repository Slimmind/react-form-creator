export const ItemTypes = {
  FORM: "form",
  STEP: "step",
  BLOCK: "block",
  FIELDSET: "fieldset",
  COLUMN: "column",
  INPUT: "input",
  TEXTAREA: "textarea",
  CHECKBOX: "checkbox",
  RADIO: "radio",
};

export type AppConfigType = {
  activeItem: string;
  formItems: FormItemType[];
};

export type FormItemType =
  | ({ node: typeof ItemTypes.FORM } & FormType)
  | ({ node: typeof ItemTypes.INPUT } & InputType)
  | ({ node: typeof ItemTypes.TEXTAREA } & TextareaType);

export type FormType = {
  id: string;
  node: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export type InputType = {
	id: string;
	name: string;
	type: string;
	label?: string;
	value: string;
	placeholder?: string;
  form: string;
  required: boolean;
  disabled: boolean;
};

export type TextareaType = {
  name: string;
  id: string;
  label?: string;
  value: string;
  placeholder?: string;
  cols?: string;
  rows?: string;
  form: string;
  required: boolean;
  disabled: boolean;
}
