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
	const [cvv, setCvv] = useState('');
	const [showBack, setShowBack] = useState(false);

	const handleNumberChange = (value: string) => {
		if (isNaN(Number(value))) return;
		if (cardNumber.length >= 19) return;

		const result = value.match(/.{1,4}/g) || [];
		console.log(result);

		if (result.length > 0) {
			setCardNumber(result.join(' '));
		} else {
			setCardNumber('');
		}
	};

	const handleNameChange = (value: string) => {
		setName(value);
	};

	const handleYearChange = (value: string) => {
		setExpirationYear(value);
	};

	const handleMonthChange = (value: string) => {
		setExpirationMonth(value);
	};

	const handleCvvChange = (value: string) => {
		if (isNaN(Number(value))) return;
		setCvv(value);
	};

	const handleInputChange = (
		ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
	) => {
		type ActionsT = {
			[key: string]: (value: string) => void;
		};
		const actions: ActionsT = {
			card_number: handleNumberChange,
			card_name: handleNameChange,
			expiration_month: handleMonthChange,
			expiration_year: handleYearChange,
			cvv: handleCvvChange,
		};

		actions[ev.target.name](ev.target.value);
	};

	return (
		<>
			<Card>
				<CreditCard
					cardNumber={cardNumber}
					name={name}
					expirationMonth={expirationMonth}
					expirationYear={expirationYear}
					cvv={cvv}
				/>
				<Form handleInputChange={handleInputChange} />
			</Card>
		</>
	);
}

export default App;
