import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItem } from '../../contexts/cart.context';

const initialState: Cart = {
	items: [],
	totalCost: 0,
};

const calcTotal = (state: Cart): void => {
	let total = 0;

	for (const item of state.items) {
		total += item.listPrice * item.quantity;
	}

	state.totalCost = total;
};

// slice ile hem cation hemde reducer yönetimi yapıyoruz.

const cartSlice = createSlice({
	name: 'CART',
	initialState: initialState,
	reducers: {
		addToCart: (state: Cart, action: PayloadAction<CartItem>) => {
			const existItem = state.items.find(
				(x) => x.productId == action.payload.productId
			);

			if (existItem) {
				existItem.quantity += 1;
			} else {
				state.items = [action.payload, ...state.items];
			}

			calcTotal(state);
			// setState yapmaya gerek kalmıyor
		},
	},
});

// componentlerden ilgili actionlar dispatch etmek için export ettik.
export const { addToCart } = cartSlice.actions;
// reducer store consume edip uygulamanın hangi state ile çalışacağını söyleyeceğiz.
export const cartReducer = cartSlice.reducer;
