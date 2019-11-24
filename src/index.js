import App from './app/App.svelte';

console.log(document);

var app = new App({
	target: document.querySelector("app"),
});

export default app;