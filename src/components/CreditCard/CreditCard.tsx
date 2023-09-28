import './CreditCard.css';

type CreditCardProps = {
	cardNumber: string;
	name: string;
	expirationMonth: string;
	expirationYear: string;
};
export function CreditCard({
	cardNumber,
	name,
	expirationMonth,
	expirationYear,
}: CreditCardProps) {
	return (
		<div className='creditcard'>
			<div className='creditcard__data number'>{<span>{cardNumber}</span>}</div>
			<div className='creditcard__data name'>{<span>{name}</span>}</div>
			<div className='creditcard__data date'>
				{
					<span>
						{expirationMonth}/{expirationYear}
					</span>
				}
			</div>
			<img src='/images/cc__mastercard--front.png' alt='credit card' />
		</div>
	);
}
