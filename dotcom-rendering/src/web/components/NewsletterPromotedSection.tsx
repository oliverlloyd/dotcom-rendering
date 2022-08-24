import { css } from '@emotion/react';
import { brand, brandAlt, headline, space } from '@guardian/source-foundations';
import {
	Column,
	Columns,
	Hide,
	LinkButton,
	SvgArrowRightStraight,
} from '@guardian/source-react-components';
import { NewsletterDetail } from './NewsletterDetail';
import { Section } from './Section';

// TODO: Change this when we decide how to get this data through
// const MAIN_MEDIA =
// 	'https://i.guim.co.uk/img/uploads/2022/01/11/pushing_buttons_thrasher_hi.png?width=700&quality=50&s=f4be90f0ca470076df70cf895aeecda1';

// type Props = {
// 	newsletter: Newsletter & {
// 		mainMedia?: string; // just optional for now - see MAIN_MEDIA
// 		signupPage: string;
// 	};
// };

const headingStyle = css`
	margin-top: ${space[2]}px;
	margin-bottom: ${space[2]}px;
	${headline.small({ fontWeight: 'bold' })}
	color: ${brandAlt[400]};
`;

const flexContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${brand[500]};
	color: #f6f6f6;
	border: 1px dashed;
	border-radius: ${space[2]}px;
	margin: ${space[2]}px 0;
	padding: ${space[2]}px;
`;

const newsletterImage = css`
	min-width: 0;
	overflow: hidden;
`;

const newsletterFrequency = css`
	position: relative;
	top: 4px;
	right: 4px;
`;

const newsletterStub = {
	name: 'Her Stage',
	description:
		'Hear directly from incredible women from around the world on the issues that matter most to them',
	frequency: 'Monthly',
	mainMedia:
		'https://i.guim.co.uk/img/uploads/2022/01/17/Illustration.jpg?quality=85&s=4a3a5a915d672d1593f89dedec603944',
	signupPage: 'https://www.google.com',
	listId: 6018,
	identityName: 'her-stage',
	successDescription: "We'll send you Her Stage every month",
	theme: 'features',
	group: 'features',
};

export const NewsletterPromotedSection = () => {
	const newsletter = newsletterStub; // CHANGE THIS!

	const SectionHeading = () => (
		<h2 css={headingStyle}>You might also enjoy</h2>
	);

	return (
		<Section
			innerBackgroundColour={brand[400]}
			leftContent={<SectionHeading />}
			showTopBorder={false}
			stretchRight={true}
			verticalMargins={false}
		>
			<Hide from="leftCol">
				<SectionHeading />
			</Hide>

			<Columns css={flexContainer} collapseUntil="leftCol">
				<Column width={1 / 3}>
					<div css={newsletterImage}>
						<img src={newsletter.mainMedia} width="100%" />
					</div>
				</Column>
				<Column>
					<div
						css={css`
							display: flex;
						`}
					>
						<div>
							<h2
								css={css`
									${headline.small({ fontWeight: 'bold' })}
									margin-bottom: 4px;
								`}
							>
								{newsletter.name}
							</h2>
							<p
								css={css`
									${headline.xxsmall()}
									margin-bottom: 4px;
								`}
							>
								{newsletter.description}
							</p>
						</div>

						<LinkButton
							icon={<SvgArrowRightStraight />}
							iconSide="right"
							priority="secondary"
							size="small"
							href={newsletter.signupPage}
							css={css`
								align-self: flex-end;
							`}
						>
							Sign up
						</LinkButton>
					</div>
				</Column>

				<div css={newsletterFrequency}>
					<NewsletterDetail text={newsletter.frequency} />
				</div>
			</Columns>
		</Section>
	);
};
