import { brand, textSans } from '@guardian/source-foundations';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Button } from '@guardian/source-react-components';
import { getBSLVideo } from '../lib/getBSLVideo';
import HandsIcon from '../../static/icons/bsl-hands-icon.svg';
import { YoutubeEmbedBlockComponent } from './YoutubeEmbedBlockComponent';

const buttonContentStyle = () => css`
	display: inline-flex;
	position: relative;
	border: none;
	background: none;
	padding: 8px 0;
	align-items: center;
	jusify-content: space-between;
	cursor: pointer;

	b {
		color: white;
		${textSans.xxlarge()};
	}

	svg {
		padding: 0 16px;
		stroke: white;
		height: 30px;
		width: auto;

		path {
			fill: white;
		}
	}

	span {
		color: white;
		${textSans.medium()};
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

// const iframeHolderStyle = () => css`
// 	padding: 8px 0;
// 	position: relative;
// 	width: 100%;
// `;

interface Props {
	CAPIArticle: CAPIArticleType;
	format: ArticleFormat;
}

// const YouTubeIframe = ({ embedCode }: { embedCode: string }) => {
// 	return (
// 		<div css={iframeHolderStyle}>
// 			<iframe
// 				style={{ width: '100%', minHeight: '300px' }}
// 				src={embedCode}
// 				title="YouTube video player"
// 				frameBorder="0"
// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 				allowFullScreen={true}
// 			/>
// 		</div>
// 	);
// };

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
	// const [noJS, setNoJS] = useState(true);

	// useEffect(() => {
	// 	// If hook runs we know client-side JS is enabled
	// 	setNoJS(false);
	// }, []);

	if (!videoDetails) {
		return null;
	}

	// if (noJS) {
	// 	return (
	// 		<>
	// 			<details>
	// 				<summary aria-label="show BSL video of article">
	// 					<div
	// 						style={{
	// 							display: 'inline-block',
	// 							backgroundColor: brand[400],
	// 						}}
	// 					>
	// 						<div css={buttonContentStyle()}>
	// 							<b>▶</b>
	// 							<HandsIcon />
	// 							<span>BSL</span>
	// 						</div>
	// 					</div>
	// 				</summary>

	// 				<YouTubeIframe embedCode={videoDetails.embedUrl} />
	// 			</details>
	// 			<SupportMessage sidePadding={false} />
	// 		</>
	// 	);
	// }

	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Button
					onClick={() => {
						setPlayerOpen(!playerOpen);
						setPlayerHasShown(true);
					}}
					size="default"
				>
					<div css={buttonContentStyle()}>
						<b>▶</b>
						<HandsIcon />
						<span>BSL</span>
					</div>
				</Button>
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
