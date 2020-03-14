<script>
	import { stores } from '@sapper/app';
	import { Message, Dialog, Input, Button, Toast, Snackbar } from 'svelma';
	import { Hero } from '../components-svelte';
	import { Icons, Icon } from '@sveltejs/site-kit';
	import { fade } from 'svelte/transition'

	let names = [];
	let text = "";
	let id = 0;
	let open = false;
	
	function sayHi() {
		Dialog.alert({
			message: "Hi Dude"
		})
	}

	function newToast_TL(props) {
		Toast.create({
			message: names.length ? names[0].text : 'Toast',
			type: 'is-danger',
			duration: 6000,
			position: 'is-top-left'
		})
	}
	function newToast_TC(props) {
		Toast.create({
			message: names.length ? names[0].text : 'Toast',
			type: 'is-danger',
			duration: 6000,
			position: 'is-top'
		})
	}
	function newToast_TR(props) {
		Toast.create({
			message: names.length ? names[0].text : 'Toast',
			type: 'is-danger',
			duration: 6000,
			position: 'is-top-right'
		})
	}
	function newToast_BR(props) {
		Toast.create({
			message: names.length ? names[0].text : 'Toast',
			type: 'is-danger',
			duration: 6000,
			position: 'is-bottom-right'
		})
	}
	function newToast_BC(props) {
		Toast.create({
			message: names.length ? names[0].text : 'Toast',
			type: 'is-danger',
			duration: 6000,
			position: 'is-bottom'
		})
	}
	function newToast_BL(props) {
		Toast.create({
			message: names.length ? names[0].text : 'Toast',
			type: 'is-danger',
			duration: 6000,
			position: 'is-bottom-left'
		})
	}
	function newSnackbar_TL(props) {
		Snackbar.create({
			message: names.length ? names[0].text : 'Snackbar',
			type: 'is-danger',
			position: 'is-top-left'
		})
	}
	function newSnackbar_TC(props) {
		Snackbar.create({
			message: names.length ? names[0].text : 'Snackbar',
			type: 'is-danger',
			position: 'is-top'
		})
	}
	function newSnackbar_TR(props) {
		Snackbar.create({
			message: names.length ? names[0].text : 'Snackbar',
			type: 'is-danger',
			duration: 6000,
			position: 'is-top-right'
		})
	}
	function newSnackbar_BR(props) {
		Snackbar.create({
			message: names.length ? names[0].text : 'Snackbar',
			type: 'is-danger',
			position: 'is-bottom-right'
		})
	}
	function newSnackbar_BC(props) {
		Snackbar.create({
			message: names.length ? names[0].text : 'Snackbar',
			type: 'is-danger',
			duration: 2000,
			position: 'is-bottom'
		})
	}
	function newSnackbar_BL(props) {
		Snackbar.create({
			message: names.length ? names[0].text : 'Snackbar',
			type: 'is-danger',
			duration: 1000,
			position: 'is-bottom-left'
		})
	}

	function addName() {
		if (text) {
			names = [...names, Object.assign({}, {id: ++id, text: text})]
			text = "";
		}
	}
	function removeName(e) {
		let id = e.target.dataset.id
		names = names.filter( (a) => {
			if(id != a.id) return a;
		} )
	}
	function confirm() {
		Dialog.confirm({
			message: 'Do you really wont to clear all?',
			title: 'Clear all?',
			type: 'is-danger',
			icon: 'times-circle'
		}).then(thenHandler)
	}
	const thenHandler = (result) => {
		if(result) names = [];
		Toast.create( {
			message: `Names ${result ? 'deleted' : 'not deleted'}`,
			type: 'is-info',
			position: 'is-top',
			duration: 2000
		} );
	}

</script>

<style lang="scss">
	h1 {
		color: purple;
	}

</style>

<section class="section">
	<div class="tile is-anchestor">
		<div class="tile is-parent is-vertical">
			<div class="tile">
				<div class="tile is-parent is-vertical">
					<div class="tile is-child notification is-info">
						<Button on:click={ newToast_TL }>
							<Icon icon="bold">TL</Icon>
						</Button>
						<Button on:click={newToast_TC}>
							<Icon icon="bold">TC</Icon>
						</Button>
						<Button on:click={newToast_TR}>
							<Icon icon="bold">TR</Icon>
						</Button>
						<Button on:click={newToast_BR}>
							<Icon icon="bold">BR</Icon>
						</Button>
						<Button on:click={newToast_BC}>
							<Icon icon="bold">BC</Icon>
						</Button>
						<Button on:click={newToast_BL}>
							<Icon icon="bold">BL</Icon>
						</Button>
					</div>
					<div class="tile is-child notification is-danger">
						<Button on:click={ newSnackbar_TL }>
							<Icon icon="bold">TL</Icon>
						</Button>
						<Button on:click={newSnackbar_TC}>
							<Icon icon="bold">TC</Icon>
						</Button>
						<Button on:click={newSnackbar_TR}>
							<Icon icon="bold">TR</Icon>
						</Button>
						<Button on:click={newSnackbar_BR}>
							<Icon icon="bold">BR</Icon>
						</Button>
						<Button on:click={newSnackbar_BC}>
							<Icon icon="bold">BC</Icon>
						</Button>
						<Button on:click={newSnackbar_BL}>
							<Icon icon="bold">BL</Icon>
						</Button>
					</div>
				</div>
				<div class="tile is-parent is-10">
					<div class="tile is-vertical">
						<div class="tile is-child notification">
							<p class="title">Type your name</p>
							<article class="content">
								<Input type="text"  bind:value={text} placeholder="Another Name" />
							</article>
							<article class="content">
								<Input type="text"  bind:value={text} placeholder="Name" />
							</article>
						</div>
						<div class="tile is-child notification">
							<p class="title">Actions</p>
							<Button on:click={addName}>Add name</Button>
							<Button on:click={confirm}>Clear</Button>
							<Button on:click={sayHi}>Say Hi</Button>
						</div>
					</div>
				</div>
			</div>
			<div class="tile is-parent is-vertical ">
				<article class="tile is-child notification is-success">
					<p class="title">Result</p>
					<p class="subtitle">List of Names</p>
					<ul>
						<code>
							{#each names as name}
								<li data-id={name.id} on:click={removeName}>{name.text}</li>
							{:else}
								<li> No names</li>
							{/each}
						</code>
					</ul>
				</article>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="tile is-child notification">
		<Message active={!open} title="Hi" on:close={active => open = active}>
			Some Message
		</Message>
	</div>
</section>

