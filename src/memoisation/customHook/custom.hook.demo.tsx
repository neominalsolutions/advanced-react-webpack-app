import React, { useEffect } from 'react';
import { httpClientModule } from '../../network/httpclient';
import {
	jsonPlaceHolderClient,
	northwndClient,
} from '../../network/setup.interceptors';
import { getProducts } from '../../services/product.services';
import { UseStorage } from './useStorage.hook';

// hooklar function compopnentlerde function component bodysine yazılan özel functionlar.
// amaç function yüklenirken bir eylemi yerine getirmek,
// UseLocalStorage => localStorage bilgi okuyup ekrana yazdırabiliriz
// UseLoadData => belirli bir endpointeki verileri yakalama işlemlerini merkezi yönettiğim bir hook olur.
// bu hookları bir state bağlıda özelleştirebilir.
// state değişiminde tekrar tetiklenecek şekilde yazabilirim.

function CustomHookDemo() {

	// token yerine başka bir key gelirse bu durumda bu hook nasıl tekrardan güncellenip değeri üretecek bide buna bakacağız.

	// ilk çağırıda herhangi bir componentin içinde yani bodysinde çağırıyoruz.
	const { value } = UseStorage('token');

	return <>Token Value: {value}</>;
}

export default CustomHookDemo;
