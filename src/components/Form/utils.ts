export function formatNumber2Digits(numberito: number): string {
	const strNumber = numberito.toString();
	return strNumber.toString().length === 1 ? `0${strNumber}` : strNumber;
}
