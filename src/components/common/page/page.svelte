<script>
	import Header from "../header/header.svelte"
	import News from "../../news/news.svelte"
	import Cats from "../../cats/cats.svelte"
</script>


<style lang="scss">
</style>
<div class="page__container">
	<div class="page_background"></div>
	<Header></Header>
	<main class="page__main-container">
		<div class="page__main-container__left-column">
			<News></News>
		</div>
		<div class="page__main-container__right-column">
			<Cats></Cats>
		</div>
	</main>
</div>