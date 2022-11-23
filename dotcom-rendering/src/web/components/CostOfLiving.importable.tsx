/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */

import { css } from '@emotion/react';
import {
	Button,
	ButtonLink,
	Checkbox,
	Option,
	Select,
} from '@guardian/source-react-components';
import { useState } from 'react';
import {
	Bar,
	ComposedChart,
	Legend,
	Line,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

// Things we could do tomorrow
// 1. Customisable options (type of milk etc?)
// 2. Other data sources that might have more impact than tea
// 3. Make it look prettier
// 4. The buttons should do something (petition mp etc)
// 5. International costs
// 6. Regional costs of energy
// 7. Graph needs units?

// Oat milk costs v
// 1.91","1.91","1.88","1.85","1.98","2.01","1.97","1.97","1.95","1.94","1.95","1.95","1.93"

const grid = css`
	display: grid;
	margin: 10px;
	row-gap: 5px;
	column-gap: 5px;
	grid-template-areas:
		'graph graph graph graph toggle-dairy'
		'graph graph graph graph toggle-sugar'
		'graph graph graph graph .'
		'graph graph graph graph .'
		'graph graph graph graph help '
		'graph graph graph graph mp'
		'graph graph graph graph about';
`;

const allData = [
	{
		month: 'Nov 21',
		cowMilk: 0.000675,
		oatMilk: 1.91 / 1000,
		teabag: 1.625,
		energyPerCup: 2.079,
	},
	{
		month: 'Dec 21',
		cowMilk: 0.000675,
		oatMilk: 1.91 / 1000,
		teabag: 1.729166667,
		energyPerCup: 2.079,
	},
	{
		month: 'Jan 22',
		cowMilk: 0.000675,
		oatMilk: 1.88 / 1000,
		teabag: 1.595833333,
		energyPerCup: 2.079,
	},
	{
		month: 'Feb 22',
		cowMilk: 0.000675,
		oatMilk: 1.85 / 1000,
		teabag: 1.5625,
		energyPerCup: 2.079,
	},
	{
		month: 'Mar 22',
		cowMilk: 0.000675,
		oatMilk: 1.98 / 1000,
		teabag: 1.520833333,
		energyPerCup: 2.079,
	},
	{
		month: 'Apr 22',
		cowMilk: 0.00075,
		oatMilk: 2.01 / 1000,
		teabag: 1.85,
		energyPerCup: 3.08,
	},
	{
		month: 'May 22',
		cowMilk: 0.00075,
		oatMilk: 1.97 / 1000,
		teabag: 1.783333333,
		energyPerCup: 3.08,
	},
	{
		month: 'Jun 22',
		cowMilk: 0.00085,
		oatMilk: 1.97 / 1000,
		teabag: 1.654166667,
		energyPerCup: 3.08,
	},
	{
		month: 'Jul 22',
		cowMilk: 0.0008,
		oatMilk: 1.95 / 1000,
		teabag: 1.616666667,
		energyPerCup: 3.08,
	},
	{
		month: 'Aug 22',
		cowMilk: 0.000875,
		oatMilk: 1.94 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.08,
	},
	{
		month: 'Sep 22',
		cowMilk: 0.000875,
		oatMilk: 1.95 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.08,
	},
	{
		month: 'Oct 22',
		cowMilk: 0.000875,
		oatMilk: 1.95 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.74,
	},
	{
		month: 'Nov 22',
		cowMilk: 0.00095,
		oatMilk: 1.93 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.74,
	},
];

const milkMap = {
	dash: 25,
	splash: 37,
};

export const CostOfLiving = () => {
	const [milkType, setMilkType] = useState('cowMilk');
	const [showBreakdown, setShowBreakdown] = useState(false);
	const [milkQuanity] = useState('splash');

	const getData = () => {
		const finalData = [];
		allData.map((all) => {
			const milkPricePerQuantity =
				milkType === 'none' ? 0 : all[milkType] * milkMap[milkQuanity];
			finalData.push({
				month: all.month,
				costPerCupOfTea:
					all.teabag + milkPricePerQuantity + all.energyPerCup / 4,
				teabag: all.teabag,
				milk: milkPricePerQuantity,
				energyCost: all.energyPerCup / 4,
			});
		});
		return finalData;
	};

	return (
		<div css={grid}>
			<div
				css={css`
					grid-area: graph;
					height: 200px;
				`}
			>
				{/* <ResponsiveContainer width="600px" height="200px"> */}
				<ComposedChart
					width={600}
					height={200}
					data={getData()}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					style={{ fontFamily: 'GuardianTextSans' }}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="month" />
					<YAxis domain={[1, 'auto']} />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="costPerCupOfTea"
						stroke="#052962"
					/>
					{showBreakdown && (
						<Bar dataKey="teabag" stackId="a" fill="#8884d8" />
					)}
					{showBreakdown && (
						<Bar dataKey="milk" stackId="a" fill="#82ca9d" />
					)}
					{showBreakdown && (
						<Bar dataKey="energyCost" stackId="a" fill="#FF0000" />
					)}
				</ComposedChart>
				{/* </ResponsiveContainer> */}
			</div>
			<Checkbox
				checked={showBreakdown}
				label="Show breakdown of costs?"
				onChange={(event) => setShowBreakdown(event.target.checked)}
			/>

			<Select label="Milk" onChange={(e) => setMilkType(e.target.value)}>
				<Option value="cowMilk">Cow</Option>
				<Option value="none">None</Option>
				<Option value="oatMilk">Oat</Option>
			</Select>

			{/* <ToggleSwitch
				label="With sugar"
				cssOverrides={css`
					grid-area: toggle-sugar;
				`}
				fontSize="small"
			/> */}
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
