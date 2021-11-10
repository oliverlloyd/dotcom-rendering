import { v4 as uuidv4 } from 'uuid';
import { Placeholder } from './Placeholder';

interface PortalProps {
	when?: 'immediate' | 'idle' | 'visible';
	showPlaceholder?: boolean;
	placeholderHeight?: number;
	children: JSX.Element;
}

/**
 * Inserts a component into the dom after the server side content has loaded.
 *
 * @param when - When the component should be inserted.
 * 		- immediate - Insert Portal without delay
 * 		- idle - Insert Portal when browser idle
 * 		- visible - Insert Portal when the marker element appears in viewport
 * @param showPlaceholder - If we need to render a placeholder on the server.
 * @param children - What you want inserted.
 *
 */
export const ClientPortal = ({
	when = 'immediate',
	showPlaceholder,
	placeholderHeight = 400,
	children,
}: PortalProps) => {
	const uuid = uuidv4();
	return (
		<>
			<gu-portal
				placeholderId={uuid}
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				name={children.type.name}
				when={when}
				props={JSON.stringify(children.props)}
			/>
			{showPlaceholder && (
				<Placeholder height={placeholderHeight} rootId={uuid} />
			)}
		</>
	);
};
