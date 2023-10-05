import { useState, useReducer } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { CreditCard } from './components/CreditCard/CreditCard';
import { Form } from './components/Form/Form';
//reducer
import { formReducer, initialState } from './reducers/formReducer';

function App() {
	const [showBack, setShowBack] = useState(false);

	const [state, dispatch] = useReducer(formReducer, initialState);

	const handleInputChange = (
		ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
	) => {
		dispatch({ type: ev.target.name, payload: ev.target.value });
	};

	const handleInputFocus = (
		ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
	) => {
		if (ev.target.name === 'cvv') {
			setShowBack(true);
		} else {
			setShowBack(false);
		}
	};

	return (
		<>
			<Card>
				<CreditCard
					cardNumber={state.card_number}
					name={state.card_name}
					expirationMonth={state.expiration_month}
					expirationYear={state.expiration_year}
					cvv={state.cvv}
					showBack={showBack}
				/>
				<Form
					handleInputChange={handleInputChange}
					handleInputFocus={handleInputFocus}
					creditCardData={state}
				/>
			</Card>
		</>
	);
}

export default App;
