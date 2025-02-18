import { InputType } from '../../utils/constants';
import './input.styles.css';

export const Input = ({
	id,
	name,
	type,
	label,
	value,
	placeholder,
}: InputType) => {
	return (
		<div className='input-wrap'>
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
