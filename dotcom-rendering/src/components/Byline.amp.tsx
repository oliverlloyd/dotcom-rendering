import { getBylineComponentsFromTokens } from '../lib/byline';
import type { TagType } from '../types/tag';
import { bylineTokens } from '../lib/byline-tokens.amp';

type Props = {
	byline?: string;
	tags: TagType[];
	guardianBaseURL: string;
};

export const Byline = ({ byline, tags, guardianBaseURL }: Props) => {
	if (!byline) {
		return null;
	}

	const contributorTags = tags.filter((tag) => tag.type === 'Contributor');
	const tokens = bylineTokens(byline, contributorTags);

	const bylineComponents = getBylineComponentsFromTokens(tokens, tags);

	const linkedByline = bylineComponents.map((bylineComponent) => {
		if (typeof bylineComponent === 'string') {
			return bylineComponent;
		}
		return (
			<a
				key={bylineComponent.tag.id}
				href={`${guardianBaseURL}/${bylineComponent.tag.id}`}
			>
				{bylineComponent.tag.title}
			</a>
		);
	});

	return <>{linkedByline}</>;
};
