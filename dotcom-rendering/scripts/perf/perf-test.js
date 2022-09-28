const execa = require('execa');
const { warn, log } = require('../env/log.js').default;

const run = async () => {
	try {
		await execa('command', ['-v', 'fast']);
		const { stdout } = await execa('fast', [
			'--start-cmd',
			'make build;make start',
			'--target-url',
			'http://localhost:9000/ArticlePerfTest',
			'--append',
		]);

		log(stdout);
	} catch (e) {
		warn(e.stack);
		process.exit(1);
	}
};

run();
