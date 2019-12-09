<script>
	import ParallaxCanvas from './ParallaxCanvas.svelte';
	import ParallaxLogo from './ParallaxLogo.svelte';
	import { onMount } from 'svelte';

	export let title;
	export let tagline;
	export let logotype ="";
	export let outline = "";
	export let type;

	onMount(() => {
		
	})

</script>

<style>
	.hero {
		position: relative;
		padding: 10rem var(--side-nav);
		background: #061337;
		margin: var(--nav-h) auto 0;
		overflow: hidden;
	}

	h3 { color: #9dbaf9 }

	.hero h3, .logotype {
		position: relative;
	}

	.hero h3 {
		font-size: 2rem;
	}

	.logotype {
		height: 10rem;
	}

	@media (min-width: 640px) {
		.logotype {
			height: 13rem;
		}

		.hero {
			display: block;
		}
		
		.hero h3 {
			font-size: var(--h3);
		}
	}

	@media (min-width: 800px) {
		.hero {
			padding: 10rem;
		}
	}
</style>

<section class="hero tile is-ancestor">
	{#if type == 'canvas'}
		<ParallaxCanvas alt="{title} logo" src={outline} />
	{:else if type == 'logo'}
		<ParallaxLogo alt="{title} logo" src={outline} />
	{/if}

	<img alt="{title}" class="logotype" src="{logotype}">
	<div class="tile is-parent is-12">
		<h3 class="tile is-child box">{tagline}</h3>
	</div>
</section>