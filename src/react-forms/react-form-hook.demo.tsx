import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schema, FormState } from '../validations/shema.validation';

function ReactFormHookDemo() {
    
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
		setValue,
	} = useForm<FormState>({
		defaultValues: {
			firstname: 'ali',
			lastname: 'can',
			sallary: 0,
			workDays: 0,
			perDayCost: 0,
		},
		resolver: yupResolver(schema),
	});

	const onFormSubmit = (formValue: FormState) => {
		console.log('formValue', formValue);
	};

	const perDayCost = watch('perDayCost');
	const workDays = watch('workDays');
	console.log('perDayCost', perDayCost);
	console.log('workDays', workDays);

	useEffect(() => {
		// form State güncelleme
		setValue('sallary', perDayCost * workDays);
	}, [perDayCost, workDays]);

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<label>First Name </label>
				<input {...register('firstname')} />
				<span>{errors.firstname?.message}</span>
				<br></br>
				<label>Last Name </label>
				<input {...register('lastname')} />
				<span>{errors.lastname?.message}</span>
				<br></br>
				<label>Per Day Cost </label>
				<input type="number" {...register('perDayCost')} />
				<span>{errors.perDayCost?.message}</span>
				<br></br>
				<label>Work Days </label>
				<input type="number" {...register('workDays')} />
				<span>{errors.workDays?.message}</span>
				<br></br>
				<label>Sallary </label>
				<input disabled={true} {...register('sallary')} />
				<span>{errors.sallary?.message}</span>
				<br></br>
				<input type="submit" value="Kaydet" />
			</form>
		</>
	);
}

export default ReactFormHookDemo;
