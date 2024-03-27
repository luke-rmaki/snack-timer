import type { Routine } from '../../types';

export function save(routine: Routine) {
	const raw_timers = localStorage.getItem('snack_timers');
	if (raw_timers) {
		const timers = JSON.parse(raw_timers);
		timers[routine.name] = routine;
		localStorage.setItem('snack_timers', JSON.stringify(timers));
	} else {
		localStorage.setItem('snack_timers', JSON.stringify({ [routine.name]: routine }));
	}
}
