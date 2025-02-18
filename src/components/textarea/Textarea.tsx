import { TextareaType } from '../../utils/constants';
import './textarea.styles.css';

export const Textarea = ({ name, id, label, value, placeholder, required, disabled }: TextareaType) => {
  return (
    <div className='textarea-wrap'>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea name={name} id={id} placeholder={placeholder} required={required} disabled={disabled}>{value}</textarea>
    </div>
  );
};
