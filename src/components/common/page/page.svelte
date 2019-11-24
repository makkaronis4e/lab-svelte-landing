<script>
	import Header from "../header/header.svelte"
	import Button from "../../shared/button/Button.svelte"
</script>


<style lang="scss">
	@import "./page.scss";
	.page {
		width: 1200px;
		margin: 0 auto;
	}

	.test {
		background: red;
		width: 404px;
		height: 30px;
	}
</style>
<div class="test"></div>
<div class="page">
	<Header></Header>
</div>