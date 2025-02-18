import { lazy } from "react";
import { AppConfigType, FormItemType, ItemTypes } from "../../utils/constants";
import Form from "../form";
import "./form-renderer.styles.css";

type FormRendererProps = {
  config: AppConfigType;
};

const Input = lazy(() => import("../input"));
const Textarea = lazy(() => import("../textarea"));

export const FormRenderer = ({ config }: FormRendererProps) => {
  const [formConfig, ...nodesConfig] = config.formItems;

  const renderNode = (node: FormItemType) => {
    const { id, name, type, label, value, placeholder, required, disabled, form, node: nodeType } = node;

    switch (nodeType) {
      case ItemTypes.INPUT:
        return <Input key={id} id={id} name={name} type={type} label={label} value={value} placeholder={placeholder} required={required} form={form} disabled={disabled} />;
      case ItemTypes.TEXTAREA:
        return <Textarea key={id} id={id} name={name} label={label} value={value} placeholder={placeholder} required={required} disabled={disabled} form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-renderer">
      <div className="form-renderer__elements-area">
        <header className="form-renderer__elements-area-header">
          <button>View</button>
          <button>Edit</button>
        </header>
        <div className="form-renderer__elements-area-body">
          <Form id={formConfig.id}>{nodesConfig.map(renderNode)}</Form>
        </div>
      </div>
      <div className="form-renderer__config-area">
        <pre>
          <code>{JSON.stringify(config, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
