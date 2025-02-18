import { ItemTypes } from "../../utils/constants";
import "./form-config-constructor.styles.css";

type FormConfigConstructorProps = {
  onReset: () => void;
  onAddItem: (type: string) => void;
};

export const FormConfigConstructor = ({
  onReset,
  onAddItem,
}: FormConfigConstructorProps) => {
  return (
    <div className="form-config-constructor">
      <aside className="form-config-constructor__sidebar">
        {Object.values(ItemTypes)
          .filter((item) => item !== ItemTypes.FORM)
          .map((itemType) => (
            <button
              key={itemType}
              onClick={() => onAddItem(itemType)}
              className="form-config-constructor__button"
            >
              {itemType.toUpperCase()}
            </button>
          ))}

        <button
          className="form-config-constructor__button danger"
          onClick={onReset}
        >
          RESET
        </button>
      </aside>
    </div>
  );
};

