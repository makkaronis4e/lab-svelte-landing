import App from './app/App.svelte';
import "./app/style/global/global.scss";

const app = new App({
	target: document.body,
});

window.app = app;

export default app;