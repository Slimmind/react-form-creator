type InputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
};

export const Input = ({
  id,
  name,
  type,
  label,
  value,
  placeholder,
}: InputProps) => {
  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
