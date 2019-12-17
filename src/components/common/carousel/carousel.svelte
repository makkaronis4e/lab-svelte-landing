<script>
  import { onDestroy } from 'svelte';

  export let items = [...Array(10).keys()];
  export let scrollBy = 1;

  const paginationFactor = 1120;
  const totalPaginationPixels = scrollBy * paginationFactor;

  $: offset = 0;
  $: atStart = offset === 0;
  $: atEnd = offset <= paginationFactor * (items.length - scrollBy) * -1;

    const move = direction => {
    if (direction > 0 && !atEnd) {
      offset -= totalPaginationPixels;
	}  else if (direction > 0 && atEnd) {
		offset = 0;
		atStart = true;
	} else if (direction < 0 && !atStart) {
      offset += totalPaginationPixels;
    }
  };

  const interval = setInterval(() => move(1), 5000);

	onDestroy(() => clearInterval(interval));


</script>

<main>
  <div class="items" style="transform: translateX({offset}px);">
    {#each items as item, i}
	<div class="item-container">
	    <div class="item" style="background-color: hsla({i * 25}deg, 75%, 55%);">{item}</div>
	</div>
    {/each}
  </div>
</main>

<style>
  main {
    width: 1120px;
    overflow: hidden;
  }

  .items {
    display: flex;
    transition: transform 0.4s ease-in-out;
    transform: translateX(0px);
  }

  .item-container {
	  min-width: 1120px;
  }

  .item {
	width: 600px;
    height: 286px;
    margin: 0 auto;
    background-color: #ef4322;
    border-radius: 0.7rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 10rem;
    user-select: none;
    overflow: hidden;
  }
</style>