<script>
	import Header from "../header/header.svelte"
	import News from "../../news/news.svelte"
</script>


<style lang="scss">
</style>
<div class="page__container">
	<div class="page_background"></div>
	<Header></Header>
	<main class="page__main-container">
		<div class="page__main-container__left-column"><News></News></div>
		<div class="page__main-container__right-column"></div>
	</main>
</div>