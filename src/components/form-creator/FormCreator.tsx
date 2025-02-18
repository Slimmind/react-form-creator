import { lazy, useState } from "react";
import { nanoid } from "nanoid";
import { AppConfigType, ItemTypes } from "../../utils/constants";
import { createItem } from "../../utils/create-item";
import "./form-creator.styles.css";

const FormConfigConstructor = lazy(() => import("../form-config-constructor"));
const FormRenderer = lazy(() => import("../form-renderer"));

const initialId = nanoid();

const initialAppConfig: AppConfigType = {
  activeItem: initialId,
  formItems: [
    {
      id: initialId,
      node: ItemTypes.FORM,
      title: "",
      subtitle: "",
      description: "",
    },
    {
      node: 'input',
      name: 'form-title',
      id: 'form-title',
      type: 'text',
      label: 'Form Title',
      value: '',
      placeholder: 'Enter Form Title...'
    }
  ],
};

export const FormCreator = () => {
  const [appConfig, setFormConfig] = useState<AppConfigType>(initialAppConfig);

  const handleReset = () => {
    setFormConfig(initialAppConfig);
  };

  const handleAddItem = (itemType: string): void => {
    const updatedConfig = createItem(itemType, appConfig);
    setFormConfig(updatedConfig);
  };

  return (
    <div className="form-creator">
      <FormConfigConstructor onReset={handleReset} onAddItem={handleAddItem} />
      <FormRenderer config={appConfig} />
    </div>
  );
};
