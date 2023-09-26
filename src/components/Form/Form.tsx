import './Form.css';

export function Form() {
	return (
		<form className='card__form'>
			<div className='card__form_row'>
				<div className='card__form_fieldset'>
					<label htmlFor='card_number'>Card Number</label>
					<input type='number' pattern='' name='card_number' id='card_number' />
				</div>
				<div className='card__form_fieldset'>
					<label htmlFor='card_name'>Card Name</label>
					<input type='text' name='card_name' id='card_name' />
				</div>
			</div>
			<div className='card__form_row_double'>
				<div className='card__form_fieldset'>
					<label>Expiration Date</label>
					<div className='card__form_fieldset__inputs'>
						<select name='expiration_year'>
							<option value={2023}>2023</option>
						</select>
						<select name='expiration_month'>
							<option value='01'>01</option>
						</select>
					</div>
				</div>
				<div className='card__form_fieldset'>
					<label htmlFor='cvv'>Cvv</label>
					<input type='text' name='cvv' id='cvv' />
				</div>
			</div>
			<div>
				<button>Update</button>
			</div>
		</form>
	);
}
