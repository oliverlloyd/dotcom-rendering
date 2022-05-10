import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getBSLVideo } from '../lib/getBSLVideo';
import PlayButton from '../../static/icons/video-icon.svg';

const buttonStyle = css`
	display: flex;
	background-color: black;
	color: white;
	padding: 10px;
	border-radius: 5px;
	align-items: center;

	div {
		background-color: white;
		padding: 5px;
	}

	span {
		padding: 0 5px;
	}
`;

const detailsStyle = css`
	background-color: black;
	border-radius: 5px;
	color: white;

	summary {
		justify-content: space-between;
		display: flex;
		padding: 10px;
		align-items: center;
	}

	svg {
		fill: white;
	}
`;

interface Props {
	CAPIArticle: CAPIArticleType;
}

const YouTubeIframe = ({ embedCode }: { embedCode: string }) => {
	return (
		<iframe
			width="560"
			height="315"
			src={embedCode}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen={true}
		/>
	);
};

export const BslVideoWidget = ({ CAPIArticle }: Props) => {
	const videoUrl = getBSLVideo(CAPIArticle.pageId);
	const [playerOpen, setPlayerOpen] = useState<boolean>(false);
	const [noJS, setNoJS] = useState(true);

	useEffect(() => {
		// If hook runs we know client-side JS is enabled
		setNoJS(false);
	}, []);

	if (!videoUrl) {
		return null;
	}

	console.log({ playerOpen, noJS });

	if (noJS) {
		return (
			<details css={detailsStyle}>
				<summary>
					<span>play BSL video</span>
					<PlayButton />
				</summary>

				<YouTubeIframe embedCode="https://www.youtube.com/embed/5Y7WdsuNlJY" />
			</details>
		);
	}

	return (
		<>
			<button
				css={buttonStyle}
				onClick={() => {
					setPlayerOpen(!playerOpen);
				}}
			>
				<div>
					<PlayButton />
				</div>
				<span>BSL</span>
			</button>
			{playerOpen && (
				<div>
					{videoUrl}
					<YouTubeIframe embedCode="https://www.youtube.com/embed/5Y7WdsuNlJY" />
				</div>
			)}
		</>
	);
};
