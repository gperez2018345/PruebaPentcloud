import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Gerry',
		lastName: 'Pérez'
	}
});

export default app;