// Sepete Eklenecek olan ürünlerin listesini görüntüleyeceğiz. Her bir ürün yanında sepete ekle butonu olsun.

import React, { useContext } from 'react';
import { UseFetch } from '../../memoisation/customHook/usefetch.hook';
import { httpClientModule } from '../../network/httpclient';
import { Product } from '../../models/product.model';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addToCart } from '../features/cart.slice';

function ShopReduxDemo() {
	const { data, isFetched } = UseFetch<Product[]>(
		httpClientModule.northwndApi,
		'/Products'
	);
	// useContext context bağlkanmamızı sağlayan bir hook

	const dispatch = useDispatch<AppDispatch>();

	const onAddItemToCart = (item: Product) => {
		dispatch(
			addToCart({
				quantity: 1,
				name: item.ProductName,
				listPrice: item.UnitPrice,
				productId: item.ProductID,
			})
		);
	};

	if (isFetched) {
		return (
			<ul>
				{data?.map((item) => {
					return (
						<div key={item.ProductID}>
							<hr></hr>
							<li>
								Ürün: {item.ProductName} / Fiyat: {item.UnitPrice} / Stok:{' '}
								{item.UnitsInStock}
								<br></br>
								<button onClick={() => onAddItemToCart(item)}>
									Sepete EKle
								</button>
							</li>
							<hr></hr>
						</div>
					);
				})}
			</ul>
		);
	}
	return <></>;
}

export default ShopReduxDemo;
