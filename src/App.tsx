import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { CreditCard } from './components/CreditCard/CreditCard';
import { Form } from './components/Form/Form';

function App() {
	const [cardNumber, setCardNumber] = useState('');
	const [name, setName] = useState('');
	const [expirationMonth, setExpirationMonth] = useState('');
	const [expirationYear, setExpirationYear] = useState('');

	const handleNumberChange = (value: string) => {
		console.log(value);
		setCardNumber(value);
	};

	const handleNameChange = (value: string) => {
		console.log(value);
		setName(value);
	};

	const handleYearChange = (value: string) => {
		console.log(value);
		setExpirationYear(value);
	};

	const handleMonthChange = (value: string) => {
		console.log(value);
		setExpirationMonth(value);
	};
	const handleInputChange = (
		ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
	) => {
		console.log(ev.target.value);
		const actions = {
			card_number: handleNumberChange(ev.target.value),
			card_name: handleNameChange,
			expiration_month: handleMonthChange,
			expiration_year: handleYearChange,
		};
		actions['card_number']();
	};

	return (
		<>
			<Card>
				<CreditCard
					cardNumber={cardNumber}
					name={name}
					expirationMonth={expirationMonth}
					expirationYear={expirationYear}
				/>
				<Form handleInputChange={handleInputChange} />
			</Card>
		</>
	);
}

export default App;
