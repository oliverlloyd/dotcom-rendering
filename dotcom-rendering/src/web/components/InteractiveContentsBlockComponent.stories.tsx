import { css } from '@emotion/react';
import { NumberedList } from '../../../fixtures/generated/articles/NumberedList';
import { enhanceInteractiveContentsElements } from '../../model/enhance-interactive-contents-elements';
import { InteractiveContentsBlockComponent } from './InteractiveContentsBlockComponent';

// @ts-expect-error: we know that NumberedList fixture has an interactive content block
const interactiveContentsBlock: InteractiveContentsBlockElement =
	enhanceInteractiveContentsElements(NumberedList.blocks)[0].elements.find(
		(block) =>
			block._type ===
			'model.dotcomrendering.pageElements.InteractiveContentsBlockElement',
	);

export default {
	component: InteractiveContentsBlockComponent,
	title: 'Components/InteractiveContentsBlockElement',
};

export const Default = () => (
	<div
		css={css`
			margin: 20px;
		`}
	>
		<InteractiveContentsBlockComponent
			subheadingLinks={interactiveContentsBlock.subheadingLinks}
			endDocumentElementId={interactiveContentsBlock.endDocumentElementId}
		/>
	</div>
);
