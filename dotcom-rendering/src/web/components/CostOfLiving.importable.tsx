/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */

import { css } from '@emotion/react';
import {
	Accordion,
	AccordionRow,
	Button,
	Checkbox,
	LinkButton,
	Option,
	Select,
} from '@guardian/source-react-components';
import { useState } from 'react';
import {
	Bar,
	ComposedChart,
	Legend,
	ResponsiveContainer,
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
		'graph graph graph graph breakdown'
		'graph graph graph graph cups'
		'graph graph graph graph dairy'
		'graph graph graph graph .'
		'graph graph graph graph .'
		'graph graph graph graph help '
		'graph graph graph graph mp'
		'graph graph graph graph .'
		'about about about about about';
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: minmax(20px, auto);
`;

const AVERAGE_TOMATO_WEIGHT = 0.1;
const AVERAGE_SAUSAGE_WEIGHT = 0.067 * 2;
const AVERAGE_MUSHROOM_WEIGHT = 0.2;
const AVERAGE_BACON_WEIGHT = 60;
const AVERAGE_BREAD_WEIGHT = 0.038 * 2;
const AVERAGE_EGG_WEIGHT = 2 / 12;
const AVERAGE_BEANS_WEIGHT = 0.5;

type FullEnglishDataType = {
	month: string;
	cowMilk: number;
	oatMilk: number;
	teabag: number;
	energyPerCup: number;
	tomato: number;
	sausage: number;
	mushroom: number;
	bread: number;
	egg: number;
	bacon: number;
	beans: number;
};

const allDataFullEnglish: FullEnglishDataType[] = [
	{
		month: 'Nov 21',
		cowMilk: 0.000675,
		oatMilk: 1.91 / 1000,
		teabag: 1.625,
		energyPerCup: 2.079,
		tomato: 240 * AVERAGE_TOMATO_WEIGHT,
		sausage: 513 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 325 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 106 * AVERAGE_BREAD_WEIGHT,
		egg: 243 * AVERAGE_EGG_WEIGHT,
		bacon: 0.709 * AVERAGE_BACON_WEIGHT,
		beans: 159 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Dec 21',
		cowMilk: 0.000675,
		oatMilk: 1.91 / 1000,
		teabag: 1.729166667,
		energyPerCup: 2.079,
		tomato: 241 * AVERAGE_TOMATO_WEIGHT,
		sausage: 513 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 323 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 107 * AVERAGE_BREAD_WEIGHT,
		egg: 243 * AVERAGE_EGG_WEIGHT,
		bacon: 0.711 * AVERAGE_BACON_WEIGHT,
		beans: 164 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Jan 22',
		cowMilk: 0.000675,
		oatMilk: 1.88 / 1000,
		teabag: 1.595833333,
		energyPerCup: 2.079,
		tomato: 242 * AVERAGE_TOMATO_WEIGHT,
		sausage: 531 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 326 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 108 * AVERAGE_BREAD_WEIGHT,
		egg: 243 * AVERAGE_EGG_WEIGHT,
		bacon: 0.712 * AVERAGE_BACON_WEIGHT,
		beans: 163 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Feb 22',
		cowMilk: 0.000675,
		oatMilk: 1.85 / 1000,
		teabag: 1.5625,
		energyPerCup: 2.079,
		tomato: 267 * AVERAGE_TOMATO_WEIGHT,
		sausage: 527 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 330 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 114 * AVERAGE_BREAD_WEIGHT,
		egg: 246 * AVERAGE_EGG_WEIGHT,
		bacon: 0.723 * AVERAGE_BACON_WEIGHT,
		beans: 166 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Mar 22',
		cowMilk: 0.000675,
		oatMilk: 1.98 / 1000,
		teabag: 1.520833333,
		energyPerCup: 2.079,
		tomato: 270 * AVERAGE_TOMATO_WEIGHT,
		sausage: 542 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 329 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 114 * AVERAGE_BREAD_WEIGHT,
		egg: 247 * AVERAGE_EGG_WEIGHT,
		bacon: 0.723 * AVERAGE_BACON_WEIGHT,
		beans: 164 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Apr 22',
		cowMilk: 0.00075,
		oatMilk: 2.01 / 1000,
		teabag: 1.85,
		energyPerCup: 3.08,
		tomato: 285 * AVERAGE_TOMATO_WEIGHT,
		sausage: 545 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 327 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 115 * AVERAGE_BREAD_WEIGHT,
		egg: 243 * AVERAGE_EGG_WEIGHT,
		bacon: 0.73 * AVERAGE_BACON_WEIGHT,
		beans: 166 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'May 22',
		cowMilk: 0.00075,
		oatMilk: 1.97 / 1000,
		teabag: 1.783333333,
		energyPerCup: 3.08,
		tomato: 280 * AVERAGE_TOMATO_WEIGHT,
		sausage: 545 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 330 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 118 * AVERAGE_BREAD_WEIGHT,
		egg: 257 * AVERAGE_EGG_WEIGHT,
		bacon: 0.745 * AVERAGE_BACON_WEIGHT,
		beans: 165 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Jun 22',
		cowMilk: 0.00085,
		oatMilk: 1.97 / 1000,
		teabag: 1.654166667,
		energyPerCup: 3.08,
		tomato: 279 * AVERAGE_TOMATO_WEIGHT,
		sausage: 581 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 331 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 120 * AVERAGE_BREAD_WEIGHT,
		egg: 259 * AVERAGE_EGG_WEIGHT,
		bacon: 0.788 * AVERAGE_BACON_WEIGHT,
		beans: 181 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Jul 22',
		cowMilk: 0.0008,
		oatMilk: 1.95 / 1000,
		teabag: 1.616666667,
		energyPerCup: 3.08,
		tomato: 278 * AVERAGE_TOMATO_WEIGHT,
		sausage: 575 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 330 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 124 * AVERAGE_BREAD_WEIGHT,
		egg: 264 * AVERAGE_EGG_WEIGHT,
		bacon: 0.817 * AVERAGE_BACON_WEIGHT,
		beans: 182 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Aug 22',
		cowMilk: 0.000875,
		oatMilk: 1.94 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.08,
		tomato: 271 * AVERAGE_TOMATO_WEIGHT,
		sausage: 590 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 334 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 126 * AVERAGE_BREAD_WEIGHT,
		egg: 272 * AVERAGE_EGG_WEIGHT,
		bacon: 0.811 * AVERAGE_BACON_WEIGHT,
		beans: 185 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Sep 22',
		cowMilk: 0.000875,
		oatMilk: 1.95 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.08,
		tomato: 280 * AVERAGE_TOMATO_WEIGHT,
		sausage: 595 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 336 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 128 * AVERAGE_BREAD_WEIGHT,
		egg: 291 * AVERAGE_EGG_WEIGHT,
		bacon: 0.838 * AVERAGE_BACON_WEIGHT,
		beans: 185 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Oct 22',
		cowMilk: 0.000875,
		oatMilk: 1.95 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.74,
		tomato: 285 * AVERAGE_TOMATO_WEIGHT,
		sausage: 593 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 336 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 130 * AVERAGE_BREAD_WEIGHT,
		egg: 292 * AVERAGE_EGG_WEIGHT,
		bacon: 0.835 * AVERAGE_BACON_WEIGHT,
		beans: 188 * AVERAGE_BEANS_WEIGHT,
	},
	{
		month: 'Nov 22',
		cowMilk: 0.00095,
		oatMilk: 1.93 / 1000,
		teabag: 1.766666667,
		energyPerCup: 3.74,
		tomato: 290 * AVERAGE_TOMATO_WEIGHT,
		sausage: 600 * AVERAGE_SAUSAGE_WEIGHT,
		mushroom: 337 * AVERAGE_MUSHROOM_WEIGHT,
		bread: 132 * AVERAGE_BREAD_WEIGHT,
		egg: 295 * AVERAGE_EGG_WEIGHT,
		bacon: 0.835 * AVERAGE_BACON_WEIGHT,
		beans: 189 * AVERAGE_BEANS_WEIGHT,
	},
];

// const interpolateValue = (a: number, b: number) => {
// 	return (a + b) / 2;
// };

// const interpolate = (data: RawData[]) => {
// 	const newData: RawData[] = [];

// 	data.forEach((element, index) => {
// 		newData.push(element);

// 		if (index + 1 < data.length - 1) {
// 			const next = data[index + 1];
// 			newData.push({
// 				month: element.month,
// 				cowMilk: interpolateValue(element.cowMilk, next.cowMilk),
// 				oatMilk: interpolateValue(element.oatMilk, next.oatMilk),
// 				teabag: interpolateValue(element.teabag, next.teabag),
// 				energyPerCup: interpolateValue(
// 					element.energyPerCup,
// 					next.energyPerCup
// 				),
// 				tomato: interpolateValue(element.tomato, next.tomato),
// 				sausage: interpolateValue(element.sausage, next.sausage),
// 				mushroom: interpolateValue(element.mushroom, next.mushroom),
// 				bread: interpolateValue(element.bread, next.bread),
// 				egg: interpolateValue(element.egg, next.egg),
// 				bacon: interpolateValue(element.bacon, next.bacon),
// 				beans: interpolateValue(element.beans, next.beans),
// 			});
// 		}
// 	});

// 	return newData;
// };

const SPLASH_OF_MILK = 37;

type ChartData = {
	month: string;
	costPerCupOfTea: number;
	teabag: number;
	total: number;
	milk: number;
	energyCost: number;
	tomato: number;
	sausage: number;
	mushroom: number;
	bread: number;
	egg: number;
	bacon: number;
	beans: number;
};
export const CostOfLiving = () => {
	const [milkType, setMilkType] = useState('cowMilk');
	const [showBreakdown, setShowBreakdown] = useState(true);

	const getData = () => {
		const finalData: ChartData[] = [];
		allDataFullEnglish.map((all: FullEnglishDataType) => {
			const milkCost = all[
				milkType as keyof FullEnglishDataType
			] as number;
			const milkPricePerQuantity =
				milkType === 'none' ? 0 : milkCost * SPLASH_OF_MILK;
			finalData.push({
				month: all.month,
				total: Math.ceil(
					all.teabag +
						milkPricePerQuantity +
						all.energyPerCup +
						all.tomato +
						all.sausage +
						all.mushroom +
						all.bread +
						all.egg +
						all.bacon +
						all.beans,
				),
				costPerCupOfTea: Math.ceil(
					all.teabag + milkPricePerQuantity + all.energyPerCup / 4,
				),
				teabag: Math.ceil(all.teabag),
				milk: Math.ceil(milkPricePerQuantity),
				energyCost: all.energyPerCup / 4,
				tomato: Math.ceil(all.tomato),
				sausage: Math.ceil(all.sausage),
				mushroom: Math.ceil(all.mushroom),
				bread: Math.ceil(all.bread),
				egg: Math.ceil(all.egg),
				bacon: Math.ceil(all.bacon),
				beans: Math.ceil(all.beans),
			});
		});
		return finalData;
	};

	return (
		<div css={grid}>
			<div
				css={css`
					grid-area: graph;
					margin-right: 10px;
				`}
			>
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart
						data={getData()}
						style={{ fontFamily: 'GuardianTextSans' }}
					>
						{/* <CartesianGrid strokeDasharray="3 3" /> */}
						<XAxis dataKey="month" />
						<YAxis domain={[300, 400]} />
						<Tooltip />
						<Legend />
						{!showBreakdown && (
							<Bar dataKey="total" fill="#9d6f13" />
						)}
						{showBreakdown && (
							<Bar
								stackId="a"
								dataKey="costPerCupOfTea"
								fill="#9d6f13"
							/>
						)}
						{/* {!showBreakdown && (
							<Bar dataKey="teabag" stackId="a" fill="#9d6f13" />
						)} */}
						{/* {showBreakdown && (
							<Bar dataKey="milk" stackId="a" fill="#e4cba7" />
						)} */}
						{showBreakdown && (
							<Bar dataKey="tomato" stackId="a" fill="#FB3640" />
						)}
						{showBreakdown && (
							<Bar dataKey="sausage" stackId="a" fill="#402103" />
						)}
						{showBreakdown && (
							<Bar
								dataKey="mushroom"
								stackId="a"
								fill="#766B5F"
							/>
						)}
						{showBreakdown && (
							<Bar dataKey="bread" stackId="a" fill="#CCB59D" />
						)}
						{showBreakdown && (
							<Bar dataKey="egg" stackId="a" fill="#F1C40F" />
						)}
						{showBreakdown && (
							<Bar dataKey="bacon" stackId="a" fill="#D90368" />
						)}
						{showBreakdown && (
							<Bar dataKey="beans" stackId="a" fill="#F75C03" />
						)}
						{showBreakdown && (
							<Bar
								dataKey="energyCost"
								stackId="a"
								fill="#7ab2a3"
							/>
						)}
					</ComposedChart>
				</ResponsiveContainer>
			</div>

			<Checkbox
				checked={showBreakdown}
				label="Show breakdown of costs?"
				onChange={(event) => setShowBreakdown(event.target.checked)}
				cssOverrides={css`
					grid-area: breakdown;
				`}
			/>

			<div
				css={css`
					grid-area: dairy;
				`}
			>
				<Select
					label="Type of Milk"
					onChange={(e) => setMilkType(e.target.value)}
				>
					<Option value="cowMilk">Cow</Option>
					<Option value="none">None</Option>
					<Option value="oatMilk">Oat</Option>
				</Select>
			</div>

			<LinkButton
				cssOverrides={css`
					grid-area: help;
				`}
				href="https://helpforhouseholds.campaign.gov.uk/"
				target="_blank"
				size="xsmall"
			>
				Get Help
			</LinkButton>
			<Button
				cssOverrides={css`
					grid-area: mp;
				`}
				size="xsmall"
			>
				Petition your MP
			</Button>
			<Accordion
				cssOverrides={css`
					grid-area: about;
					text-align: left;
					font-family: 'GuardianTextSans';
				`}
			>
				<AccordionRow label="How do we calculate this?">
					<ul>
						<li
							css={css`
								padding: 5px;
							`}
						>
							- We used the website{' '}
							<a href="https://www.trolley.co.uk/">Trolley</a> to
							find the price of a single Tetley teabag, as well as
							the cost of a splash of milk.
						</li>
						<li
							css={css`
								padding: 5px;
							`}
						>
							- Full english ingredients came from Trolley and
							ONS.
						</li>
						<li
							css={css`
								padding: 5px;
							`}
						>
							-{' '}
							<a href="https://www.foodstandards.gov.au/science/monitoringnutrients/ausnut/foodmeasures/Pages/2011-Dash-and-splash-measures-program.aspx">
								The Australia New Zealand Food Standards
							</a>{' '}
							define a splash of milk as 37ml (on average).
						</li>
						<li
							css={css`
								padding: 5px;
							`}
						>
							-{' '}
							<a href="https://www.ofgem.gov.uk/information-consumers/energy-advice-households/check-if-energy-price-cap-affects-you">
								Ofgem
							</a>{' '}
							was used to source the energy cap for a kWh of
							electricity.
						</li>
						<li>
							- We've estimated that 0.11kWh is needed to heat 1
							litre of water, which is about 4 cups.
						</li>
					</ul>
				</AccordionRow>
				<></>
			</Accordion>
		</div>
	);
};
