import { browser } from '$app/environment';
import type { Routine } from '../../types';

export function routines() {
	function load_from_storage() {
		if (browser) {
			const raw_timers = localStorage.getItem('snack_timers');
			if (raw_timers) {
				const timers = JSON.parse(raw_timers);
				routines = Object.values(timers);
			}
		}
	}

	let routines: Routine[] = $state([]);

	return {
		get routines() {
			return routines;
		},
		load_from_storage
	};
}

export type RoutineState = ReturnType<typeof routines>;
