<script lang="ts">
	import NewModal from '$lib/components/NewModal.svelte';
	import RoutineList from '$lib/components/RoutineList.svelte';
	import { create_modal } from '$lib/state/modal.svelte';
	import { routines } from '$lib/state/routines.svelte';

	const modal = create_modal();
</script>

<div>
	<h1>Snack Timer</h1>
	<NewModal data={modal} />
	<button id="show_new" on:click={() => modal.show()}>New snack routine</button>
	<RoutineList />
</div>

<style>
	div {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Monaspace Argon', sans-serif;
		background: var(--bg) no-repeat;
		min-height: 100vh;
		display: grid;
		grid-template-areas:
			'header header header header'
			'. btn btn .'
			'footer footer footer footer';
	}

	h1 {
		color: var(--text-main);
		font-size: var(--size-8);
		grid-area: header;
		text-align: center;
		padding-block-start: var(--size-2);
	}
	#show_new {
		background-color: var(--highlight);
		border: solid var(--highlight);
		border-radius: var(--radius-round);
		box-shadow: var(--shadow-3);
		width: var(--size-12);
		height: var(--size-12);
		justify-self: center;
		cursor: pointer;
		grid-area: btn;
		transition: all 0.2s var(--ease-2);

		&:hover {
			background-color: var(--red-3);
		}
	}
</style>
