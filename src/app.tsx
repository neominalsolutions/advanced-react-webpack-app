import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function App() {
	return (
		<>
			<header>
				<h1>React Web Pack App</h1>
				<nav>
					<Link to="/usestate">Use State Demo</Link>{' '}
					<Link to="/useeffect">Use Effect Demo</Link>{' '}
					<Link to="/useref">Use Ref Demo</Link>{' '}
					<Link to="/usememo">Use Memo Demo</Link>{' '}
					<Link to="/reactmemo">React Memo Demo</Link>{' '}
					<Link to="/usecallback">React Callback Demo</Link>{' '}
					<Link to="/useimperative">Use Imperative Demo</Link>{' '}
					<Link to="/usenonimperative">Use Non Imperative Demo</Link>{' '}
					<Link to="/usereducer">Use Reducer Demo</Link>{' '}
					<Link to="/customHook">Custom Hook</Link>{' '}
					<Link to="/customHookLoadData">Custom Hook Load Data</Link>{' '}
					<Link to="/axiosDemo">Axios Demo</Link>{' '}
					<Link to="/debouncing">Debouncing Demo</Link>{' '}
					<Link to="/shops">Ürünler- ContextAPI</Link>{' '}
					<Link to="/cartSummary">Sepetim -ContextAPI</Link>{' '}
				</nav>
			</header>
			<main style={{ padding: '1rem' }}>
				{/* yukarıdaki route isteklerine göre ilgili componentlerde burada Outlet işaretlemesi olduğu bölgeye girer */}
				<Outlet />
			</main>
			<footer
				style={{
					position: 'absolute',
					bottom: '0',
					backgroundColor: 'GrayText',
					color: 'white',
				}}
			>
				Alt Bilgi
			</footer>
		</>
	);
}
