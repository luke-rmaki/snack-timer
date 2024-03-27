<script lang="ts">
	import { routines, type RoutineState } from '$lib/state/routines.svelte';
	import type { Routine } from '../../types';

	const my_routines = routines();
	my_routines.load_from_storage();
</script>

<select name="routines">
	{#each my_routines.routines as routine}
		<option value={routine.name}>{routine.name}</option>
	{/each}
</select>

<style>
</style>
