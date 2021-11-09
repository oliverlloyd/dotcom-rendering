import React from 'react';

interface HydrateProps<P> {
	component: React.ComponentType<P>;
	name: string;
	when?: 'immediate' | 'idle';
	props: P;
}

/**
 * Hydrates a component in the client by async loading the exported component.
 * This does not take children.
 * THE COMPONENT MUST BE A DEFAULT EXPORT FOR NOW.
 * i am aware that this makes me hypocritical
 *
 * @param component - The component as it is exported.
 * @param name - The location of the component in /components.
 * @param when - When hydration should take place.
 * @param data - What you want fed into the component.
 *
 */
export const Hydrate: <P>(
	_: HydrateProps<P>,
) => React.ReactElement<HydrateProps<P>> = ({
	component: Component,
	name,
	when = 'immediate',
	props,
}) => (
	<>
		<div
			id="my-root-id"
			data-hydrate="true"
			data-name={name}
			data-when={when}
			data-props={JSON.stringify(props)}
		>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...props} />
		</div>
	</>
);
