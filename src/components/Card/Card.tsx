import './Card.css';
type CardProps = { children: React.ReactNode };

export function Card({ children }: CardProps): JSX.Element {
	return <div className='card'>{children}</div>;
}
