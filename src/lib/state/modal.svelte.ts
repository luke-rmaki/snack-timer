export function create_modal() {
	let open = $state(false);

	function toggle() {
		open = !open;
	}

	function show() {
		open = true;
	}

	function close() {
		open = false;
	}

	return {
		get is_open() {
			return open;
		},
		toggle,
		show,
		close
	};
}

export type Modal = ReturnType<typeof create_modal>;
