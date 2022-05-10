import { brand, textSans } from '@guardian/source-foundations';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getBSLVideo } from '../lib/getBSLVideo';
import HandsIcon from '../../static/icons/bsl-hands-icon.svg';

const buttonStyle = () => css`
	display: inline-flex;
	position: relative;
	border: none;
	background: none;
	padding: 0 8px;
	align-items: flex-end;
	jusify-content: space-between;

	span {
		background-color: ${brand[400]};
		color: white;
		${textSans.medium()};
		padding: 0px 4px;
		margin-left: 8px;
	}

	svg {
		stroke: white;
		height: auto;
		width: 45px;
	}
`;

const messageStyle = (padding?: boolean) => css`
	${textSans.medium()};
	font-weight: bold;
	color: ${brand[300]};
	${padding ? `padding: 0 8px;` : ''}

	a {
		color: ${brand[300]};
	}
`;

const iframeHolderStyle = () => css`
	padding: 8px 0;
	position: relative;
	width: 100%;

	iframe: {
		width: 100%;
	}
`;

interface Props {
	CAPIArticle: CAPIArticleType;
}

const YouTubeIframe = ({ embedCode }: { embedCode: string }) => {
	return (
		<div css={iframeHolderStyle}>
			<iframe
				width="560"
				height="315"
				src={embedCode}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen={true}
			/>
		</div>
	);
};

const SupportMessage = ({ padding }: { padding?: boolean }) => (
	<span css={messageStyle(padding)}>
		<a href="https://support.theguardian.com/uk/contribute">Support us</a>{' '}
		to help fund more accessible, live journalism.
	</span>
);

export const BslVideoWidget = ({ CAPIArticle }: Props) => {
	const videoDetails = getBSLVideo(CAPIArticle.pageId);
	const [playerOpen, setPlayerOpen] = useState<boolean>(false);
	const [playerHasShown, setPlayerHasShown] = useState<boolean>(false);
	const [noJS, setNoJS] = useState(true);

	useEffect(() => {
		// If hook runs we know client-side JS is enabled
		setNoJS(false);
	}, []);

	if (!videoDetails) {
		return null;
	}

	if (noJS) {
		return (
			<>
				<details>
					<summary
						css={buttonStyle()}
						aria-label="show BSL video of article"
					>
						<HandsIcon />
						<span>BSL</span>
					</summary>

					<YouTubeIframe embedCode={videoDetails.embedUrl} />
				</details>
				<SupportMessage padding={true} />
			</>
		);
	}

	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<button
					aria-label="show BSL video of article"
					css={buttonStyle}
					onClick={() => {
						setPlayerOpen(!playerOpen);
						setPlayerHasShown(true);
					}}
				>
					<HandsIcon />
					<span>BSL</span>
				</button>
				<SupportMessage padding={true} />
			</div>

			{playerHasShown && (
				<div style={{ display: playerOpen ? 'block' : 'none' }}>
					<YouTubeIframe embedCode={videoDetails.embedUrl} />
				</div>
			)}
		</>
	);
};
