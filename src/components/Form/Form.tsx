import { CardFormT } from '../../reducers/formReducer';
import { formatNumber2Digits } from './utils';
import './Form.css';

type FormProps = {
	handleInputChange: (ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
	handleInputFocus: (ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
	creditCardData: CardFormT;
};

export function Form({ handleInputChange, handleInputFocus, creditCardData }: FormProps) {
	const { card_number, card_name, expiration_month, expiration_year, cvv } = creditCardData;
	return (
		<form className='card__form'>
			<div className='card__form_row'>
				<div className='card__form_fieldset'>
					<label htmlFor='card_number'>Card Number</label>
					<input
						type='text'
						placeholder='0000 0000 0000 0000'
						name='card_number'
						id='card_number'
						value={card_number}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
						maxLength={19}
					/>
				</div>
				<div className='card__form_fieldset'>
					<label htmlFor='card_name'>Card Name</label>
					<input
						type='text'
						name='card_name'
						id='card_name'
						value={card_name}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
						maxLength={20}
					/>
				</div>
			</div>
			<div className='card__form_row_double'>
				<label>Expiration Date</label>
				<label htmlFor='cvv'>Cvv</label>
				<div className='card__form_fieldset__inputs'>
					<select value={expiration_year} name='expiration_year' onChange={handleInputChange} onFocus={handleInputFocus}>
						{Array.from({ length: 15 }, (_v: unknown, i: number) => {
							return (
								<option key={i} value={i > 0 ? 2023 + i : ''}>
									{i > 0 ? Number(2023 + i) : ''}
								</option>
							);
						})}
					</select>
					<select value={expiration_month} name='expiration_month' onChange={handleInputChange} onFocus={handleInputFocus}>
						{Array.from({ length: 12 }, (_v: unknown, i: number) => {
							return (
								<option key={i} value={i > 0 ? formatNumber2Digits(i) : ''}>
									{i > 0 ? formatNumber2Digits(i) : ''}
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
						value={cvv}
						onChange={handleInputChange}
						maxLength={3}
						onFocus={handleInputFocus}
					/>
				</div>
			</div>
			<div className='card__form_button'>
				<button>Update</button>
			</div>
		</form>
	);
}
