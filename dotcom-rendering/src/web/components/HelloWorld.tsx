import React, { useState } from 'react';

export const HelloWorld: React.FC<{ hello: string }> = ({ hello }) => {
	const [count, setCount] = useState(0);
	return (
		<span>
			<h1>{`hello ${hello} ${count}`}</h1>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</span>
	);
};
