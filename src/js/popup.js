import App from '../svelte/Popup.svelte';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

window.app = app;

export default app;