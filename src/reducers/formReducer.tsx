export type CardFormT = {
	card_number: string;
	card_name: string;
	expiration_month: string;
	expiration_year: string;
	cvv: string;
};

export const initialState: CardFormT = {
	card_number: '',
	card_name: '',
	expiration_month: '',
	expiration_year: '',
	cvv: ''
};

type ActionsT = {
	[key: string]: (state: CardFormT, value: string) => CardFormT;
};
const actions: ActionsT = {
	card_number: function (cardState: CardFormT, value: string) {
		const numericValue = value.split(' ').join('');
		if (isNaN(Number(numericValue))) return cardState;

		const result = numericValue.match(/.{1,4}/g) || [];

		if (result.length > 0) {
			return {
				...cardState,
				card_number: result.join(' ')
			};
		} else {
			return cardState;
		}
	},

	card_name: function (cardState: CardFormT, value: string) {
		if (cardState.card_name.length >= 20) return cardState;
		return { ...cardState, card_name: value };
	},

	expiration_month: function (cardState: CardFormT, value: string) {
		return { ...cardState, expiration_month: value };
	},
	expiration_year: function (cardState: CardFormT, value: string) {
		return { ...cardState, expiration_year: value };
	},

	cvv: function (cardState: CardFormT, value: string) {
		if (isNaN(Number(value))) return cardState;
		return { ...cardState, cvv: value };
	}
};

type Actions = { type: string; payload: string };

export function formReducer(state: CardFormT, action: Actions): CardFormT {
	return actions[action.type](state, action.payload);
}
