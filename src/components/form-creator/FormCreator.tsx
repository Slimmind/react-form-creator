import { lazy, useState } from 'react';
import { nanoid } from 'nanoid';
import { AppConfigType, ItemTypes } from '../../utils/constants';
import { createItem } from '../../utils/create-item';
import './form-creator.styles.css';



const FormConfigConstructor = lazy(() => import('../form-config-constructor'));
const FormRenderer = lazy(() => import('../form-renderer'));

const initialId = nanoid();

const initialAppConfig: AppConfigType = {
	activeItem: initialId,
	formItems: [
		{
			node: ItemTypes.FORM,
			id: initialId,
			title: '',
			subtitle: '',
			description: '',
		},
		{
			node: 'input',
			name: 'form-title',
			id: 'form-title',
			type: 'text',
			label: 'Form Title',
			value: '',
			placeholder: 'Enter Form Title...',
      required: false,
      disabled: false,
      form: initialId
		},
		{
			node: 'input',
			name: 'form-subtitle',
			id: 'form-subtitle',
			type: 'text',
			label: 'Form Subtitle',
			value: '',
			placeholder: 'Enter Form Subtitle...',
      required: false,
      disabled: false,
      form: initialId
		},
		{
			node: 'textarea',
			name: 'form-description',
			id: 'form-description',
			label: 'Form Description',
			value: '',
			placeholder: 'Enter Form Description...',
      required: false,
      disabled: false,
      form: initialId
		},
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
		<div className='form-creator'>
			<FormConfigConstructor onReset={handleReset} onAddItem={handleAddItem} />
			<FormRenderer config={appConfig} />
		</div>
	);
};
