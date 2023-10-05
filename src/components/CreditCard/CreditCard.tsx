import './CreditCard.css';

type CreditCardProps = {
	cardNumber: string;
	name: string;
	expirationMonth: string;
	expirationYear: string;
	cvv: string;
	showBack: boolean;
};
export function CreditCard({
	cardNumber,
	name,
	expirationMonth,
	expirationYear,
	cvv,
	showBack,
}: CreditCardProps) {
	//inferir la imagen de la credit card del card number
	const getCardImage = () => {
		const firstNumber = cardNumber.charAt(0);
		let image = 'cc_placeholder';
		if (firstNumber === '3') image = 'cc__american';
		if (firstNumber === '4') image = 'cc__visa';
		if (firstNumber === '5') image = 'cc__mastercard';
		if (firstNumber === '6') image = 'cc__discover';

		return image;
	};
	return (
		<div className='creditcard'>
			<div className={`creditcard__data number  ${showBack ? 'no__visible' : ''}`}>
				{<span>{cardNumber}</span>}
			</div>
			<div className={`creditcard__data name  ${showBack ? 'no__visible' : ''}`}>
				{<span>{name}</span>}
			</div>
			<div className={`creditcard__data date ${showBack ? 'no__visible' : ''}`}>
				{
					<span>
						{expirationMonth}/{expirationYear}
					</span>
				}
			</div>
			<div className={`creditcard__cvv cvv ${!showBack ? 'no__visible' : ''}`}>
				{<span>{cvv}</span>}
			</div>
			<img
				src={`/images/${getCardImage()}${showBack ? '--back.png' : '--front.png'}`}
				alt='credit card'
			/>
		</div>
	);
}
