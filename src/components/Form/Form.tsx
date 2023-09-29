import './Form.css';

type FormProps = {
	handleInputChange: (
		ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
	) => void;
};

export function Form({ handleInputChange }: FormProps) {
	return (
		<form className='card__form'>
			<div className='card__form_row'>
				<div className='card__form_fieldset'>
					<label htmlFor='card_number'>Card Number</label>
					<input
						type='text'
						placeholder='0000 0000 0000 0000'
						data-slot='0'
						data-accept='\d'
						name='card_number'
						id='card_number'
						onChange={handleInputChange}
					/>
				</div>
				<div className='card__form_fieldset'>
					<label htmlFor='card_name'>Card Name</label>
					<input
						type='text'
						name='card_name'
						id='card_name'
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<div className='card__form_row_double'>
				<label>Expiration Date</label>
				<label htmlFor='cvv'>Cvv</label>
				<div className='card__form_fieldset__inputs'>
					<select name='expiration_year' onChange={handleInputChange}>
						{Array.from({ length: 15 }, (_v: unknown, i: number) => {
							return (
								<option key={i} value={2023 + 1}>
									{Number(2023 + i)}
								</option>
							);
						})}
					</select>
					<select name='expiration_month'>
						{Array.from({ length: 12 }, (_v: unknown, i: number) => {
							return (
								<option key={i} value={Number(i + 1)}>
									{(i + 1).toString().length === 1
										? `0${Number(1 + i)}`
										: Number(1 + i)}
								</option>
							);
						})}
					</select>
				</div>

				<div className='card__form_fieldset'>
					<input
						type='text'
						name='cvv'
						id='cvv'
						onChange={handleInputChange}
						maxLength={3}
					/>
				</div>
			</div>
			<div className='card__form_button'>
				<button>Update</button>
			</div>
		</form>
	);
}
