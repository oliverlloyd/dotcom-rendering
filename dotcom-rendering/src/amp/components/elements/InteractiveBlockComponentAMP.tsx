import { ClassNames } from '@emotion/react';
import React from 'react';
import { NotRenderableInDCR } from '../../../lib/errors/not-renderable-in-dcr';
import { ShowMoreButton } from '../ShowMoreButton';

export const InteractiveBlockComponentAMP: React.FunctionComponent<{
	url?: string;
	isMandatory?: boolean;
}> = ({ url, isMandatory }) => {
	// If this element is mandatory, we don't know if we can render it properly, so we have to
	// throw an error and chuck the whole page out of AMP. You're barred son.
	if (isMandatory) {
		throw new NotRenderableInDCR();
	}

	if (!url) {
		return null;
	}

	return (
		<ClassNames>
			{({ css }) => {
				const styles = css`
					height: 100px;
					width: 100%;
					margin-top: 16px;
					margin-bottom: 12px;
				`;

				const showMore = css`
					&[overflow] {
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
					}
				`;

				return (
					<amp-iframe
						class={styles}
						src={url}
						layout="responsive"
						sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
						height="1"
						width="1"
						resizable=""
						data-cy="atom-embed-url"
					>
						<div overflow="" className={showMore}>
							<ShowMoreButton />
						</div>
					</amp-iframe>
				);
			}}
		</ClassNames>
	);
};
