export const getName = (marker: HTMLElement): string | null => {
	const name = marker.getAttribute('name');
	if (!name) {
		console.error(
			`🚨 Error creating portal. No component name attribute supplied, check children.type.name in Portal.tsx 🚨`,
		);
	}
	return name;
};
