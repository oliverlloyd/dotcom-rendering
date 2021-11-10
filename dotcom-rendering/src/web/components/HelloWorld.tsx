import React, { useEffect, useState } from 'react';

export const HelloWorld: React.FC<{ hello: string }> = ({ hello }) => {
	const [count, setCount] = useState(0);
	const [thing, setThing] = useState('');
	useEffect(() => {
		setThing('hydrated!');
	}, []);
	return (
		<span>
			<h1>{`hello ${thing} ${hello} ${count}`}</h1>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</span>
	);
};
