<script lang="ts">
	import type { Modal } from '$lib/state/modal.svelte';
	import { save } from '$lib/utilities/save';

	let { data }: { data: Modal } = $props();

	$effect(() => {
		const dialog = document.getElementById('new_routine') as HTMLDialogElement | null;
		if (dialog) {
			if (data.is_open) {
				dialog.showModal();
			} else {
				dialog.close();
			}

			dialog.addEventListener('submit', handle_submit);
		}

		return () => {
			dialog?.removeEventListener('submit', handle_submit);
		};
	});

	function handle_submit(e: SubmitEvent) {
		if (e.target instanceof HTMLFormElement) {
			const inputs = Array.from(e.target.children)
				.filter((el) => el.tagName === 'DIV')
				.map((div) => div.children[1]);
			const values = inputs.map((input) => (input instanceof HTMLInputElement ? input.value : ''));
			const [name, work, snack] = values;
			save({
				name,
				work: parseInt(work),
				snack: parseInt(snack)
			});
			inputs.forEach((input) => ((input as HTMLInputElement).value = ''));
			data.close();
		}
	}
</script>

<dialog id="new_routine">
	<button id="modal-close" type="button" on:click={() => data.close()}>x</button>
	<h2>New snack routine</h2>
	<form method="dialog">
		<div>
			<label for="name">Name</label>
			<input type="text" name="name" required />
		</div>
		<div>
			<label for="work">Time to work (mins)</label>
			<input type="number" name="work" required />
		</div>
		<div>
			<label for="snack">Time to snack (mins)</label>
			<input type="number" name="snack" required />
		</div>
		<button type="submit">Create</button>
	</form>
</dialog>

<style>
	#new_routine {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--alt-bg);
		height: 50vh;
		width: 50vw;
		border: none;
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-6);
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: var(--sand-12);

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.3);
		}

		#modal-close {
			position: absolute;
			right: 0;
			top: 0;
			border: none;
			font-size: var(--size-3);
			background-color: var(--red-7);
			padding: var(--size-1) var(--size-2);
			border-radius: var(--radius-round);
			cursor: pointer;
			transform: translate(-5px, 5px);
			transition: all 0.2s var(--ease-2);

			&:hover {
				background-color: var(--red-5);
			}
		}

		h2 {
			padding-block: var(--size-3) var(--size-5);
			text-align: center;
		}

		form {
			flex: 1 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(5, 1fr);

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				label {
					padding-block: var(--size-2);
				}

				input {
					width: var(--size-10);
				}
			}

			div:first-child {
				grid-column: 1 / 4;
				grid-row: 1 / 2;

				input {
					width: var(--size-12);
					background-color: var(--purple-3);
					border: none;
					padding: var(--size-2);
				}
			}

			div:nth-child(2) {
				grid-column: 1 / 4;
				grid-row: 2 / 3;
			}

			div:nth-child(3) {
				grid-column: 1 / 4;
				grid-row: 3 / 4;
			}

			button {
				grid-column: 2 / 3;
				grid-row: 5 / 6;
				height: var(--size-8);
				width: var(--size-10);
				background-color: var(--teal-5);
				border: none;
				border-radius: var(--radius-3);
				cursor: pointer;
				box-shadow: var(--shadow-3);
				transition: all 0.2s var(--ease-in-2);
				margin: auto;

				&:hover {
					background-color: var(--teal-8);
				}
			}
		}
	}

	.display-modal {
		display: flex;
	}
</style>
