<script>
	import { stores } from '@sapper/app';
	import { writable } from 'svelte/store';
	import { Icons, Icon, Nav, NavItem } from '../components-svelte';
	// import { Icons, Icon, Nav, NavItem } from '@sveltejs/site-kit';
	import menu from "../menu";
	import opac from "../stores/opacity";

	export let segment;
	export let op = 90;

	const { page } = stores();
	opac.set(op);

</script>

<style>
	:global(html) {
		--prime: rgb(21, 151, 148); /* TODO remove .theme-default from shared, so we don't need !important */
	}

	main {
		position: relative;
		margin: 0 auto;
		max-width: 80%;
		/* padding: var(--nav-h) var(--side-nav) 0 var(--side-nav); */
		padding: var(--nav-h) 0 0 0;
		overflow-x: hidden;
	}

	:global(.card) {
		--card-mw: 80%;
	}
	
</style>

<Icons/>

<Nav {segment} {page} {opac} logo="sapper-logo-horizontal.svg">

	{#each menu as item}
		<NavItem segment="{item[0]}" selected={segment === item[0]} >
			{item[1]}
		</NavItem>
	{/each}

	<NavItem segment="docs">Docs</NavItem>

	<NavItem external="https://svelte.dev">Svelte</NavItem>

	<NavItem external="https://svelte.dev/chat" title="Discord Chat">
		<Icon name="message-square"/>
	</NavItem>

	<NavItem external="https://github.com/sveltejs/sapper" title="GitHub Repo">
		<Icon name="github"/>
	</NavItem>
</Nav>

<main>
	<slot></slot>
</main>
