import './CreditCard.css';

type CreditCardProps = {
	cardNumber: string;
	name: string;
	expirationMonth: string;
	expirationYear: string;
	cvv: string;
};
export function CreditCard({
	cardNumber,
	name,
	expirationMonth,
	expirationYear,
	cvv,
}: CreditCardProps) {
	//inferir la imagen de la credit card del card number
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
			<div className='creditcard__data cvv'>{<span>{cvv}</span>}</div>
			<img src='/images/cc__mastercard--front.png' alt='credit card' />
		</div>
	);
}
