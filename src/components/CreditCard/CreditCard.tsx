import './CreditCard.css';

type CreditCardProps = {
	cardNumber: string;
	name: string;
	expirationMonth: string;
	expirationYear: string;
	cvv: string;
	showBack: boolean;
};

export function CreditCard({ cardNumber, name, expirationMonth, expirationYear, cvv, showBack }: CreditCardProps) {
	//inferir la imagen de la credit card del card number
	const getCardImage = () => {
		const firstNumber = cardNumber.charAt(0);
		let image = '';
		if (firstNumber === '0' || firstNumber === '1') image = 'american';
		if (firstNumber === '2' || firstNumber === '3') image = 'discover';
		if (firstNumber === '4' || firstNumber === '5' || firstNumber === '6') image = 'mastercard';
		if (firstNumber === '7' || firstNumber === '8' || firstNumber === '9') image = 'visa';

		return showBack ? image + '__back' : image;
	};
	return (
		<div className='creditcard'>
			<div className={`creditcard__data number  ${showBack ? 'no__visible' : ''}`}>{<span>{cardNumber}</span>}</div>
			<div className={`creditcard__data name  ${showBack ? 'no__visible' : ''}`}>{<span>{name}</span>}</div>
			<div className={`creditcard__data date ${showBack ? 'no__visible' : ''}`}>
				{
					<span>
						{expirationMonth}
						{expirationMonth != '' ? '/' : ''}
						{expirationYear}
					</span>
				}
			</div>
			<div className={`creditcard__cvv cvv ${!showBack ? 'no__visible' : ''}`}>{<span>{cvv}</span>}</div>
			<span className={`creditcard__img ${getCardImage()}`} />
		</div>
	);
}
