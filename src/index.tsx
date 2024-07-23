import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UseStateDemo from './memoisation/useState/usestate.demo';
import UseEffectDemo from './memoisation/useEffect/useeffect.demo';
import UseRefDemo from './memoisation/useRef/useref.demo';
import UseMemoDemo from './memoisation/useMemo/usememo.demo';
import ReactMemoDemo from './memoisation/reactMemo/parent.component.demo';
import UseCallBackDemo from './memoisation/useCallback/usecallback.demo';
import UseImperativeHandlerDemo from './memoisation/useImperativeHandler/useimpretivehandler.demo';
import UseReducerDemo from './memoisation/useReducer/usereducer.demo';
import { App } from './app';
import UseNoImperativeHandlerDemo from './memoisation/useImperativeHandler/noimperativehandler.demo';
import CustomHookDemo from './memoisation/customHook/custom.hook.demo';
import AxiosDemo from './memoisation/axiosDemo/axios.demo';
import CustomHookLoadDataDemo from './memoisation/customHook/custom.hook.load.data.demo';
import DebouncingDemo from './memoisation/debouncing/debouncing.demo';

const router = createBrowserRouter([
	{
		path: '',
		Component: App, // Ana Layout
		children: [
			{
				path: '/usestate',
				Component: UseStateDemo,
			},
			{
				path: '/useeffect',
				Component: UseEffectDemo,
			},
			{
				path: '/useref',
				Component: UseRefDemo,
			},
			{
				path: '/usememo',
				Component: UseMemoDemo,
			},
			{
				path: '/reactmemo',
				Component: ReactMemoDemo,
			},
			{
				path: '/usecallback',
				Component: UseCallBackDemo,
			},
			{
				path: '/useimperative',
				Component: UseImperativeHandlerDemo,
			},
			{
				path: '/usenonimperative',
				Component: UseNoImperativeHandlerDemo,
			},
			{
				path: '/usereducer',
				Component: UseReducerDemo,
			},
			{
				path: '/CustomHook',
				Component: CustomHookDemo,
			},
			{
				path: '/CustomHookLoadData',
				Component: CustomHookLoadDataDemo,
			},
			{
				path: '/axiosDemo',
				Component: AxiosDemo,
			},
			{
				path: '/debouncing',
				Component: DebouncingDemo,
			},
		],
	},
]);

const root = ReactDom.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
		<RouterProvider router={router} />
	</>
);
