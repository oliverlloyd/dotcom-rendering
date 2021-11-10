interface PortalProps {
	when?: 'immediate' | 'idle' | 'visible';
	children: JSX.Element;
}

/**
 * Inserts a component into the dom after the server side content has loaded.
 *
 * @param when - When the component should be inserted.
 * 		- immediate - Insert Portal without delay
 * 		- idle - Insert Portal when browser idle
 * 		- visible - Insert Portal when the marker element appears in viewport
 * @param children - What you want inserted.
 *
 */
export const InsertPortal = ({ when = 'immediate', children }: PortalProps) => (
	<gu-portal
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		name={children.type.name}
		when={when}
		props={JSON.stringify(children.props)}
	/>
);
