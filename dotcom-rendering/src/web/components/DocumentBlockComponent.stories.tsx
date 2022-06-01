import { css } from '@emotion/react';
import { DocumentBlockComponent } from './DocumentBlockComponent.importable';

export default {
	component: DocumentBlockComponent,
	title: 'Components/DocumentBlockComponent',
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			max-width: 620px;
			padding: 20px;
		`}
	>
		{children}
	</div>
);

export const documentEmbed = () => {
	return (
		<Container>
			<p>Scribd Document</p>
			<DocumentBlockComponent
				embedUrl="https://www.scribd.com/embeds/431975393/content"
				height={613}
				width={460}
				title=""
				isTracking={false}
				isMainMedia={false}
			/>
			<p>DocumentCloud Document</p>
			<DocumentBlockComponent
				embedUrl="https://embed.documentcloud.org/documents/20417938-test-pdf"
				height={700}
				width={990}
				title="TEST PDF (Hosted by DocumentCloud)"
				source="DocumentCloud"
				isTracking={false}
				isMainMedia={false}
			/>
		</Container>
	);
};
documentEmbed.story = { name: 'document embed' };
