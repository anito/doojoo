<script context="module">
	export async function preload(page, session) {
		// return this.redirect(308, '');
	}
</script>

<script>
	import { Hero, Card } from '../components';
	import { List } from '../components';
	import { Blurb } from '@sveltejs/site-kit';
	import opac from "../stores/opacity";
	
	export let segment;
</script>

<svelte:head>
	<title>Doojoo Home</title>
</svelte:head>

<style>
	
</style>

<Hero
	title="Doojoo"
	tagline="Powered by Axel Nitzschner"
	outline="../images/logo-mask.svg"
	logotype="../images/doojoo-logotype.svg"
	type="canvas"
	opacity=".7"
/>

<Card title="Home" bgColor="#ffffffdd">
	<div>
		<input type="number" bind:value="{$opac}" step="10" max="100" min="0">
	</div>
</Card>

<Blurb>
	<a href="https://svelte.dev" slot="one">
		<h2>Powered by DOOJOO</h2>
		<p>DOOJOO is a webdesign agency — building slick websites</p>

		<span class="learn-more">learn more</span>
	</a>

	<a href="docs" slot="two">
		<h2>Best of Web Technologies</h2>
		<p>All the SEO and progressive enhancement of a server-rendered app, with the slick navigation of an SPA</p>

		<span class="learn-more">learn more</span>
	</a>

	<a href="docs" slot="three">
		<h2>Build fast</h2>
		<p>Hit the ground running with advanced routing, server-side rendering, code-splitting, offline support and more</p>

		<span class="learn-more">learn more</span>
	</a>
</Blurb>