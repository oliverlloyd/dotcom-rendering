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

interface Props {
	CAPIArticle: CAPIArticleType;
}

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

	console.log({playerOpen, noJS})
	return (
		<>
			<button
				css={buttonStyle}
				onClick={() => {
					console.log('!!!!')
					setPlayerOpen(!playerOpen);
				}}
			>
				<div>
					<PlayButton />
				</div>
				<span>BSL</span>
			</button>
			{playerOpen && <div>{videoUrl}</div>}
		</>
	);
};
