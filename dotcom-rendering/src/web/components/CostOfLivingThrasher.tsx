import { css } from '@emotion/react';
import { Button, ButtonLink } from '@guardian/source-react-components';
import { ToggleSwitch } from '@guardian/source-react-components-development-kitchen';
import { Legend, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

const grid = css`
	display: grid;
	grid-template-areas:
		'graph graph graph graph toggle-dairy'
		'graph graph graph graph toggle-sugar'
		'graph graph graph graph .'
		'graph graph graph graph .'
		'graph graph graph graph help '
		'graph graph graph graph mp'
		'graph graph graph graph about';
	margin: 10px;

	row-gap: 5px;
	column-gap: 5px;
`;

const data = [
	{
		name: 'Page A',
		'Teabag Price': 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		'Teabag Price': 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		'Teabag Price': 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		'Teabag Price': 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		'Teabag Price': 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		'Teabag Price': 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		'Teabag Price': 3490,
		pv: 4300,
		amt: 2100,
	},
];
export const CostOfLivingThrasher = () => {
	return (
		<div css={grid}>
			<div
				css={css`
					grid-area: graph;
					height: 200px;
				`}
			>
				<LineChart
					width={600}
					height={200}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="pv"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line
						type="monotone"
						dataKey="Teabag Price"
						stroke="#82ca9d"
					/>
				</LineChart>
			</div>
			<ToggleSwitch
				label="With milk"
				cssOverrides={css`
					grid-area: toggle-dairy;
				`}
			/>
			<ToggleSwitch
				label="With sugar"
				cssOverrides={css`
					grid-area: toggle-sugar;
				`}
				fontSize="small"
			/>
			<Button
				cssOverrides={css`
					grid-area: help;
				`}
				size="xsmall"
			>
				Get Help
			</Button>
			<Button
				cssOverrides={css`
					grid-area: mp;
				`}
				size="xsmall"
			>
				Petition your MP
			</Button>
			<ButtonLink
				cssOverrides={css`
					grid-area: about;
					text-align: left;
				`}
				priority="secondary"
			>
				How do we calculate this?
			</ButtonLink>
		</div>
	);
};
