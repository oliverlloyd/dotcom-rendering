import { css } from '@emotion/react';
import { getBSLVideo } from '../../lib/getBSLVideo';
import PlayButton from '../../../static/icons/video-icon.svg';

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

export const BSLWidget = ({ CAPIArticle }: Props) => {
	const videoUrl = getBSLVideo(CAPIArticle.pageId);
	if (!videoUrl) {
		return null;
	}

	return (
		<button css={buttonStyle}>
			<div>
				<PlayButton />
			</div>
			<span>BSL</span>
		</button>
	);
};
