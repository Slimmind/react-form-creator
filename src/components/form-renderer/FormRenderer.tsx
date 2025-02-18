import { AppConfigType } from "../../utils/constants";
import "./form-renderer.styles.css";

type FormRendererProps = {
  config: AppConfigType;
};

export const FormRenderer = ({ config }: FormRendererProps) => {
  const nodes = config.formItems.map((item) => item.node);
  console.log('NODES: ', nodes);
  return (
    <div className="form-renderer">
      <div className="form-renderer__elements-area">
        <header className="form-renderer__elements-area-header">
          <button>View</button>
          <button>Edit</button>
        </header>
        <div className="form-renderer__elements-area-body">Body</div>
      </div>
      <div className="form-renderer__config-area">
        <pre>
          <code>{JSON.stringify(config, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
