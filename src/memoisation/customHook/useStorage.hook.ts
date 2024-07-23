import { useEffect, useState } from 'react';

export function UseStorage(key: string) {
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		const value =
			(localStorage.getItem(key) as string) ||
			(sessionStorage.getItem(key) as string);

		setValue(value || 'Token Bilgisi bulunamadı !');
	}, []);

	return { value };
}

// return <>{localstorage.getItem('key')}</>
