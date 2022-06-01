// ----- Imports ----- //

import { withKnobs } from '@storybook/addon-knobs';
import { article } from 'fixtures/item';
import type { FC } from 'react';
import Footer from './';

// ----- Stories ----- //

const WithCcpa: FC = () => <Footer isCcpa={true} format={article} />;

const Default: FC = () => <Footer isCcpa={false} format={article} />;

// ----- Exports ----- //

export default {
	component: Footer,
	title: 'AR/Footer',
	decorators: [withKnobs],
};

export { Default, WithCcpa };
