<script context="module">
	import Card from "../../components/Card.svelte";
	import Message from "../../components/Message.svelte";
	import posts from './_posts.js';

	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}

</script>

<script>
	export let post;

	let nextSlug = '', prevSlug ='', keys;

	$:  if (0 !== post.id) {
		keys = Object.keys(posts);
		prevSlug = keys[post.id-1];
	}
	$: if ( (keys = Object.keys(posts)) && keys.length-1 !== post.id) {
		let id = post.id+1;
		nextSlug = keys[id];
	}

</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	h1 {
		font-size: 2em;
		font-weight: 700;
		margin: 30px;
	}
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
	.content {
		height: 300px;
		overflow: auto;
	}
	.button {
		margin: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.button-group {
		width: 100%;
		margin-left: 0;
	}
	:global(.card) {
		--card-mw: 70%;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<Card title="{post.title}">
	<div class='content'>
		{@html post.html}
		{#if post.message}
			<Message message={post.message} messageHeader={post.messageHeader}/>
		{/if}
	</div>
	<div slot="footer" class="is-mobile button-group is-block is-clearfix">
		<a rel='prefetch' class="button is-pulled-left" href="/blog/{prevSlug}" disabled={!post.prev}>
			Previous
		</a>
		<a rel='prefetch' class="button is-pulled-right" href="/blog/{nextSlug}" disabled={!post.next}>
			Next
		</a>
	</div>
</Card>
