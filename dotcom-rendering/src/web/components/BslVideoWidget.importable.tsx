import { brand, textSans } from '@guardian/source-foundations';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getBSLVideo } from '../lib/getBSLVideo';
import HandsIcon from '../../static/icons/bsl-hands-icon.svg';
import { YoutubeEmbedBlockComponent } from './YoutubeEmbedBlockComponent';

const buttonStyle = () => css`
	display: inline-flex;
	position: relative;
	border: none;
	background: none;
	padding: 0 8px;
	align-items: flex-end;
	jusify-content: space-between;
	cursor: pointer;

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

const messageStyle = (sidePadding?: boolean) => css`
	${textSans.medium()};
	font-weight: bold;
	display: inline-block;
	color: ${brand[300]};
	padding: 0 ${sidePadding ? '8px' : '0'};
	margin: 8px 0;

	a {
		color: ${brand[300]};
	}
`;

const iframeHolderStyle = () => css`
	padding: 8px 0;
	position: relative;
	width: 100%;
`;

interface Props {
	CAPIArticle: CAPIArticleType;
	format: ArticleFormat;
}

const YouTubeIframe = ({ embedCode }: { embedCode: string }) => {
	return (
		<div css={iframeHolderStyle}>
			<iframe
				style={{ width: '100%', minHeight: '300px' }}
				src={embedCode}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen={true}
			/>
		</div>
	);
};

const SupportMessage = ({ sidePadding }: { sidePadding?: boolean }) => (
	<span css={messageStyle(sidePadding)}>
		<a href="https://support.theguardian.com/uk/contribute">Support us</a>{' '}
		to help fund more accessible, live journalism.
	</span>
);

export const BslVideoWidget = ({ CAPIArticle, format }: Props) => {
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
				<SupportMessage sidePadding={false} />
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
			</div>
			<div>
				<SupportMessage sidePadding={false} />
			</div>
			{playerHasShown && (
				<div style={{ display: playerOpen ? 'block' : 'none' }}>
					<YoutubeEmbedBlockComponent
						embedUrl={`https://www.youtube-nocookie.com/embed/${videoDetails.id}?wmode=opaque&feature=oembed`}
						format={format}
						height={259}
						width={460}
						caption="BSL video"
						credit=""
						title="BSL video"
						isMainMedia={false}
					/>
				</div>
			)}
		</>
	);
};
